import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClassUnitComponent } from './create-class-unit.component';

describe('CreateClassUnitComponent', () => {
  let component: CreateClassUnitComponent;
  let fixture: ComponentFixture<CreateClassUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateClassUnitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateClassUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
