import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { GroupService} from '../../services/group.service';
import { Message } from '../../models/Message'

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.sass']
})
export class CreateMessageComponent implements OnInit {

  constructor(private _groupsService:GroupService, private location:Location) { }

  ngOnInit() {
  }

  public createdMessage:Message;
  public errorMsg;

  newMessage(event)
  {
    const value:string = event.target.parentNode.querySelector('#createMessage').value;
       
    this._groupsService.createMessage(value, this.location.getState()["id"])
    .subscribe(data => this.createdMessage = data,
      error => this.errorMsg = error); 
   }

}
