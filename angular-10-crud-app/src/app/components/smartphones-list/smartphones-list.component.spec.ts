import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartphonesListComponent } from './smartphones-list.component';

describe('SmartphonesListComponent', () => {
  let component: SmartphonesListComponent;
  let fixture: ComponentFixture<SmartphonesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartphonesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartphonesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
