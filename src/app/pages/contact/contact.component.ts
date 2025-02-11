import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactMapComponent } from '../../components/contact-map/contact-map.component';
import { ContactInfoComponent } from '../../components/contact-info/contact-info.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ContactMapComponent,
    ContactInfoComponent,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contactForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.maxLength(50)]],
      lastname: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      message: ['', [Validators.required, Validators.maxLength(6000)]],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.successMessage = 'Votre message a été envoyé avec succès !';
      this.errorMessage = '';
      console.log(this.contactForm.value);
    } else {
      this.errorMessage = 'Veuillez remplir correctement tous les champs.';
      this.successMessage = '';
    }
  }
}
