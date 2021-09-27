import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StartService {

  private backUrl = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  httpOptions = {
    responseType: 'text' as 'json'
  };

  helloWord(): Observable<string>{
    // @ts-ignore
    return this.http.get<string>(this.backUrl + 'sttr', this.httpOptions);

  }
}
