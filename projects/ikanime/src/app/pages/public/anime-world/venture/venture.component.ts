import { Component, inject } from '@angular/core';
import * as WebComponents from '@webComponents';
import { CommonModule } from '@angular/common';
import { SearchComponent } from 'projects/ikanime/src/app/containers/pages/public/anime-world/venture/search/search.component';
import { AnimeService } from 'projects/ikanime/src/app/services';

@Component({
  selector: 'app-venture',
  standalone: true,
  imports: [ 
    CommonModule, 
    WebComponents.CaptionComponent,
    SearchComponent,
    WebComponents.AnimeCardComponent
   ],
  templateUrl: './venture.component.html'
})
export class VentureComponent {

  private _animeService = inject(AnimeService)
  
  public animes = this._animeService.animes


}
