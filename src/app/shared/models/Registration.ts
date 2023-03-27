export class Notification {
  id: number;
  participateType: object;    /** ------- Vaata üle----------------*/
  participant: object;    /** ------- Vaata üle----------------*/
  date: Date;
  course: object;    /** ------- Vaata üle----------------*/
  active: boolean;

  constructor(id: number, participateType: object, participant: object, date: Date, course: object, active: boolean) {
    this.id = id;
    this.participateType = participateType;
    this.participant = participant;
    this.date = date;
    this.course = course;
    this.active = active;
  }
}
