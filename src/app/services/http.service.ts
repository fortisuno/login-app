import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  private url = '/AcxpertBack/Rest/logInPost';

  constructor( private http: HttpClient ) { }

  login( usuario: UserModel) {
    const authData = {
      logInAuthSDT: {
        ClientID: '77898395e05a439893e03592ff1e60f4',
        User: usuario.user,
        Renew: 'Y',
        Password: usuario.password
      }
    }

    console.log(JSON.stringify(authData));

    return this.http.post(this.url,authData);
  }
}
