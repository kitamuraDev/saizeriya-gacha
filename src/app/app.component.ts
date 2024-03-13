import { Component } from '@angular/core';
import { HeaderComponent } from './shared/components/header/header.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { GachaFormComponent } from './features/gacha-form/gacha-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainLayoutComponent, HeaderComponent, GachaFormComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
