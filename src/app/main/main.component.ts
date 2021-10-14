import { Component, OnInit } from '@angular/core';
import {StartService} from "../../services/start.service";
import {Observable, Subject} from "rxjs";
import {User} from "../model/userModel";
import {UserService} from "../../services/user.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {SharingService} from "../../services/sharing.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  public hello: string | undefined;

  public user: User[] | undefined;

  public userForm: FormGroup;
  constructor(private userService: UserService, private formBuilder: FormBuilder, private sharingService: SharingService ) {

    this.userForm = this.formBuilder.group({
      name: '',
      email: ''
    });
  }

  ngOnInit(): void {
    this.sharingService.users.subscribe(
      (value)=>{
        this.user = value;
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log("complete");

    })
    /*
    this.userService.allUser().subscribe(
      (value) => {
        this.user = value;
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log("complete");
      })
      cd .;

     */

  }

  submit(): void{
    let userValue = this.userForm.value;
    let user = new User(userValue['name'], userValue['email']);

    let userServiceValue;

    this.userService.addUser(user).subscribe((value)=>{
      this.userService.allUser().subscribe((value)=>{
        userServiceValue = value;
        this.sharingService.users.next(userServiceValue);

      })
    });

  }

  helloWords(): void {
  }
}
