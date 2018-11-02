import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandPage } from './band.page';

describe('BandPage', () => {
  let component: BandPage;
  let fixture: ComponentFixture<BandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
