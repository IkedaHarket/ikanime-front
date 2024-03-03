import { Component, computed, inject } from '@angular/core';
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
    WebComponents.AnimeCardComponent,
    WebComponents.PaginatorComponent,
    SearchComponent,
   ],
  templateUrl: './venture.component.html'
})
export class VentureComponent {

  private _animeService = inject(AnimeService)
  
  public animes = this._animeService.animes

  public paginatorObject = computed<WebComponents.Pagination | null>(()=> {
    if(!this.animes().isLoad || !this.animes().item) return null
    const { limit, page, total} = this.animes().item!
    return { limit, page, total } as WebComponents.Pagination
  })

  changePage(page: number){
    this._animeService.findAnimeBuilder()
      .setAnimes(true)
      .updateFindFilters((currentFilters)=>({
        ...currentFilters,
        queries:{
          limit: 18,
          ...currentFilters,
          page,
        }
      }))
      .build().subscribe()
      
  }
}
