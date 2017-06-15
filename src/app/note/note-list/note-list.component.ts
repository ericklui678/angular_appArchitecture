// be sure to import Input, Output, and EventEmitter when using Input and Output
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  // Create Input called 'myNotes'
  @Input() myNotes;
  // Create Output event called myEvent
  @Output() myEvent = new EventEmitter();

  callParent() {
    // callParent() will emit event in parent's attr of (myEvent)
    // passing number 7 to parent
    this.myEvent.emit(7);
  }

  constructor() { }

  ngOnInit() {
  }

}
