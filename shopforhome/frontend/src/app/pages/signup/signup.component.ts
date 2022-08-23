import {Component, OnInit} from '@angular/core';
import {formatNumber, Location} from '@angular/common';
import {User} from "../../models/User";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User;
  submitted = false;
  constructor( private location: Location,
               private userService: UserService,
               private router: Router) {
    this.user = new User();
     

  }
  registerForm = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]),
      name: new FormControl('', [Validators.required, Validators.minLength(4),Validators.pattern('^([a-zA-Z]+ )*[a-zA-Z]+$')]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern("^\\d{10}$")]),
      address: new FormControl('', [Validators.required,Validators.pattern('^([a-zA-Z0-9]+ )*[a-zA-Z0-9]+$')]),

    }
  );


  ngOnInit() {

  }
  get f() {
    return this.registerForm.controls;
  }


  
  onSubmit() {
    this.userService.signUp(this.user).subscribe(u => {
      this.router.navigate(['/login']);
    },
        e => {});
  }

}
function ngOnInit(): import("@angular/forms").ValidatorFn | import("@angular/forms").ValidatorFn[] | import("@angular/forms").AbstractControlOptions {
  throw new Error('Function not implemented.');
}

