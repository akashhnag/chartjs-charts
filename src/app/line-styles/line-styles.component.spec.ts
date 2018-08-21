import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineStylesComponent } from './line-styles.component';

describe('LineStylesComponent', () => {
  let component: LineStylesComponent;
  let fixture: ComponentFixture<LineStylesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineStylesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
