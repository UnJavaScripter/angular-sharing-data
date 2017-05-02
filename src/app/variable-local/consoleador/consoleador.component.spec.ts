import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleadorComponent } from './consoleador.component';

describe('ConsoleadorComponent', () => {
  let component: ConsoleadorComponent;
  let fixture: ComponentFixture<ConsoleadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsoleadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
