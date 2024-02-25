import { Component, Input } from '@angular/core';

export type Color = 'cyan' | 'orange' | 'red' | 'purple'
interface Inputs{
  size ?: 'normal' | 'small',
  color : Color,
  text  : string
}

@Component({
  selector: 'web-badge-anime-type',
  standalone: true,
  imports: [],
  template: `
    <span 
      class="
      web-badge-anime-type 
      badge-{{props.color}} 
      badge-size-{{props.size || 'normal'}}"
    >
    {{props.text}}
    </span>
  `,
})
export class BadgeAnimeTypeComponent {
  @Input({ required: true }) props !: Inputs
}
