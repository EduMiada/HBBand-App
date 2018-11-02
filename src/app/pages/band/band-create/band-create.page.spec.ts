import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandCreatePage } from './band-create.page';

describe('BandCreatePage', () => {
  let component: BandCreatePage;
  let fixture: ComponentFixture<BandCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandCreatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
