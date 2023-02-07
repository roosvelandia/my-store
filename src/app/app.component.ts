import { Component } from '@angular/core';
import { Fruit } from './fruits.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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

  friends: string[]= ['Sanji','Nami','Brook','chooper'];
  newFriend = '';

  fruits: Fruit[] = [
    {
      name: 'goma goma',
      berries: 400,
      image: './assets/images/goma.webp',
      category: 'Best'
    },
    {
      name: 'hana hana',
      berries: 100,
      image: './assets/images/hana.webp',
      category: 'medium'
    },
    {
      name: 'mera mera',
      berries: 200,
      image: './assets/images/mera.webp'
    }
  ]

  toogleButton(){
    this.btnDisabled = !this.btnDisabled;
  }

  addAge(){
    this.person.age++;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event){
    const element= event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addFriend(){
    // used to add an element to the array.
    this.friends.push(this.newFriend);
    this.newFriend = '';
  }

  deleteFriend(index: number){
    // used to delete.
    this.friends.splice(index, 1);
  }
}
