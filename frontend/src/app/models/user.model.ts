import {Group} from './group.model';

export class User {
  // tslint:disable-next-line: variable-name
  public _id: any;
  public name: string;
  public email: string;
  public token: string;
  public  groups: Group[];

  constructor(id: string, name: string, email: string, token: string, groups: Group[]) {
    this._id = id;
    this.name = name;
    this.email = email;
    this.token = token;
    this.groups = groups;
  }
}
