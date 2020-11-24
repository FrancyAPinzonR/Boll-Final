import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmigoHumanoComponent } from './amigo-humano.component';

describe('AmigoHumanoComponent', () => {
  let component: AmigoHumanoComponent;
  let fixture: ComponentFixture<AmigoHumanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmigoHumanoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmigoHumanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
