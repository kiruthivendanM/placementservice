import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserService } from './user.service';  // Import your UserService

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  // Add HttpClientModule here
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

