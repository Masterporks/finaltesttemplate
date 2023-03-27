export class ClassUnit {
  id: number;
  name: string;
  list: any;
  active: boolean;


  constructor(id: number, name: string, list: any, active: boolean) {
    this.id = id;
    this.name = name;
    this.list = list;
    this.active = active;
  }
}
