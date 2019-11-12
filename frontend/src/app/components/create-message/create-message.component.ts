import { Component, OnInit } from '@angular/core';
import { GroupsService} from '../../services/groups.service';

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.sass']
})
export class CreateMessageComponent implements OnInit {

  constructor(private _groupsService:GroupsService) { }

  ngOnInit() {
  }

  newMessage(event)
  {
    const value = event.target.parentNode.querySelector('#createMessage').value;
   // console.log(value);   
    this._groupsService.createMessage(value); 
  }

}
