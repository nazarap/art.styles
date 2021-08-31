import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTypeComponent } from './admin-type.component';

describe('AdminTypeComponent', () => {
  let component: AdminTypeComponent;
  let fixture: ComponentFixture<AdminTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
