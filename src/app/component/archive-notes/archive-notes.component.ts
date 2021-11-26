import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notesService/notes.service';

@Component({
  selector: 'app-archive-notes',
  templateUrl: './archive-notes.component.html',
  styleUrls: ['./archive-notes.component.scss']
})
export class ArchiveNotesComponent implements OnInit {

  notesArray: any;

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    this.getArchiveList();
  }

  // Getting archive-notes list
  getArchiveList() {
    this.notesService.getarchiveservice().subscribe((result: any) => {
      console.log("received archive notes", result);
      this.notesArray = result.data.data.reverse();
      this.notesArray=this.notesArray.filter((noteData:any)=>{
        return noteData.isDeleted === false;
       });

    }, error => {
      console.log(error);

    })
  }
  receiveMessagefromdisplaycard($event: any){
    console.log("get updated notes after delete",$event);
    this.getArchiveList();
  }

}
