const username: string | number = 'roosvell';
const sum = (a: number, b:number)=>{
  return a + b;
}
sum(1,2);

class Person {
  /*
  ****declare variables, need when you don't have public attributes
  lastName: string;
*/
age: number;

  constructor (age: number, public lastName: string){
    /*
  ****intialize variables, need when you don't have public attributes
    this.lastName = lastName;
    */
    this.age = age;
  }

  roos = new Person(16,'roosvell');

}
