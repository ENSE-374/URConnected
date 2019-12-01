import { Component, OnInit, Input } from '@angular/core';
import { GroupService } from '../../services/group.service';
import { Tag } from '../../models/tag.model';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.sass']
})
export class TagsComponent implements OnInit {
  
  @Input() tags:Tag;
  public errorMsg;
  constructor(private _groupService:GroupService) { }

  ngOnInit() {

  }

}
