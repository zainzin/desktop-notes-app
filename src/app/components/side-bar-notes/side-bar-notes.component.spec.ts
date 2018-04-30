import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarNotesComponent } from './side-bar-notes.component';

describe('SideBarNotesComponent', () => {
  let component: SideBarNotesComponent;
  let fixture: ComponentFixture<SideBarNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideBarNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
