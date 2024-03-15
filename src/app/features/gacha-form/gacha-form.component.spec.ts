import { RenderResult, fireEvent, render, screen } from '@testing-library/angular';
import { GachaFormComponent } from './gacha-form.component';

describe('GachaFormComponent', () => {
  let component: RenderResult<GachaFormComponent, GachaFormComponent>;

  beforeEach(async () => {
    component = await render(GachaFormComponent);
  });

  it('コンポーネントがレンダリングされるか', async () => {
    expect(component).toBeTruthy();
  });

  it('<select>内の<option>の数が正しいか', async () => {
    const expectedOptionLength = 16;

    const selectElement = component.getByRole('combobox');

    expect(selectElement.querySelectorAll('option').length).toEqual(expectedOptionLength);
  });

  it('<label>クリックでチェックボックスの状態が選択状態に変化するか', async () => {
    const labelElement = component.getByLabelText('アルコール類を除く');
    const checkboxElement = component.getByRole('checkbox') as HTMLInputElement;

    expect(checkboxElement.checked).toEqual(false); // チェックされていない

    fireEvent.click(labelElement); // <label>をクリック

    expect(checkboxElement.checked).toEqual(true); // チェックされている
  });

  it('「ガチャを回す」ボタン押下で合計金額が表示されるか', async () => {
    const gachaButton = component.getByText('ガチャを回す');

    fireEvent.click(gachaButton);

    expect(screen.getByText('合計：').textContent).toContain('合計');
  });
});
