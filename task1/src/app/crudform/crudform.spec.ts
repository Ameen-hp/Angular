import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Crudform } from './crudform';

describe('Crudform', () => {
  let component: Crudform;
  let fixture: ComponentFixture<Crudform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Crudform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Crudform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
