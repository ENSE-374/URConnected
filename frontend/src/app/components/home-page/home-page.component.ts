import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {GroupService} from '../../services/group.service';
import {Group} from '../../models/group.model';
import {SearchTagsService} from '../../services/searchTags.service';
import {Tag} from '../../models/tag.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  groups: Group[] = [];

  constructor(private groupService: GroupService, private searchTagService: SearchTagsService) {
  }

  ngOnInit() {
    this.groupService.getAllGroups()
      .subscribe( result => {
        this.groups = result["docs"];
        this.groups[1].isSubscribed = true;
      }); 
      
  }

  unsubscribeToGroup(id: number) {
    this.groupService.unsubscribeToGroup(id);
    this.groupService.getAllGroups()
    .subscribe( result => {
      this.groups = result["docs"];
    });
    this.groupService.removeMember(id);
  }

  subscribeToGroup(id: number) {
    this.groupService.subscribeToGroup(id);
    this.groupService.getAllGroups().subscribe( result => {
        this.groups = result["docs"];
      });
    this.groupService.addMember(id);
  }

  compareSearchToTags(tags: string[]): boolean {
    return tags.some(data => this.searchTagService.getSearchedTags().includes(data));
  }

  convertToStringArray(tags: Tag[]): string[] {
    // ERROR POINT HERE, solve how to return the Tag[name] array as a string array
    return tags.map(tag => tag.name);
  }


}
