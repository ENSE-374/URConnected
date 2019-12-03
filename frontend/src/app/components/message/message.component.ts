import { Component, OnInit, Input } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.sass']
})
export class MessageComponent implements OnInit {
  @Input() messagesToDisplay: {
    message:Message;
    member:User;
  };
  constructor() { }

  ngOnInit() {    
  //   console.log("message:", this.message);
  //   console.log("member:", this.member);
  }

}
