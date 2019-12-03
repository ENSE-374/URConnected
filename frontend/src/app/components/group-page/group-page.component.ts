import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../models/Message';
import { Location } from '@angular/common';
import { User } from 'src/app/models/user.model';
import { Tag } from '../../models/tag.model';

@Component({
  selector: 'app-group-page',
  templateUrl: './group-page.component.html',
  styleUrls: ['./group-page.component.sass']
})
export class GroupPageComponent implements OnInit {

  constructor(private location:Location) { }

  @Input() groupMembers:User[];
  @Input() groupTags:Tag[];

  ngOnInit() {    
   
  }
  updateTags(tags){
    this.groupTags = tags;
  }
  updateMembers(members){
   this.groupMembers = members;
  }
  
  public messageToPost: Message;
  messageSubmitted(event:Message){
    this.messageToPost = event;
  }
}
