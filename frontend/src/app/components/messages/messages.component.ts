import { Component, OnInit, Input } from '@angular/core';
import { GroupsService} from '../../services/groups.service';
import { Message } from '../../models/Message';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.sass']
})
export class MessagesComponent implements OnInit {

  messages:Message[];
  public errorMsg;
  constructor(private _groupsService:GroupsService) { }

  ngOnInit() {
    // TODO: pass an group id
    this._groupsService.getMessages(5)
    .subscribe(data => this.messages = data,
              error => this.errorMsg = error);
  }

  @Input() event: Message;

}