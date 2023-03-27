import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateClassUnitComponent } from './update-class-unit.component';

describe('UpdateClassUnitComponent', () => {
  let component: UpdateClassUnitComponent;
  let fixture: ComponentFixture<UpdateClassUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateClassUnitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateClassUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
