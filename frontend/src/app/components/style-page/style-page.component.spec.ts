import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StylePageComponent } from './style-page.component';

describe('StylePageComponent', () => {
  let component: StylePageComponent;
  let fixture: ComponentFixture<StylePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StylePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StylePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
