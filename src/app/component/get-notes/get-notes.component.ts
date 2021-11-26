import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notesService/notes.service';

@Component({
  selector: 'app-get-notes',
  templateUrl: './get-notes.component.html',
  styleUrls: ['./get-notes.component.scss']
})
export class GetNotesComponent implements OnInit {
  token: any;
  notesArray: any = [];
  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    this.getAllNotes();
   }

   //Get all-notes using get service
  getAllNotes(){
    this.notesService.GetallNotes().subscribe((notes: any) => {
      this.notesArray = notes.data.data.reverse();
      console.log("Received data from notes-service in the reverse", this.notesArray);
      this.notesArray = this.notesArray.filter((notesData: any)=>{
        return notesData.isDeleted === false && notesData.isArchived === false;
      })
      
    })
  }
    receiveMessage($event: any) {
    console.log($event);
    this.getAllNotes();
  }

  receiveMessagefromdisplaycard($event: any){
    console.log("get updated notes after delete",$event);
    this.getAllNotes();
  }
}


