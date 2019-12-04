import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupService} from '../../services/group.service';
import { Message } from '../../models/Message';
import { User } from '../../models/user.model';
import { Tag } from '../../models/tag.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.sass']
})
export class MessagesComponent implements OnInit {

groupID: any;
constructor(private _groupsService: GroupService, private location: Location, private route: ActivatedRoute) {
  this.route.queryParams.subscribe(params => {
    this.groupID = params['id'];
  })
}
  messages:Message[];
  members:User[];
  tags:Tag[];

  messagesToDisplay: {
    message: Message;
    member: User;
  }[];

  @Output() groupMembers = new EventEmitter();
  @Output() groupTags = new EventEmitter();

  sendTags(){
    this.groupTags.emit(this.tags);
  } 

  sendMembers(){
    this.groupMembers.emit(this.members);
  }
  public errorMsg:any;
  

  ngOnInit() {

  this._groupsService.getMessages(this.groupID)
    .subscribe(data => {
      this.messages = data['messages'];
      this.members = data['members'];
      this.tags = data['tags'];
      this.sendTags();
      this.sendMembers();
      this.populateMessagesToDisplay();
     // console.log("data:", data);
    },
        error => this.errorMsg = error);
  }

  populateMessagesToDisplay()
  { 
    this.messagesToDisplay = [];
    for(let i = 0; i < this.messages.length; i++)
    {
      for(let j = 0; j < this.members.length; j++)
      {
        if(this.messages[i].sender == this.members[j]._id)
        {
          let newMessageToDisplay = 
          {
            message: this.messages[i], 
            member: this.members[j]
          };        
          this.messagesToDisplay.push(newMessageToDisplay);
        }
      }
    }
  }

  

  @Input() event: Message;

}
