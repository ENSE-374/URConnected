import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {find, get, pull} from 'lodash';
import {SearchTagsService} from '../../services/searchTags.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @ViewChild('tagInput', {static: false}) tagInputRef: ElementRef;
  searchTags: string[] = [];
  form: FormGroup;
  constructor(private fb: FormBuilder, private searchTagService: SearchTagsService) {
  }
  ngOnInit() {
    this.form = this.fb.group({
      tag: [undefined],
    });
  }
  focusTagInput(): void {
    this.tagInputRef.nativeElement.focus();
  }

  onKeyUp(event: KeyboardEvent): void {
    const inputValue: string = this.form.controls.tag.value;
    if (event.code === 'Backspace' && !inputValue) {
      this.removeTag();
      return;
    } else {
      if (event.code === 'Comma' || event.code === 'Space') {
        this.addTag(inputValue);
        this.form.controls.tag.setValue('');
      }
    }
  }
  addTag(tag: string): void {
    if (tag[tag.length - 1] === ',' || tag[tag.length - 1] === ' ') {
      tag = tag.slice(0, -1);
    }
    if (tag.length > 0 && !find(this.searchTags, tag)) {
      this.searchTagService.addSearchedTags(tag);
      this.searchTags.push(tag);
    }
  }
  removeTag(tag?: string): void {
    if (!!tag) {
      pull(this.searchTags, tag);
    } else {
      this.searchTagService.removingSearchedTags(tag);
      this.searchTags.splice(-1);
    }
  }
}

