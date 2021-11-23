import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-take-notes',
  templateUrl: './take-notes.component.html',
  styleUrls: ['./take-notes.component.scss']
})
export class TakeNotesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayImage: any = true;
  displayNoteCard: any = false;
 
 
  matCardCLick(){
    this.displayImage = false;
    this.displayNoteCard = true;
  }
 
  closeMatCard_2(){
    let data={'title':'This is First Note', 'description':'This is First Note Description'}
    // this.noteService.createNote(data).subscribe((respone:any) => {
    //   console.log(respone);
    // },err => {console.log(err)} )
    this.displayImage = true;
    this.displayNoteCard = false;

   
  }

}
