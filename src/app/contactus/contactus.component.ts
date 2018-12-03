import { Component, OnInit } from '@angular/core';
import { Contact } from './contactData';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  contactModel = new Contact('', '', '', '');

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log("Form submit " + JSON.stringify(this.contactModel));
  }

}
