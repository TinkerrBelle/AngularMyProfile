import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GITComponent } from './g-i-t.component';

describe('GITComponent', () => {
  let component: GITComponent;
  let fixture: ComponentFixture<GITComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GITComponent]
    });
    fixture = TestBed.createComponent(GITComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
