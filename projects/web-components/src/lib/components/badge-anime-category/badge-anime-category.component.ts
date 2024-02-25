import { Component, Input } from '@angular/core';

@Component({
  selector: 'web-badge-anime-category',
  standalone: true,
  imports: [],
  template: `
    <span class="web-badge-category">{{text}}</span>
  `,
})
export class BadgeAnimeCategoryComponent {
  @Input({ required: true }) text !: string
}
