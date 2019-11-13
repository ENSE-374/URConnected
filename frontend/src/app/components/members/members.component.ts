import { Component, OnInit } from '@angular/core';
import { GroupService} from '../../services/group.service';
import { Member } from '../../models/Member';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.sass']
})
export class MembersComponent implements OnInit {
  
  members:Member[];
  public errorMsg;
  constructor(private _groupsService:GroupService) { }

  ngOnInit() {
  }

}

