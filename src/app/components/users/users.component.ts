import {Component, Input, OnInit} from '@angular/core';
import { GithubService} from '../../service/github.service';
import {Repositories, UserModel} from '../../Model/user.model';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  repository;
  repositoryModel: Repositories;

  repo = new FormGroup({
    username: new FormControl('')
  });

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
  }
  getUserRepo() {
    const username = this.repo.controls.username.value;
    this.githubService.getApi(username)
      .subscribe((data) => {
      this.repositoryModel = data;
    } ) ;
  }
}
