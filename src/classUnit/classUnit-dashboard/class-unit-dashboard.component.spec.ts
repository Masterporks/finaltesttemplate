import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassUnitDashboardComponent } from './class-unit-dashboard.component';

describe('ClassUnitDashboardComponent', () => {
  let component: ClassUnitDashboardComponent;
  let fixture: ComponentFixture<ClassUnitDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassUnitDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassUnitDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
