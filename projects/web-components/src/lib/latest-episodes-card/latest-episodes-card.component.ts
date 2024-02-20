import { Component, Input } from '@angular/core';
import { BadgeAnimeTypeComponent, Color } from '../badge-anime-type/badge-anime-type.component';

interface Inputs{
  image: string
  title: string
  badgeColor: Color
  animeType: string
}

@Component({
  selector: 'web-latest-episodes-card',
  standalone: true,
  imports: [BadgeAnimeTypeComponent],
  templateUrl: './latest-episodes-card.component.html',
})
export class LatestEpisodesCardComponent {
  @Input({ required: true }) props !: Inputs
  
}
