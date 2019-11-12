import { Injectable } from '@angular/core';
import {Tag} from '../models/tag.model';

@Injectable({
  providedIn: 'root'
})
export class SearchTagsService {
  searchedTags: string[] = [];
public addSearchedTags(tags: string) {
this.searchedTags.push(tags);
}
public removingSearchedTags(tags: string) {
  this.searchedTags.splice( -1);
}
public getSearchedTags(): string[] {
  return this.searchedTags;
}
  constructor() { }
}
