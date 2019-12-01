import { Component, OnInit, Input } from '@angular/core';
import { GroupService } from '../../services/group.service';
import { Member } from '../../models/Member';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.sass']
})
export class MembersComponent implements OnInit {
  @Input() member:Member;
  public errorMsg;
  constructor(private _groupsService:GroupService, private location:Location)
  { }

  ngOnInit() {
  }

}

