import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { query } from '@angular/animations';


@Injectable({
  providedIn: 'root'
})
export class BackendserviceService {
// baseurl='http://localhost:3000'
baseurl='http://13.234.117.104:3000'

constructor(private http: HttpClient,
  ) { }
  isLoggedIn() {

    return !!localStorage.getItem('token');
  }
  getToken() {
    return localStorage.getItem('token');
  }
  getUserInfo(parm1) {
    if (!localStorage.getItem('userInfo'))
      return false;
    else
      return JSON.parse(localStorage.getItem('userInfo'))[parm1];
  }
logout(){
  return localStorage.removeItem('token')
}
  login(userDetails){
    return this.http.get<any>(this.baseurl+'/remotecare/r/user/login?userId=' + userDetails.userId + '&password='+userDetails.password+'');
  }
  adduser(Userform){
    return this.http.post<any>(this.baseurl+'/remotecare/i/user',Userform)
  }
  
}

 

