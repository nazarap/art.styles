import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutStylesComponent } from './about-styles.component';

describe('AboutStylesComponent', () => {
  let component: AboutStylesComponent;
  let fixture: ComponentFixture<AboutStylesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutStylesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
