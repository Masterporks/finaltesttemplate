export class Participant {
  id: number;
  participantType: object;    /** ------- Vaata üle----------------*/
  firstName: string;
  lastName: string;
  email: string;
  active: boolean;

  constructor(id: number, participantType: object, firstName: string, lastName: string, email: string, active: boolean) {
    this.id = id;
    this.participantType = participantType;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.active = active;
  }
}
