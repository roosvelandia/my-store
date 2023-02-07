import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  // when a variable is private i can't access it from html
  //private name = 'roosvell';
  name = 'Luffy';
  age = 55;
  img = 'https://i.ytimg.com/vi/ha0-qytMD9k/maxresdefault.jpg'
  btnDisabled = true;
  person ={
    name: 'Robin',
    age: 19,
    avatar: 'https://i.seadn.io/gae/HMXjc3fdO98oMW__BMaHRsE05c9IAiH0QepxAdmgi7df1b27yiKSQzq0STXReTmmNOjhL1LJZ-9DXpAUtJIxVBoYS4cFBqgkUTgj?auto=format&w=1000'

  }
}
