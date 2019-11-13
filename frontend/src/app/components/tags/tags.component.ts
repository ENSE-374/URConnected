import { Component, OnInit } from '@angular/core';
import { GroupService } from '../../services/group.service';
import { Tag } from '../../models/tag.model';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.sass']
})
export class TagsComponent implements OnInit {
  
  tags:Tag[];
  public errorMsg;
  constructor(private _groupService:GroupService) { }

  ngOnInit() {
    this._groupService.getTags()
    .subscribe(data => this.tags = data,
              error => this.errorMsg = error);
  }

}
