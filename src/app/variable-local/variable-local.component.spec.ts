import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableLocalComponent } from './variable-local.component';

describe('VariableLocalComponent', () => {
  let component: VariableLocalComponent;
  let fixture: ComponentFixture<VariableLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariableLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariableLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
