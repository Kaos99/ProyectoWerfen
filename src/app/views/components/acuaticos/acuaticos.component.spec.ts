import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcuaticosComponent } from './acuaticos.component';

describe('AcuaticosComponent', () => {
  let component: AcuaticosComponent;
  let fixture: ComponentFixture<AcuaticosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcuaticosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcuaticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
