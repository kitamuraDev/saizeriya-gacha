import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-gacha-button',
  standalone: true,
  imports: [],
  template: `
    <button
      type="button"
      class="text-base font-medium leading-normal text-white bg-green-700 w-52 py-4 rounded transition duration-150 ease-in-out hover:opacity-80"
      (click)="doGacha.emit()"
    >
      <ng-content />
    </button>
  `,
})
export class GachaButtonComponent {
  @Output() doGacha: EventEmitter<void> = new EventEmitter<void>();
}
