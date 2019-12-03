import {Group} from './group.model';

export class User {
  public _id:any;
  public name: string;
  public email: string;
  public groups: Group[];

  constructor(name: string, email: string, groups: Group[]) {
    this.name = name;
    this.email = email;
    this.groups = groups;
  }
}
