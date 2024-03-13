import { Component, Input } from '@angular/core';
import { GachaResult } from '../../shared/types/gacha-result-type';

@Component({
  selector: 'app-gacha-result',
  standalone: true,
  imports: [],
  template: `
    <!-- メニューリスト -->
    <ul class="flex flex-col gap-2 p-2">
      @for (selectedMenu of result.selectedMenus; track $index) {
        <li class="p-3 sm:p-5 rounded-lg bg-green-100 flex items-center gap-3">
          <span
            class="px-2 py-1 text-center text-sm sm:text-base font-bold rounded align-baseline whitespace-nowrap bg-white text-green-700"
          >
            {{ selectedMenu.orderCode }}
          </span>
          <div>
            <p class="text-xs sm:text-base text-green-700">{{ selectedMenu.name }}</p>
            <p class="text-gray-400">
              <span class="text-xs">{{ selectedMenu.taxInPrice }}円</span>
              <span class="text-[10px]">（税抜：{{ selectedMenu.taxExPrice }}円）</span>
            </p>
          </div>
        </li>
      }
    </ul>
    <!-- 合計金額 -->
    <div class="flex justify-end items-center p-2 text-gray-700 text-sm">
      <span>合計：</span>
      <span>{{ result.totalPrice }}円</span>
    </div>
  `,
})
export class GachaResultComponent {
  @Input({ required: true }) result!: GachaResult;
}
