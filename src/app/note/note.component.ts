import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  notes = [
    {title: 'first note'},
    {title: 'second note'},
    {title: 'third note'},
  ];

  invoked(event) {
    console.log('invoked', event);
  }

  constructor() { }

  ngOnInit() {
  }

}
