import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-create-project-button',
  templateUrl: './create-project-button.component.html',
  styleUrls: ['./create-project-button.component.css']
})
export class CreateProjectButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  createProject () {
    // Implement routing once other components are available and routes are set
    console.log("Clicked Start a new project!")
  }
  plusIconSource: string = "../../assets/plus.svg";

}
