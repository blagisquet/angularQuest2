import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  template: `
  <div>
    <h1>WESH ALORS</h1>
  <h2>{{ emailName }}</h2>
  <label>
    <input [(ngModel)]="emailName" type="email" class="form-control" name="email" />
  </label>
</div>
`
})
export class SignUpComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}