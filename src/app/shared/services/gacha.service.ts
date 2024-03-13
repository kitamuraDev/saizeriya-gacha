import { Injectable } from '@angular/core';
import { SaizeriyaMenu } from '../types/saizeriya-menu-type';

@Injectable({
  providedIn: 'root',
})
export class GachaService {
  /**
   * メニューの中からn円以内の商品をランダムで抽出する
   *
   * @param menu メニュー
   * @param maxPrice 料金（1,000円なら1,000円以内を意味する）
   * @returns ランダムで抽出されたメニュー
   */
  getRandomCombination(menu: SaizeriyaMenu[], maxPrice: number): SaizeriyaMenu[] {
    const addItemIfFits = (acc: SaizeriyaMenu[], item: SaizeriyaMenu): SaizeriyaMenu[] => {
      const totalPrice = acc.reduce((total, curr) => total + curr.taxInPrice, 0);
      if (totalPrice + item.taxInPrice <= maxPrice) {
        return [...acc, item];
      }
      return acc;
    };

    const combination = menu
      .sort(() => Math.random() - 0.5)
      .reduce<SaizeriyaMenu[]>((acc: SaizeriyaMenu[], currentItem: SaizeriyaMenu) => {
        return addItemIfFits(acc, currentItem);
      }, []);

    return combination;
  }

  /**
   * ガチャ結果のメニューの合計金額を返す
   *
   * @param selectedMenus ガチャ結果のメニュー
   * @returns ガチャ結果のメニューの合計金額
   */
  getTotalPrice(selectedMenus: SaizeriyaMenu[]): number {
    return selectedMenus.reduce((p, v) => p + v.taxInPrice, 0);
  }
}
