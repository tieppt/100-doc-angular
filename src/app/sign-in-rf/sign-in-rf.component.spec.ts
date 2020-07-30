import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInRfComponent } from './sign-in-rf.component';

describe('SignInRfComponent', () => {
  let component: SignInRfComponent;
  let fixture: ComponentFixture<SignInRfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInRfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInRfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
