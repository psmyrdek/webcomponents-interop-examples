import { Component, Input } from '@angular/core';
import { Contact } from '../shared/contact.model';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent {

  @Input()
  contact: Contact;

  @Input()
  avatarSize: number;

  optionsVisible: boolean = false;

  constructor() { }

  handleOptions() {
    this.optionsVisible = true;
  }

}
