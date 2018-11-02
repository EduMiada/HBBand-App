import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { CoreService } from '../core/core.service';
import { TouchSequence } from 'selenium-webdriver';

@Injectable({ providedIn: 'root' })

export class UserService {

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get<User[]>(CoreService.SERVER_URL + CoreService.API_ENDPOINT.API_USER);
  }

  createUser(user:User){
    return this.http.post<User>(CoreService.SERVER_URL + CoreService.API_ENDPOINT.API_SIGNUP,user);
  }

  getProfile(userID){
    return this.http.get<User>(CoreService.SERVER_URL + CoreService.API_ENDPOINT.API_USER + '/'+ userID);
  }

  updateProfile(userID, user){
    return this.http.patch(CoreService.SERVER_URL + CoreService.API_ENDPOINT.API_USER + '/'+ userID, JSON.stringify(user));
  }

  //return the local stored user object 
  getLocalProfile():User{
    return CoreService.getLoggedUser().user;
  }

  logout(){
    return CoreService.resetLoggedUser();
  }
}
