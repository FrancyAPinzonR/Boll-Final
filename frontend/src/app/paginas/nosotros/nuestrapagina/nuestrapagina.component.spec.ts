import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestrapaginaComponent } from './nuestrapagina.component';

describe('NuestrapaginaComponent', () => {
  let component: NuestrapaginaComponent;
  let fixture: ComponentFixture<NuestrapaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuestrapaginaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuestrapaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
