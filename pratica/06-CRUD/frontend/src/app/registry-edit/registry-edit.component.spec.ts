import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistryEditComponent } from './registry-edit.component';

describe('RegistryEditComponent', () => {
  let component: RegistryEditComponent;
  let fixture: ComponentFixture<RegistryEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistryEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
