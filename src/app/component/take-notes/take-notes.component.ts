import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notesService/notes.service';

@Component({
  selector: 'app-take-notes',
  templateUrl: './take-notes.component.html',
  styleUrls: ['./take-notes.component.scss']
})
export class TakeNotesComponent implements OnInit {

  constructor(private noteService:NotesService) { }

  ngOnInit(): void {
  }
  
  displayNoteCard: any = false;
 
  takeNote(){
    this.displayNoteCard = true;
  }
 
  closeNote(){

    let data={'title':'This is First Note', 'description':'This is First Note Description'}
    this.noteService.createNote(data).subscribe((respone:any) => {
      console.log(respone);
    },err => {console.log(err)} )


    this.displayNoteCard = false;
  }

}
