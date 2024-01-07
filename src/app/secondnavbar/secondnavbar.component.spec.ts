import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondnavbarComponent } from './secondnavbar.component';

describe('SecondnavbarComponent', () => {
  let component: SecondnavbarComponent;
  let fixture: ComponentFixture<SecondnavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondnavbarComponent]
    });
    fixture = TestBed.createComponent(SecondnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
