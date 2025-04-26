import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator-ui',
  standalone: true,
  imports: [],
  templateUrl: './calculator-ui.component.html',
  styleUrl: './calculator-ui.component.css',
})

export class CalculatorUiComponent {
  isDark: boolean = true;
  firstNum: string = '';
  lastNum: string = '';
  operator: string = '';
  screen: string = '';

  get onScreen(): string {
    this.screen = `${this.firstNum} ${this.operator} ${this.lastNum}`.trim();
    return this.screen;
  }

  changeMood() {
    this.isDark = !this.isDark;
  }

  click(number: string) {
    if (this.operator) {
      this.lastNum += number;
    } else {
      this.firstNum += number;
    }
  }

  clickOpe(op: string) {
    if (this.firstNum) {
      this.operator = op;
    }
  }

  allClear() {
    this.firstNum = '';
    this.operator = '';
    this.lastNum = '';
  }

  clear() {
    this.screen.slice;
    console.log(this.screen);
    
  }

  calculate() {
    const num1 = Number(this.firstNum);
    const num2 = Number(this.lastNum);
    let result = 0;

    switch (this.operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num2 !== 0 ? num1 / num2 : 0;
        break;
    }

    this.firstNum = result.toString();
    this.lastNum = '';
    this.operator = '';
  }   
}
