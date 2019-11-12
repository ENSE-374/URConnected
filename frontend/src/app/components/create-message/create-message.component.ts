import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GroupsService} from '../../services/groups.service';
import { Message } from '../../models/Message'

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.sass']
})
export class CreateMessageComponent implements OnInit {

  constructor(private _groupsService:GroupsService) { }

  ngOnInit() {
  }

  public createdMessage:Message;
  public errorMsg;

  newMessage(event)
  {
    const value:Message = event.target.parentNode.querySelector('#createMessage').value;
   // console.log(value);   
    this._groupsService.createMessage(value)
    .subscribe(data => this.createdMessage = data,
      error => this.errorMsg = error); 
      //console.log("newMessage", this.createdMessage);
   }

  @Output() eventClicked = new EventEmitter<Message>();
  postMessage(message){
    const toSend:Message = message.target.parentNode.querySelector('#createMessage').value;
        this.eventClicked.emit(toSend);
        //console.log("PostMessage", toSend);
  }
 

}
