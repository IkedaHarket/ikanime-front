import { Component, Input } from '@angular/core';
import { Color } from '../badge-anime-type/badge-anime-type.component';

interface Inputs{
  size: 'normal' | 'small',
  anime: {
    image: string,
    badge: {
      color: Color,
      text:string
    },
    title: string
  }
}

@Component({
  selector: 'web-anime-card',
  standalone: true,
  imports: [],
  templateUrl: './anime-card.component.html',
})
export class AnimeCardComponent {
  @Input({ required: true }) props !: Inputs
  
}
