import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaExamenComponent } from './pantalla-examen.component';

describe('PantallaExamenComponent', () => {
  let component: PantallaExamenComponent;
  let fixture: ComponentFixture<PantallaExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallaExamenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PantallaExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
