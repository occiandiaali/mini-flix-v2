import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { User.HomeComponent } from './user.home.component';

describe('User.HomeComponent', () => {
  let component: User.HomeComponent;
  let fixture: ComponentFixture<User.HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ User.HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(User.HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
