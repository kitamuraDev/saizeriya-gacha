import { Component, inject } from '@angular/core';
import { saizeriyaMenu } from '../../shared/model/saizeriya-menu';
import { GachaButtonComponent } from '../gacha-button/gacha-button.component';
import { GachaService } from '../../shared/services/gacha.service';
import { GachaResult } from '../../shared/types/gacha-result-type';
import { GachaResultComponent } from '../gacha-result/gacha-result.component';

@Component({
  selector: 'app-gacha-form',
  standalone: true,
  imports: [GachaButtonComponent, GachaResultComponent],
  templateUrl: './gacha-form.component.html',
})
export class GachaFormComponent {
  readonly gachaService = inject(GachaService);

  gachaResult!: GachaResult;

  selectedPrice: number = 1000;
  priceRange: number[] = Array.from({ length: 16 }, (_, i) => 1000 + i * 100);
  onChangeCurrentPrice(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedPrice = Number(target.value);
  }

  isCheckedAlcohol: boolean = false;
  toggleCheckState() {
    this.isCheckedAlcohol = !this.isCheckedAlcohol;
  }

  doGacha() {
    // prettier-ignore
    const menu = this.isCheckedAlcohol
      ? saizeriyaMenu.filter(menu => !menu.isAlcohol) // アルコール類を除いたメニュー
      : saizeriyaMenu; // 全メニュー

    const selectedMenus = this.gachaService.getRandomCombination(menu, this.selectedPrice);
    const totalPrice = this.gachaService.getTotalPrice(selectedMenus);

    this.gachaResult = { selectedMenus, totalPrice };
  }
}
