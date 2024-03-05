import { Component, computed, inject } from '@angular/core';
import * as WebComponents from '@webComponents';
import { CommonModule } from '@angular/common';
import { SearchComponent } from 'projects/ikanime/src/app/containers/pages/public/anime-world/venture/search/search.component';
import { AnimeService } from 'projects/ikanime/src/app/services';
import { environment } from 'projects/ikanime/src/environments/environment';
import { Router } from '@angular/router';

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
  private _router = inject(Router)

  public animes = this._animeService.animes
  public currentPage: number = 1;
  public paginatorObject = computed<WebComponents.Pagination | null>(()=> {
    if(!this.animes().isLoad || !this.animes().item) return null
    const { limit, page, total} = this.animes().item!
    return { limit, page, total } as WebComponents.Pagination
  })

  resetPaginator(){
    this.currentPage = 1;
  }

  navigateToAnime(anime:string){
    this._router.navigate([`anime/${anime}`])
  }

  changePage(page: number){
    this.currentPage = page
    this._animeService.findAnimeBuilder()
      .setAnimes(true)
      .updateFindFilters((currentFilters)=>({
        ...currentFilters,
        queries:{
          limit: environment.VENTURE.ANIMES_PEERS_PAGE,
          ...currentFilters,
          page,
        }
      }))
      .build().subscribe()
      
  }
}
