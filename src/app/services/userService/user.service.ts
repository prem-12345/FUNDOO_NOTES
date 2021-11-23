import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private httpService: HttpService) {
  }


  registration(reqPayLoad: any) {
    console.log("data is in user service",reqPayLoad);
    let options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    }
    return this.httpService.postService('user/userSignUp', reqPayLoad, false, options);

  }

  login(data: any) {
    console.log("data is in user service",data);
    let options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    }
    return this.httpService.postService('user/login', data, false, options);
  }

  forgotPasswordForm(data: any) {
    console.log("data is in user service",data);
    let options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    }
    return this.httpService.postService('user/reset', data, false, options);
  }

  encode(data:any) {
    const formBody = [];
    for (const property in data) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(data[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    return formBody.join('&');
  }

  resetPasswordForm(data: any,token:any) {
    console.log("data is in user service",data);
    let options = {
      headers: new HttpHeaders({
        'Authorization':token,
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    }
    return this.httpService.postService('user/reset-password', this.encode(data), true, options);
  }


  
 
}
