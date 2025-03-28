import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  photo: String = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Ftask-logo&psig=AOvVaw2Ov5iKqo2KOve2XKn7HEGM&ust=1743289412581000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJjC66LxrYwDFQAAAAAdAAAAABAE";
}
