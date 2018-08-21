import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalbarComponent } from './horizontalbar.component';

describe('HorizontalbarComponent', () => {
  let component: HorizontalbarComponent;
  let fixture: ComponentFixture<HorizontalbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontalbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
