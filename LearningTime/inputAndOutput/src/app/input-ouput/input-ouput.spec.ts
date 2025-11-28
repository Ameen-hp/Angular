import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputComponents } from './input-ouput';

describe('InputOuput', () => {
  let component: InputOutputComponents;
  let fixture: ComponentFixture<InputOutputComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputOutputComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputOutputComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
