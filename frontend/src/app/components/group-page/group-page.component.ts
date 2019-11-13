import { Component, OnInit } from '@angular/core';
import { Message } from '../../models/Message';
import { Location } from '@angular/common';

@Component({
  selector: 'app-group-page',
  templateUrl: './group-page.component.html',
  styleUrls: ['./group-page.component.sass']
})
export class GroupPageComponent implements OnInit {

  constructor(private location:Location) { }

  ngOnInit() {
  }

  public messageToPost: Message;
  messageSubmitted(event:Message){
    this.messageToPost = event;
  }

}
