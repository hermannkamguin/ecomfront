import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StartService {

  private backUrl = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  helloWord(): Observable<string>{


    // @ts-ignore
    return this.http.get(this.backUrl + 'hello');

  }
}
