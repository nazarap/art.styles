import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSubtypeComponent } from './admin-subtype.component';

describe('AdminSubtypeComponent', () => {
  let component: AdminSubtypeComponent;
  let fixture: ComponentFixture<AdminSubtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSubtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSubtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
