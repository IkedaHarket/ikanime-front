import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as WebComponents from '@webComponents';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ 
      RouterOutlet,
      WebComponents.ButtonComponent,
      WebComponents.IconComponent,
      WebComponents.CaptionComponent,
      WebComponents.LatestEpisodesCardComponent,
      WebComponents.BadgeAnimeCategoryComponent,
      WebComponents.AnimeCardInfoComponent,
      WebComponents.AnimeCardComponent,
      WebComponents.NavButtonComponent,
     ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ikanime';

}