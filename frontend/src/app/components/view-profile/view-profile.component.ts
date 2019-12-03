import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { User } from 'src/app/models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  constructor(private _userService: UserService, private location:Location) { }

  User:User;
  errorMsg:any;

  ngOnInit() {
    this._userService.getUserInfo()
    .subscribe(data => {
      this.User = data;},
      error => this.errorMsg = error);
  }

  updateUser(event)
  {
    const valueName = event.target.parentNode.querySelector('#name').value;
    const valueBio = event.target.parentNode.querySelector('#bio').value;
    
    this._userService.updateUserInfo(valueName, valueBio);
  }
}
