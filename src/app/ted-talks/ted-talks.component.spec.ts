import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TedTalksComponent } from './ted-talks.component';

describe('TedTalksComponent', () => {
  let component: TedTalksComponent;
  let fixture: ComponentFixture<TedTalksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TedTalksComponent]
    });
    fixture = TestBed.createComponent(TedTalksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
