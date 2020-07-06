import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsStateComponent } from './fields-state.component';

describe('FieldsStateComponent', () => {
  let component: FieldsStateComponent;
  let fixture: ComponentFixture<FieldsStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldsStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldsStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
