import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  private projectName = "Project Name!";

  constructor() { }

  ngOnInit() {
  }

  navigateHome() {
    // Implement routing once other components are available and routes are set
    console.log("Clicked Home!");
  }
  homeIconSource: string = "../../assets/home.svg";

}
