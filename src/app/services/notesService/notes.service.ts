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
        'Authorization':this.token,
      })
    }
    return this.httpService.postService('notes/addNotes', reqPayLoad, true, options);
  }

}

