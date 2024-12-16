import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringInterpolationComponentComponent } from './string-interpolation-component.component';

describe('StringInterpolationComponentComponent', () => {
  let component: StringInterpolationComponentComponent;
  let fixture: ComponentFixture<StringInterpolationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StringInterpolationComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StringInterpolationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
