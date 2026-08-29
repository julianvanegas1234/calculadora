import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css'
})
export class Calculator {
  num1: number | null = null;
  num2: number | null = null;
  operador: string = '+';
  resultado: number | string = 0;
  historial: string[] = [];

  operar() {
    if (this.num1 === null || this.num2 === null) return;

    let res = 0;
    switch (this.operador) {
      case '+': res = this.num1 + this.num2; break;
      case '-': res = this.num1 - this.num2; break;
      case '*': res = this.num1 * this.num2; break;
      case '/': res = this.num2 !== 0 ? this.num1 / this.num2 : NaN; break;
    }

    this.resultado = res;
    this.historial.unshift(`${this.num1} ${this.operador} ${this.num2} = ${res}`);
  }
}