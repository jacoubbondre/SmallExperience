import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavButtonsComponent } from './main-nav-buttons.component';

describe('MainNavButtonsComponent', () => {
  let component: MainNavButtonsComponent;
  let fixture: ComponentFixture<MainNavButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainNavButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
