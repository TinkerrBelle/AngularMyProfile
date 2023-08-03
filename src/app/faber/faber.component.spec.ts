import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaberComponent } from './faber.component';

describe('FaberComponent', () => {
  let component: FaberComponent;
  let fixture: ComponentFixture<FaberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaberComponent]
    });
    fixture = TestBed.createComponent(FaberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
