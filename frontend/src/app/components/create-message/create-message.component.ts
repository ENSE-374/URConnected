import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { GroupService} from '../../services/group.service';
import { Message } from '../../models/Message'

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.sass']
})
export class CreateMessageComponent implements OnInit {
  groupID: any;
  userID: any;
  constructor(private _groupsService: GroupService, private location: Location, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.groupID = params['id'];
    });
   }

  ngOnInit() {
  }

  public createdMessage:Message;
  public errorMsg;

  newMessage(event)
  {
    this.userID = JSON.parse(localStorage.getItem('currentUser'))['user']['_id'];
    const value: string = event.target.parentNode.querySelector('#createMessage').value;
    this._groupsService.createMessage(value, this.groupID, this.userID)
    .subscribe(data => {
      this.createdMessage = data;
      location.reload();
    },
      error => this.errorMsg = error);
   }

}
