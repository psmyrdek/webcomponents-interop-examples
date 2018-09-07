import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../shared/contacts.service';
import { Contact } from '../shared/contact.model';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contacts: Contact[] = [];
  avatarSize = 100;

  constructor(private service: ContactsService) { }

  ngOnInit() {
    this.contacts = this.service.getAll();
  }

  makeSmaller() {
    this.avatarSize -= 10;
  }

  makeBigger() {
    this.avatarSize += 10;
  }

  resetSize() {
    this.avatarSize = 100;
  }

}
