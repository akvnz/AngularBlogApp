import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { 

  }

  
  validateLogin(user: User){
    return this.httpClient.post('/api/user/login',{
      username : user.username,
      password : user.password
  })
  }
}
