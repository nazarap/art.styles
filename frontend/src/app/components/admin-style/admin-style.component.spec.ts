import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStyleComponent } from './admin-style.component';

describe('AdminStyleComponent', () => {
  let component: AdminStyleComponent;
  let fixture: ComponentFixture<AdminStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
