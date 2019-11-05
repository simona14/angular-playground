import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { UserControlComponent } from './user-control/user-control.component';
import { CreateProjectButtonComponent } from './create-project-button/create-project-button.component';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
