import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button nbButton *ngIf="!_value">{{ _value }}</button>
    <button nbButton hero status="success" *ngIf="_value == 'X'">
      {{ _value }}
    </button>

    <button nbButton hero status="info" *ngIf="_value == 'O'">
      {{ _value }}
    </button>
  `,
  styles: ['button {' + 'width: 100%;' + 'height: 100%;' + '}'],
})
export class SquareComponent {
  @Input()
  _value!: 'X' | 'O';
}
