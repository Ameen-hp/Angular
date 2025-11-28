import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teacer } from './teacer';

describe('Teacer', () => {
  let component: Teacer;
  let fixture: ComponentFixture<Teacer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Teacer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teacer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
