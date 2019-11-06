import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-control',
  templateUrl: './user-control.component.html',
  styleUrls: ['./user-control.component.css']
})
export class UserControlComponent implements OnInit {

  private userName = "Username";
  constructor() { }

  ngOnInit() {
  }

  logout() {
    // Implement routing once other components are available and routes are set
    console.log("Clicked Logout!");
   }

   userThumbnail = "../../assets/user.png";

}
