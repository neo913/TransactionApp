abstract class _Base {
  public removed? : boolean;
  public get(property?: string) {
    if(property) {
      return (this as any)[property]
    } else {
      return this;
    }
  }
  public set(property: string, value: any) {
    if(typeof value === typeof (this as any)[property]) {
      (this as any)[property] = value;
    } else {
      console.error("Cannot set value from" + typeof value + " to " + typeof (this as any)[property]);
    }
  }
}

export class Transaction extends _Base {
  public id       : number;
  private date     : Date;
  private comments : string;
  
  constructor(obj?: Transaction) {
    super();
    this.id       = obj && obj.id             || -1;
    this.date     = obj && new Date(obj.date) || new Date();
    this.comments = obj && obj.comments       || "";
  }
}