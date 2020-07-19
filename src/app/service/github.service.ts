import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  url = 'https://api.github.com/users/';
  constructor(private httpClient: HttpClient) { }

  getApi(username: string): Observable<any> {
    return this.httpClient.get<any>(this.url + username + '/repos');
  }
}
