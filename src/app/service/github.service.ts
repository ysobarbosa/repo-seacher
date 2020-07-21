import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class GithubService {

  private client_id = '595f97044b9b84227fb5';
  private client_secret = '1d3ed2b84e8c8453958b8284059e38653df813f5';
  url = 'https://api.github.com/users/';
  // ToDo colocar o clientid e clientsecret

  constructor(private httpClient: HttpClient) { }

  getRepository(username: string): Observable<any> {
    return this.httpClient
      .get(`${this.url}${username}/repos`);
  }

  getUserPic(username: string): Observable<any> {
    return this.httpClient
    .get(`${this.url}${username}`);
  }
};
