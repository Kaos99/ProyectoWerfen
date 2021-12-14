import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrestresComponent } from './terrestres.component';

describe('TerrestresComponent', () => {
  let component: TerrestresComponent;
  let fixture: ComponentFixture<TerrestresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerrestresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerrestresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
