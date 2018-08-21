import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteppedLineComponent } from './stepped-line.component';

describe('SteppedLineComponent', () => {
  let component: SteppedLineComponent;
  let fixture: ComponentFixture<SteppedLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteppedLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteppedLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
