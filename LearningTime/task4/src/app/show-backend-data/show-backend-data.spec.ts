import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBackendData } from './show-backend-data';

describe('ShowBackendData', () => {
  let component: ShowBackendData;
  let fixture: ComponentFixture<ShowBackendData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowBackendData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowBackendData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
