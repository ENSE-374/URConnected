import {Injectable} from '@angular/core';
import {Group} from '../models/group.model';
import {Tag} from '../models/tag.model';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  groups: Group[] = [
    {
      id: 1,
      tags: [new Tag('Engineering')],
      size: 44,
      isSubscribed: true,
    },
    {
      id: 2,
      tags: [new Tag('Engineering'), new Tag('Software')],
      size: 55,
      isSubscribed: false,
    },
    {
      id: 3,
      tags: [new Tag('Business'), new Tag('Accounting')],
      size: 20,
      isSubscribed: false,
    }
  ];

  public getAllGroups(): Group[] {
    return this.groups;
  }
  // public getAllSearchedGroups(tags): Group[]{
    // return this.groups.filter(group => group.tags.some(data => searchTags.includes(data)));
  // }
  public addMember(id: number) {
    this.groups.find(group => group.id === id).size = this.groups.find(group => group.id === id).size + 1;
  }

  public removeMember(id: number) {
    this.groups.find(group => group.id === id).size = this.groups.find(group => group.id === id).size - 1;
  }

  public getSubscribedGroups(): Group[] {
    return this.groups.filter(data => data.isSubscribed === true);
  }

  public subscribeToGroup(id: number) {
    this.groups.find(group => group.id === id).isSubscribed = true;
  }

  public unsubscribeToGroup(id: number) {
    this.groups.find(group => group.id === id).isSubscribed = false;
  }
  constructor() {
  }
}
