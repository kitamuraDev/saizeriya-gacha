import { RenderResult, render } from '@testing-library/angular';
import { GachaResultComponent } from './gacha-result.component';
import { SaizeriyaMenu } from '../../shared/types/saizeriya-menu-type';
import { GachaResult } from '../../shared/types/gacha-result-type';

const mockMenu: SaizeriyaMenu[] = [
  { orderCode: '1301', name: 'コーンクリームスープ', taxExPrice: 137, taxInPrice: 150, isAlcohol: false },
  { orderCode: '1404', name: 'ポップコーンシュリンプ', taxExPrice: 273, taxInPrice: 300, isAlcohol: false },
  { orderCode: '2208', name: 'ソーセージピザ', taxExPrice: 364, taxInPrice: 400, isAlcohol: false },
];

const mockResult: GachaResult = {
  selectedMenus: mockMenu,
  totalPrice: 850,
};

describe('GachaResultComponent', () => {
  let component: RenderResult<GachaResultComponent, GachaResultComponent>;

  beforeEach(async () => {
    component = await render(GachaResultComponent, {
      componentInputs: {
        result: mockResult,
      },
    });
  });

  it('コンポーネントがレンダリングされるか', async () => {
    expect(component).toBeTruthy();
  });

  it('リストの個数はモックの数通りか', async () => {
    const listItems = component.getAllByRole('listitem');

    expect(listItems.length).toBe(mockMenu.length);
  });

  it('合計金額が表示されるか', async () => {
    // 「合計：」を元にその親要素を取得し、テキストを取得する
    const parentElement = component.getByText('合計：').parentElement;
    const text = parentElement?.textContent;

    expect(text).toContain('850円');
  });
});
