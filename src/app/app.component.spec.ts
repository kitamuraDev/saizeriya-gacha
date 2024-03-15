import { RenderResult, render } from '@testing-library/angular';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app: RenderResult<AppComponent, AppComponent>;

  beforeEach(async () => {
    app = await render(AppComponent);
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });
});
