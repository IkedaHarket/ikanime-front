import { Component, Input } from '@angular/core';
import { BadgeAnimeCategoryComponent } from '../badge-anime-category/badge-anime-category.component';

interface Inputs{
  image: string
  title: string
  description?: string
  categories: string[]
  class?: string
}

@Component({
  selector: 'web-anime-card-info',
  standalone: true,
  imports: [ BadgeAnimeCategoryComponent ],
  templateUrl: './anime-card-info.component.html'
})
export class AnimeCardInfoComponent {
  @Input({ required: true }) props !: Inputs
}
