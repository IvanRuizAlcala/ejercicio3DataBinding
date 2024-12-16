import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayPersonComponent } from './two-way-person.component';

describe('TwoWayPersonComponent', () => {
  let component: TwoWayPersonComponent;
  let fixture: ComponentFixture<TwoWayPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TwoWayPersonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWayPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
