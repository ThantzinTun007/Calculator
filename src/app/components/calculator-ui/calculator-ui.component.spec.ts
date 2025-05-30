import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorUiComponent } from './calculator-ui.component';

describe('CalculatorUiComponent', () => {
  let component: CalculatorUiComponent;
  let fixture: ComponentFixture<CalculatorUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorUiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
