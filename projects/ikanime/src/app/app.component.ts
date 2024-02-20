import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent, IconComponent, CaptionComponent, LatestEpisodesCardComponent, BadgeAnimeCategoryComponent, AnimeCardInfoComponent } from '@webComponents';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ 
      RouterOutlet,
      ButtonComponent,
      IconComponent,
      CaptionComponent,
      LatestEpisodesCardComponent,
      BadgeAnimeCategoryComponent,
      AnimeCardInfoComponent,
     ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ikanime';

}