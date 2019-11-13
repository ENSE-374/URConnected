import { Component, OnInit, Input } from '@angular/core';
import { GroupService} from '../../services/group.service';
import { Message } from '../../models/Message';
import { Member } from '../../models/Member'
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.sass']
})
export class MessagesComponent implements OnInit {

  messages:Message[];
  members:Member[];
  public errorMsg;
  constructor(private _groupsService:GroupService, private location:Location) {        
   }

  ngOnInit() {
    // TODO: pass an group id
    this._groupsService.getMessages(this.location.getState()["id"])
    .subscribe(data => {
      
      this.messages = data['messages']
      this.members = data['members']
    },
        error => this.errorMsg = error);

  }

  @Input() event: Message;

}
