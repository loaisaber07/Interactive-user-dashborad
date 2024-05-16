import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Iuser } from '../Iuser/iuser';
import { enviroment } from '../../enviroment/enviroment';
import { IUserById } from '../Iuser/iuser-by-id';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  httpOption;

  constructor(private http: HttpClient) {
    this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'

      })
    };
  }
  getAllUserByPage(page: number): Observable<Iuser> {
    return this.http.get<Iuser>(`${enviroment.APIURL}?page=${page}`).pipe(
      retry(3),
    )

  }
  getUserByID(id: number): Observable<IUserById> {
    return this.http.get<IUserById>(`${enviroment.APIURL}/${id}`);
  }
}
