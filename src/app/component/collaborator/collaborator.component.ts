import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotesService } from 'src/app/services/notesService/notes.service';
import { UserService } from 'src/app/services/userService/user.service';


@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {

  firstName = localStorage.getItem('firstName')
  lastName = localStorage.getItem('lastName')
  email = localStorage.getItem('email')

  userArray : any ;
  collabArray: any ;
  values: any;
  dialog: any;
  collaboratorEmail:any;
  user:any;
  collaboratorlist: any;
  collaboratordata: any;
  
  

  constructor(private noteService: NotesService, public dialogRef: MatDialogRef<CollaboratorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private userService: UserService) 
    {
      this.collaboratordata = data
     }
 

  ngOnInit(): void {
    this.collaboratorlist=this.collaboratordata.collaborators
  }

  searchList(e: any) {
    let data = {
      searchWord: e.target.value
    }

    this.userService.searchListService(data).subscribe((response: any) => {
      console.log(response);
      this.userArray = response.data.details
      console.log("User array list", this.userArray);

    })

  }

  getSelectedEmail(user:any){
    this.collaboratorEmail= user.email;
    this.userArray=user;
  }

  addCollaborator() {
    let reqPayload = {
  
      firstName: this.userArray.firstName,
      lastName: this.userArray.lastName,
      email: this.userArray.email,
      userId: this.userArray.userId

    }
    this.noteService.addcollaborators(reqPayload,this.data.id).subscribe((result: any) => {
      console.log(result);
      this.collabArray = result.data.data
    }, error => {
      console.log(error);

    })

  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  

}
