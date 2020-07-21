import {Component, Input, OnInit} from '@angular/core';
import { GithubService} from '../../service/github.service';
import {Repositories, UserModel} from '../../Model/user.model';
import {FormControl, FormGroup} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar'
import {MatDialog} from '@angular/material/dialog';
import {UserDialogComponent} from '../user-dialog/user-dialog.component';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  repositoryModel: Repositories;
  userModel: UserModel;
  distribution = 100 / 2 + '%';
  hasUser = false;


  repo = new FormGroup({
    username: new FormControl()
  });

  constructor(private githubService: GithubService,
              private snackBar: MatSnackBar,
              public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  getUserPic() {
    const username = this.repo.controls.username.value;
    this.githubService
      .getUserPic(username)
      .subscribe(data => {
        this.userModel = data;

      })
  }

  getUserRepo() {
    const username = this.repo.controls.username.value;
    this.githubService
        .getRepository(username)
        .subscribe(data => {
            this.repositoryModel = data;
            console.log(this.repositoryModel);
            // this.repoName = this.repositoryModel[0].name;
            // this.repoDescription = this.repositoryModel[0].description;
            this.hasUser = true;
            // console.log(this.repoName);
          },
    error => {
      if(error.statusText === 'Not Found'){
        this.snackBar.open('Usuário não encontrado', 'X', {
          duration: 2000,
        });

      }else{
        this.snackBar.open('Ocorreu um erro ao tentar buscar o usuário', 'X', {
          duration: 2000,
        });
      }

    },);
    this.getUserPic()
  }

  // objetoLista = (objeto) => {
  //   const lista = [];
  //   const keys = Object.keys(objeto);
  //   keys.forEach(element => {
  //     const obj = {... objeto[element]};
  //     lista.push(obj);
  //   });
  //   return lista;
  // };

  openDialog() {
    this.dialog.open(UserDialogComponent, {
      data: this.repositoryModel
    });
  }
}
