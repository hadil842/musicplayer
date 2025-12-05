import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homecomponenet } from './homecomponenet';

describe('Homecomponenet', () => {
  let component: Homecomponenet;
  let fixture: ComponentFixture<Homecomponenet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Homecomponenet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homecomponenet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
