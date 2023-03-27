import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteParticipantComponent } from './delete-participant.component';

describe('DeleteParticipantComponent', () => {
  let component: DeleteParticipantComponent;
  let fixture: ComponentFixture<DeleteParticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteParticipantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
