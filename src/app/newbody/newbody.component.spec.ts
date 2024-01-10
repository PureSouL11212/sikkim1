import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbodyComponent } from './newbody.component';

describe('NewbodyComponent', () => {
  let component: NewbodyComponent;
  let fixture: ComponentFixture<NewbodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewbodyComponent]
    });
    fixture = TestBed.createComponent(NewbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
