import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <header class="w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <nav class="flex justify-center items-center py-9 sm:py-10">
        <h1 class="text-2xl font-semibold text-neutral-800 dark:text-neutral-200">サイゼリヤガチャ</h1>
      </nav>
    </header>
  `,
})
export class HeaderComponent {}
