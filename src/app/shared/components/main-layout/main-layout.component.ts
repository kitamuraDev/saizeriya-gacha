import { Component } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [],
  template: `
    <!-- prettier-ignore -->
    <div class="mx-auto max-w-screen-md">
      <ng-content />
    </div>
  `,
})
export class MainLayoutComponent {}
