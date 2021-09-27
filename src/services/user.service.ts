import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../app/model/userModel";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private backUrl = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  allUser(): Observable<User[]>{
    return this.http.get<User[]>(this.backUrl + "/UserAll");
  }
}
