import { Component, OnInit } from '@angular/core';
import { Message } from '../../models/Message';

@Component({
  selector: 'app-group-page',
  templateUrl: './group-page.component.html',
  styleUrls: ['./group-page.component.sass']
})
export class GroupPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public messageToPost: Message;
  messageSubmitted(event:Message){
    this.messageToPost = event;
    console.log("messageSubmitted");
  }

}
