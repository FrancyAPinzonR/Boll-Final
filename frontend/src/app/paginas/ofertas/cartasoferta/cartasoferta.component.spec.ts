import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartasofertaComponent } from './cartasoferta.component';

describe('CartasofertaComponent', () => {
  let component: CartasofertaComponent;
  let fixture: ComponentFixture<CartasofertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartasofertaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartasofertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
