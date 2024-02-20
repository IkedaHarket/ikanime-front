import { Component, Input } from '@angular/core';

export type Color = 'cyan' | 'orange' | 'red'

@Component({
  selector: 'web-badge-anime-type',
  standalone: true,
  imports: [],
  template: `
    <span class="web-badge-anime-type badge-{{color}}">{{text}}</span>
  `,
})
export class BadgeAnimeTypeComponent {
  @Input({ required: true }) text !: string
  @Input() color : Color = 'cyan' 
}
