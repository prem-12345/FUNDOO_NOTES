import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notesService/notes.service';
import { Output, EventEmitter } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-take-notes',
  templateUrl: './take-notes.component.html',
  styleUrls: ['./take-notes.component.scss']
})
export class TakeNotesComponent implements OnInit {
  title = '';
  description = '';

  constructor(private noteService:NotesService, private _snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }

  @Output() messageEvent = new EventEmitter<string>();
  
  displayNoteCard: any = false;
 
  takeNote(){
    this.displayNoteCard = true;
  }
 
  //creating note 
  closeNote(){
    let noteData = {
      title: this.title,
      description: this.description,
    }
    console.log(noteData);

    this.noteService.createNote(noteData).subscribe((respone:any) => {
      console.log(respone);
      this.messageEvent.emit(respone);
      this._snackBar.open('Note is created', '',{
        duration:2000,
      })

    },err => {console.log(err)} )
    this.displayNoteCard = false;
  }

}
