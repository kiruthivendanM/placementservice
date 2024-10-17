import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'user-module';

  constructor(private userService: UserService) {
    this.getUserDetails();
  }

  register(registerForm: NgForm) {
    if (registerForm.valid) {
      this.userService.registerUser(registerForm.value).subscribe(
        (resp: any) => {
          console.log(resp);
          registerForm.reset();
          this.getUserDetails(); // Refresh the user details
        },
        (err: any) => {
          console.log(err);
        }
      );
    }
  }
  

  getUserDetails() {
    this.userService.getUsers().subscribe(
      (resp) => {
        console.log(resp);
        this.userDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  userDetails = null as any;

  deleteUser(user: any) {
    this.userService.deleteUser(user.id).subscribe(
      (resp) => {
        console.log(resp);
        this.getUserDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  userToUpdate = {
    id: null as any,
    name: "",
    age: 0,
    dob: "",
    gender: "",
    education: "",
    city: ""
  };

  edit(user: any) {
    this.userToUpdate = { ...user };
  }

  updateUser() {
    this.userService.updateUser(this.userToUpdate).subscribe(
      (resp) => {
        console.log(resp);
        this.getUserDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
