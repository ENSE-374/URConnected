import {Component, OnInit} from '@angular/core';
import {GroupService} from '../services/group.service';
import {Group} from '../models/group.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  groups: Group[] = [];

  constructor(private groupService: GroupService) {
  }

  ngOnInit() {
    this.groups = this.groupService.getAllGroups();
    console.dir(this.groups);
  }

  unsubscribeToGroup(id: number) {
    this.groupService.unsubscribeToGroup(id);
    this.groups = this.groupService.getAllGroups();
    console.log(this.groups);
    this.groupService.removeMember(id);
  }

  subscribeToGroup(id: number) {
    this.groupService.subscribeToGroup(id);
    this.groups = this.groupService.getAllGroups();
    this.groupService.addMember(id);
  }
  // getSearchedGroups(tags): Group[] {
   // return this.groupService.getAllSearchedGroups();
  // }
}
