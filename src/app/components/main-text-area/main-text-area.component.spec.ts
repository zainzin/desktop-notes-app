import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTextAreaComponent } from './main-text-area.component';

describe('MainTextAreaComponent', () => {
  let component: MainTextAreaComponent;
  let fixture: ComponentFixture<MainTextAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainTextAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
