import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeModalComponent } from './type-modal.component';

describe('TypeModalComponent', () => {
  let component: TypeModalComponent;
  let fixture: ComponentFixture<TypeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
