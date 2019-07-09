import { Component, OnInit } from '@angular/core';
import { Order } from '../order';

@Component({
  selector: 'app-sign-up',
  template: `
    <h1>WESH ALORS</h1>
    <h2>{{ emailName }}</h2>
    <form (ngSubmit)="signUp.valid && onSubmit()" #signUp="ngForm">
      <div>
        Form submitted ? {{signUp.submitted}}
        Form valid ? {{signUp.valid}}
        Form invalid ? {{signUp.valid}}
      </div>
      <div>
        <label for="email-order">Email</label>
        <input [(ngModel)]="model.email" #email="ngModel" type="email" name="email-order" required email />
      </div>
      <div *ngIf="email.errors">
        <span *ngIf="email.errors.required && signUp.submitted">Le champ est requis</span>
        <span *ngIf="email.errors.email && signUp.submitted">Le champ email est invalide</span>
      </div>
      <div>
        <label for="user-order">User</label>
        <input [(ngModel)]="model.user" #name="ngModel" type="text" name="user-order" required minlength="4" maxlength="25" />
      </div>
      <div *ngIf="name.errors">
        <span *ngIf="name.errors.maxlength && signUp.submitted">Le champ user ne doit pas dépasser 25 caractères</span>
        <span *ngIf="name.errors.minlength && signUp.submitted">Le champ user doit faire au moins 4 caractères</span>
      </div>
      <button type="submit">Sauvegarder</button>
    </form>
`
})

export class SignUpComponent implements OnInit {
  model: Order = new Order();
  constructor() { }
  onSubmit() {
      console.log(this.model);
  }
  ngOnInit() {
  }
}