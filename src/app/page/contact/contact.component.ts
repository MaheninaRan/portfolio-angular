import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  emailForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialisation du formulaire avec des validations
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  onSubmit(): void {
    if (this.emailForm.valid) {
      const emailData = this.emailForm.value;
      console.log('Email envoyé avec succès !', emailData);
      // Ici, vous pouvez envoyer l'email via une API backend
    } else {
      console.log('Le formulaire est invalide.');
    }
  }

}
