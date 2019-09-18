import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Keyboardlist';
  fruits = [
    "apple",
    "apricot",
    "avocado",
    "banana",
    "bell pepper",
    "bilberry",
    "blackberry",
    "blackcurrant",
    "blood orange",
    "blueberry",
    "boysenberry",
    "breadfruit",
    "canary melon",
    "cantaloupe",
    "cherimoya",
    "cherry",
    "chili pepper",

  ];


  logChange(change: any): void {
    console.log(change);

  }
}
