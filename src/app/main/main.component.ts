import { Component, OnInit } from '@angular/core';
import {StartService} from "../../services/start.service";
import {Subject} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  constructor(private startservice: StartService ) { }

  ngOnInit(): void {
  }

  helloWord(): string{
    let hello = new Subject<string>()

    this.startservice.helloWord().subscribe((value) => {
      console.log(value);
      hello.next(value);
    },
      (error) => {
      console.log("erreurr");
      });

    // @ts-ignore
    return hello.asObservable();
  }

}
