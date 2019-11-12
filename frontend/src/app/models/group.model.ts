import {Tag} from './tag.model';

export class Group {
  public id: number;
  public tags: Tag[];
  public size: number;
  public isSubscribed: boolean;

  constructor(id: number, tags: Tag[], size: number, isSubscribed: boolean) {
    this.id = id;
    this.tags = tags;
    this.size = size;
    this.isSubscribed = isSubscribed;
  }
}
