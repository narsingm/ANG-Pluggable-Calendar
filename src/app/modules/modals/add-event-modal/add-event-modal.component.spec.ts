import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventModalComponent } from './add-event-modal.component';

describe('AddEventModalComponent', () => {
  let component: AddEventModalComponent;
  let fixture: ComponentFixture<AddEventModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEventModalComponent]
    });
    fixture = TestBed.createComponent(AddEventModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
