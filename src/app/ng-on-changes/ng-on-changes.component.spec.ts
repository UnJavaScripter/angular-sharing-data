import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOnChangesComponent } from './ng-on-changes.component';

describe('NgOnChangesComponent', () => {
  let component: NgOnChangesComponent;
  let fixture: ComponentFixture<NgOnChangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgOnChangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgOnChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
