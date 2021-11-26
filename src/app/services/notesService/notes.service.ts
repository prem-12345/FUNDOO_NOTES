import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NotesService {

  token:any;

  constructor(private httpService: HttpService) { }

  createNote(reqPayLoad: any) {
    this.token=localStorage.getItem('token');
    console.log("Data is in notes service",reqPayLoad);

    let options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':this.token
      })
    }
    return this.httpService.postService('notes/addNotes', reqPayLoad, true, options);
  }


  GetallNotes() {
    this.token = localStorage.getItem('token');
    console.log("Data is in notes service");

    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.httpService.Getservice('/notes/getNotesList',true ,options);
  }

  moveToTrash(reqPayload: any) {
    console.log("in trashnoteservice", reqPayload);
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })

    }
    return this.httpService.postService('/notes/trashNotes', reqPayload, true, httpOptions)
  }

  getTrashList(){
    console.log("Data is in notes service");
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.httpService.Getservice('/notes/getTrashNotesList', true, options )
  }


  archivedservice(reqPayload: any) {
    console.log("in trashnoteservice", reqPayload);

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })

    }
    return this.httpService.postService('notes/archiveNotes', reqPayload, true, httpOptions)
  }

  getarchiveservice() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })

    }
    return this.httpService.Getservice('notes/getArchiveNotesList', true, httpOptions)
  }
  

  updatenoteservice(reqPayload:any){
  
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })
  
    }
    return this.httpService.postService('notes/updateNotes', reqPayload,true, httpOptions)
  }

  deleteNoteForever(reqPayload: any) {
    console.log("in note service", reqPayload);
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })

    }
    return this.httpService.postService('/notes/deleteForeverNotes', reqPayload, true, httpOptions)
  }


}

