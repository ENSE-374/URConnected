import { Component, OnInit, Input } from '@angular/core';
import { Tag } from '../../models/Tag';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.sass']
})
export class TagComponent implements OnInit {
  @Input() tag:Tag;
  constructor() { }

  ngOnInit() {
  }

}
