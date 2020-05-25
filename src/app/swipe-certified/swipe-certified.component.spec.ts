import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipeCertifiedComponent } from './swipe-certified.component';

describe('SwipeCertifiedComponent', () => {
  let component: SwipeCertifiedComponent;
  let fixture: ComponentFixture<SwipeCertifiedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwipeCertifiedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwipeCertifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
