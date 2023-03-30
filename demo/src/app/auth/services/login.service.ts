import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { SessionService } from 'src/app/core/services/session.service';
import { Session } from 'src/app/models/session';
import { User } from 'src/app/models/user';
import { env } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private session: SessionService,
    private http: HttpClient
  ) { }

login(user: User): Observable<Session>{
  return this.http.get<User[]>(`${env.authURL}/users`).pipe(
    map((users: User[]) => {
      let userValid = users.find((u: User) => u.userName_ === user.userName_ && u.email_ === user.email_ && u.password_ === user.password_);

      if(userValid){
        const session: Session = {
          sessionActive: true,
          userActive: userValid
        }
        return session
      }
      else{
        const session: Session = {
          sessionActive: false
        }

        return session
      }
    })
  );
}

}
