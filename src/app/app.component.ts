import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  // when a variable is private i can't access it from html
  //private name = 'roosvell';
  name = 'Roosvell';
  age = 55;
  img = 'https://i.ytimg.com/vi/ha0-qytMD9k/maxresdefault.jpg'
}
