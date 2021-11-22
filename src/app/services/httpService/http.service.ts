import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  BaseUrl = environment.BaseUrl;
  constructor(private httpClient: HttpClient) { }

  postService(url = '', reqPayLoad: any = null, token: boolean = false, httpOptions: any = {}) {
    console.log('Data in http service', reqPayLoad);
    return this.httpClient.post(this.BaseUrl + url, reqPayLoad, token && httpOptions)
  }

}
