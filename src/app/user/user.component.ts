import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  imagePath: string ='/assets/Pooja.png';
  // get imagePath(){
  //   return 'Pooja.jpeg';
  //   return 'Pooja.jpeg?v=' + new Date().getTime(); // To prevent caching

  // }
  name = 'Pooja';
}

