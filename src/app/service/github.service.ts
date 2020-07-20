import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GithubService {

  url = 'https://api.github.com/users/';
  // ToDo colocar o clientid e clientsecret

  constructor(private httpClient: HttpClient) { }

  getApi(username: string): Observable<any> {
    return this.httpClient
      .get(`${this.url}${username}/repos`);
  }
}
