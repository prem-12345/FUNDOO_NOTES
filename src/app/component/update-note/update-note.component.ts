import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotesService } from 'src/app/services/notesService/notes.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {
  title: any;
  description: any;
  // colour: any;
  id: any;
  message:any;

  @Output() displaytogetallnotes = new EventEmitter<string>();

  constructor(
    public dialogRef: MatDialogRef<UpdateNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private notesService: NotesService) {
    console.log("Data is in update-note", data);
    this.title = data.title;
    this.description = data.description;
    this.id = data.id;
    // this.colour = data.color;
  }

  ngOnInit(): void {

  }


  //update notes
  onUpdate() {
    this.id;

    let data = {
      title: this.title,
      description: this.description,
      noteId: this.id,
      // color:this.colour
    }

    this.notesService.updatenoteservice(data).subscribe((result: any) => {
      console.log("updated notes", result);
      this.title = ''
      this.description = ''
      this.dialogRef.close(result);
    })
  }

  receiveMessageFromIcon($event: any){
    console.log("get message from take-notes via emiter",$event);
    this.message = $event;
    this.displaytogetallnotes.emit(this.message);
  }

}
