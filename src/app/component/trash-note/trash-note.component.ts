import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notesService/notes.service';

@Component({
  selector: 'app-trash-note',
  templateUrl: './trash-note.component.html',
  styleUrls: ['./trash-note.component.scss']
})
export class TrashNoteComponent implements OnInit {

  notesArray : any = [];


  constructor( private notesService: NotesService) { }

  ngOnInit(): void {
    this.getTrashNoteList();
    console.log("ngOnInit calling")
  }

  // get trashed notes fron get service
  getTrashNoteList(){
    console.log("notes is in trash-notes")
    this.notesService.getTrashList().subscribe((notes: any) => {
      console.log("response from trash-list",notes);
      this.notesArray = notes.data.data.reverse();
      this.notesArray=this.notesArray.filter((noteData:any)=>{
        return noteData.isDeleted === true;
       });
      console.log('trashlist is in trash-note',this.notesArray);
    })
  }
  receiveMessagefromdisplaycard($event: any){
    console.log("get updated notes after delete",$event);
    this.getTrashNoteList();
  }
  }




