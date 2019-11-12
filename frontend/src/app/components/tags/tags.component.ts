import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../../services/groups.service';
import { Tag } from '../../models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.sass']
})
export class TagsComponent implements OnInit {
  
  tags:Tag[];
  public errorMsg;
  constructor(private _groupService:GroupsService) { }

  ngOnInit() {
    this._groupService.getTags()
    .subscribe(data => this.tags = data,
              error => this.errorMsg = error);
  }

}
