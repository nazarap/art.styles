import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBarComponent } from './admin-bar.component';

describe('AdminBarComponent', () => {
  let component: AdminBarComponent;
  let fixture: ComponentFixture<AdminBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
