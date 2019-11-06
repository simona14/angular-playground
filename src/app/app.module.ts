import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { UserControlComponent } from './user-control/user-control.component';
import { CreateProjectButtonComponent } from './create-project-button/create-project-button.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: "", component: AppComponent },
  { path: "create-project", component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    UserControlComponent,
    CreateProjectButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    // RouterModule.forRoot(
    //   appRoutes,
    //   { enableTracing: true } // for debug only
    // )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
