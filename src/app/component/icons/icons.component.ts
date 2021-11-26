import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotesService } from 'src/app/services/notesService/notes.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { TrashNoteComponent } from '../trash-note/trash-note.component';
import { ArchiveNotesComponent } from '../archive-notes/archive-notes.component';


@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  isTrashComponent:boolean = false;
  isArchive:boolean = false;

  @Input() noteCard: any;
  
  @Output() iconToDisplay = new EventEmitter<string>();


  constructor(private notesService: NotesService, private _snackBar: MatSnackBar, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    let com = this.activatedRoute.snapshot.component;

    if (com == TrashNoteComponent) {
      this.isTrashComponent = true;
      console.log(this.isTrashComponent);
    }

    if (com == ArchiveNotesComponent) {
      this.isArchive = true;
      console.log(this.isArchive);
    }

  }


  // Delete note and move to trash
  deleteNote() {
    console.log(this.noteCard);

    let deleteData = {
      noteIdList: [this.noteCard.id],
      isDeleted: true
    }
    console.log("deleted data", deleteData);

    this.notesService.moveToTrash(deleteData).subscribe((response: any) => {
      console.log(response);
      this.iconToDisplay.emit(response);
      this._snackBar.open('Note deleted Successful', '', {
        duration: 2000,
      })
    }, error => {
      console.log(error);
      this._snackBar.open('Note delete Unsuccessful', '', {
        duration: 2000,
      })
    }
    )
  }
  

  //Notes move to archive
  moveToArchive(){
    let req = {
      noteIdList: [this.noteCard.id],
      isArchived: true,
    }
    this.notesService.archivedservice(req).subscribe((response:any)=>{
      console.log('move to archive');
      this.iconToDisplay.emit(response)
      console.log((response.data));
    })
  }


  //Notes delete forever
  deleteForever() {
    
    console.log(this.noteCard);

    let deleteData = {
      noteIdList: [this.noteCard.id],
      isDeleted: false
    }
    console.log("deleted data", deleteData);

    this.notesService.deleteNoteForever(deleteData).subscribe((response: any) => {
      console.log(response);
      this.iconToDisplay.emit(response)
      this._snackBar.open('Note deleted Successful', '', {
        duration: 2000,
      })
    }, error => {
      console.log(error);
      this._snackBar.open('Note delete Unsuccessful', '', {
        duration: 2000,
      })
    }
    )
  }

  }











