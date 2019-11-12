import { Component, OnInit } from '@angular/core';
import { GroupsService} from '../../services/groups.service';
import { Member } from '../../models/Member';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.sass']
})
export class MembersComponent implements OnInit {
  
  members:Member[];
  public errorMsg;
  constructor(private _groupsService:GroupsService) { }

  ngOnInit() {
    this._groupsService.getMembers()
    .subscribe(data => this.members = data,
               error => this.errorMsg = error);
  }

}

