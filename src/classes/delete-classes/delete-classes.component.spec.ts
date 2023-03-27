import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteClassesComponent } from './delete-classes.component';

describe('DeleteClassesComponent', () => {
  let component: DeleteClassesComponent;
  let fixture: ComponentFixture<DeleteClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteClassesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
