import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../services/star-wars-people.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit {
  @Input() person: Person<any>;

  @Output() routeToPersonEventEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }

  routeToPerson(url) {
    this.routeToPersonEventEmitter.emit(url);
  }
}
