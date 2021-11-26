import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { UpdateNoteComponent } from '../update-note/update-note.component';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {

  message:any;

  @Input() allNotes: any = [];

  @Output() displaytogetallnotes = new EventEmitter<string>();
 


  cards:any;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  openDialog(note:any) {
    const dialogRef = this.dialog.open(UpdateNoteComponent, 
    { width:"370px",
      data:note
    });

    dialogRef.afterClosed().subscribe((result:any)=> {
      console.log(`Dialog result: ${result}`);
      this.displaytogetallnotes.emit(this.message);
    });
  }

  receiveMessageFromIcon($event: any){
    console.log("get message from take-notes via emiter",$event);
    this.message = $event;
    this.displaytogetallnotes.emit(this.message);
  }

}

