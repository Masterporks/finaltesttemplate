import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteClassUnitComponent } from './delete-class-unit.component';

describe('DeleteClassUnitComponent', () => {
  let component: DeleteClassUnitComponent;
  let fixture: ComponentFixture<DeleteClassUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteClassUnitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteClassUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
