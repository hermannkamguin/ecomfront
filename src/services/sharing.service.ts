import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {User} from "../app/model/userModel";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class SharingService {

  // @ts-ignore
  public users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>();

  constructor(private userService: UserService) {
    this.userService.allUser().subscribe((value)=>{
      this.users.next(value);
    })
  }
}
