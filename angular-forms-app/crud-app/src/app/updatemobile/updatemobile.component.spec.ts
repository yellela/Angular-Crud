import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatemobileComponent } from './updatemobile.component';

describe('UpdatemobileComponent', () => {
  let component: UpdatemobileComponent;
  let fixture: ComponentFixture<UpdatemobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatemobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatemobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
