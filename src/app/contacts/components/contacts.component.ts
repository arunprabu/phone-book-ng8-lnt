import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Subscription } from 'rxjs';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: []
})
export class ContactsComponent implements OnInit, OnDestroy {

  contactList: Contact[];

  contactsSubscription: Subscription;

  constructor( private contactService: ContactService ) {
    console.log('Inside Constructor in ContactsComponent');
  }

  ngOnInit() {
    console.log('Inside ngOnInit in ContactsComponent');
    // ideal place for ajax calls
    // 1. call the service
    this.contactsSubscription = this.contactService.getContacts()
      .subscribe( (res: Contact[]) => { // 2. get the response from service
        console.log(res);
        this.contactList = res;
      });
  }

  ngOnDestroy() {
    console.log('Inside Destroy');
    // ideal place for unsubscribe, clearing the data
    this.contactsSubscription.unsubscribe();
    if (this.contactList && this.contactList.length > 0) {
      this.contactList.length = 0;
    }
  }
}
