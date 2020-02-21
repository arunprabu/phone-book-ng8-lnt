import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../../models/contact';
import { Subscription } from 'rxjs';

declare var $: any; // using jquery inside ng component

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styles: []
})
export class ContactDetailsComponent implements OnInit, OnDestroy {

  contactData: Contact;
  duplicateContactData: Contact;
  isUpdated: boolean;

  contactSubscription: Subscription;

  constructor(private contactService: ContactService, private route: ActivatedRoute) { }

  ngOnInit() {

    // read url parameters in angular 4, 5, 6, 7, 8
    const id = this.route.snapshot.paramMap.get('id');

    // 1. call the service method with the url
    this.contactSubscription = this.contactService.getContactById(id)
      .subscribe( ( res: Contact) => {  // 2. get resp from the service
        console.log(res);
        this.contactData = res;
      });
  }

  onEditModalOpen() {
    this.duplicateContactData = JSON.parse(JSON.stringify(this.contactData));
  }

  async updateBtnHandler() {
    console.log(this.duplicateContactData);
    // recommended: Promise
    const status: Contact = await this.contactService.updateContact(this.duplicateContactData);
    console.log(status);

    if (status && status.id) {
      this.isUpdated  = true;
      this.contactData = status;
      // close the modal after 4 sec
      setTimeout( () => {
        $('#editContactModal').modal('hide');
      }, 4000);
      // send a new req to get the data afresh.
    }

  }

  ngOnDestroy() {
    this.contactSubscription.unsubscribe();
  }
}
