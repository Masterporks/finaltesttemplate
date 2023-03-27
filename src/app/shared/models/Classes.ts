export class Classes {
  id: number;
  subject: string;
  LocalDateDate: Date;
  active: boolean;


  constructor(id: number, subject: string, LocalDateDate: Date, active: boolean) {
    this.id = id;
    this.subject = subject;
    this.LocalDateDate = LocalDateDate;
    this.active = active;
  }
}
