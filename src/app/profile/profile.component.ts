import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  firstname = 'sarath'
  imagelink = 'https://pbs.twimg.com/ext_tw_video_thumb/1719988293595770880/pu/img/s0IF7ckyq3FPMurA.jpg'

  defaultValue = 'Type Here'
  defaultValues = 'Enter Here'

  userDetails = {
    name: 'Kumar das',
    age: 35,
    address: {
      city: 'Newyork city',
      country: 'America',
    },
    email: 'kumardas009@gmail.com',
  }


  users = [
    { id: 1, name: 'Manu Das', age: 25, city: 'Kerala', country: 'India' },
    { id: 2, name: 'Shani Baby', age: 30, city: 'Karnataka', country: 'India' },
    { id: 3, name: 'Keeerthi', age: 23, city: 'Tamilnadu', country: 'India' },
    { id: 4, name: 'Baby Jisna', age: 20, city: 'Goa', country: 'India' },
    { id: 5, name: 'Sruthi', age: 26, city: 'Kerala', country: 'India' },


  ];



  handleButtonClick() {
    console.log('Button Clicked!');
  }

  componentValue(e: any) {
    console.log(e.target.value);

  }
  changeValue(e: any) {
    console.log(e.target.value);


  }
}
