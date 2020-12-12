import { Component, OnInit } from '@angular/core';
import { ToastrServiceService } from './common/toastr-service.service';
import { Event } from './event';

@Component({
  selector: 'events-app-root',
  templateUrl: './events-app.component.html',
  styleUrls: ['./events-app.component.css']
})

export class EventsAppComponent implements OnInit {

  ngOnInit(): void {

  }

  title: string;
  greeting: string;
  fromChild: number;

  constructor(private toastr : ToastrServiceService) {
    this.title = 'my-app';
    this.greeting = 'Hello World from parent to child!';

  }

  getStartTimeClass(){
    return ['green', 'bold'];
  }

  handleEventClicked(data: number) {
    this.fromChild = data;

  }

  tryAToastr(name : string){
     this.toastr.success(name);

  }
  
}
