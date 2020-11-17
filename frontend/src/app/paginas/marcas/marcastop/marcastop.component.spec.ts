import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcastopComponent } from './marcastop.component';

describe('MarcastopComponent', () => {
  let component: MarcastopComponent;
  let fixture: ComponentFixture<MarcastopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcastopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcastopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
