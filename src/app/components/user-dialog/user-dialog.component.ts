import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Repositories} from '../../Model/user.model';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css']
})
export class UserDialogComponent implements OnInit{

   constructor(@Inject(MAT_DIALOG_DATA) public repositoryData: Repositories) {}

  ngOnInit(){

  }



}
