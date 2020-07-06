import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsTypesComponent } from './fields-types.component';

describe('FieldsTypesComponent', () => {
  let component: FieldsTypesComponent;
  let fixture: ComponentFixture<FieldsTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldsTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldsTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
