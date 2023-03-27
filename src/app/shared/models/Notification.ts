export class Notification {
  id: number;
  classes: object;    /** ------- Vaata üle----------------*/
  subject: string;
  contents: string;
  hasReadNotification: boolean;
  active: boolean;


  constructor(id: number, classes: object, subject: string, contents: string, hasReadNotification: boolean, active: boolean) {
    this.id = id;
    this.classes = classes;
    this.subject = subject;
    this.contents = contents;
    this.hasReadNotification = hasReadNotification;
    this.active = active;
  }
}
