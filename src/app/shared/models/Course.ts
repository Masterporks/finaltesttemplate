export class Course {
  id: number;
  name: string;
  classUnit: object;    /** ------- Vaata üle----------------*/
  active: boolean;


  constructor(id: number, name: string, classUnit: object, active: boolean) {
    this.id = id;
    this.name = name;
    this.classUnit = classUnit;
    this.active = active;
  }
}
