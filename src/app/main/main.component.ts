import { Component, OnInit } from '@angular/core';
import {StartService} from "../../services/start.service";
import {Observable, Subject} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  public hello: string | undefined;

  constructor(private startservice: StartService ) {
  }

  ngOnInit(): void {
    this.startservice.helloWord().subscribe(
      (value) => {
        this.hello = value;
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log("complete");
      })

  }

  helloWords(): void {
  }
}
