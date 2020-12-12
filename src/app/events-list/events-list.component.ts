import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventsService } from '../service/events.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  @Input() greets : string;
  @Output() eventClick  = new EventEmitter();
  saluto : string = 'Ciao';
  events : any[];
  num : number;

  constructor(private eventService : EventsService) { }

  handleClickMe()
  {
    this.num = Math.random();
    this.eventClick.emit(this.num);
  }

 

  newClick(){
    this.saluto = this.saluto === 'Hello' ? 'Ciao' : 'Hello';
  }

  getStartTimeClass(){
    return ['green', 'bold'];
  }

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }

}
