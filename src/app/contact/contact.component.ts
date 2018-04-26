import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email/email.service';
import { MetaService } from '../meta/meta.service';

class Contact {
  email: string;
  subject: string;
  text: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  submitted: boolean;
  model: Contact;

  constructor(private emailService: EmailService, private metaService: MetaService) {}

  ngOnInit() {
    this.submitted = false;
    this.model = { email: '', subject: '', text: '' };
    this.metaService.updateMetaTitleAndDescription();
  }

  onSubmit() {
    this.submitted = true;
    this.emailService.sendEmail(this.model).subscribe(email => {});
  }
}
