import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public buttonName:any = 'Hide';
  public show:boolean = false;
  user = {
    name: 'Doe',
    firstName: 'John',
    age: 25,
    quote: '',
    photo: 'https://randomuser.me/api/portraits/lego/2.jpg',
  };
  constructor() { }

  ngOnInit() {
  }

  hideAge() {
    this.show = !this.show;

    if(this.show) { 
      this.buttonName = 'Hide';
    } else {
      this.buttonName = 'Show';
    }
  }
}
