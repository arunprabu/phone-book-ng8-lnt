import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: []
})
export class AddContactComponent implements OnInit {

  // Step 1: Create FormGroup for HTML form tag
  contactForm: FormGroup;
  isSaved: boolean;

  constructor( private router: Router, private contactService: ContactService) { }

  ngOnInit() {
    // Step 2: Setup the contactForm using FormGroup
    this.contactForm = new FormGroup({
      // Step 3: Create FormControls for the FormGroup -- Ref this comp's html for step 4
      name: new FormControl('a', Validators.required), // Step 9. Add validations -- ref html for step 10
      phone: new FormControl('1231', Validators.required),
      email: new FormControl('a@b.com', [Validators.required, Validators.email])
    });
  }

  async contactFormSubmitHandler() {
    // Step 8: get the form data
    console.log(this.contactForm.value);

    // 1. send the above data to service
      // 1.1 connect to the service using dep injection -- ref constructor block
      // 1.2 send the data
    const status: any = await this.contactService.createContact(this.contactForm.value);
    console.log(status); // 2. get the resp from service

    if (status && status.id) {
      this.isSaved = true;
    } else {
      this.isSaved = false;
    }

  }

  backBtnClickHandler() {
    // navigating to diff url
    this.router.navigate(['contacts']);
  }

}
