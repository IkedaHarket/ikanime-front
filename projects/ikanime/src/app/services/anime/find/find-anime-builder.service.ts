import { Injectable, inject } from '@angular/core';
import * as Rxjs from 'rxjs';
import { FindAnimeService } from './find-anime.service';
import { FindAnimeFiltersService } from './find-anime-filters.service';
import { AnimesService } from '../domain/animes/animes.service';
import { FindOptions } from '../domain/interfaces/find-options.interface';

@Injectable({
  providedIn: 'root'
})
export class FindAnimeBuilderService {

  private _animeService = inject(AnimesService)
  private _findAnimeFilterService = inject(FindAnimeFiltersService)
  private _findAnimeService = inject(FindAnimeService)

  private _haveSetAnimes: boolean = false;

  setAnimes(value: boolean){
    this._haveSetAnimes = value
    return this
  }

  setFindFilters( filters:  FindOptions ){
    this._findAnimeFilterService.setFindFilters(filters)
    return this
  }

  updateFindFilters(updateFn: (value: FindOptions) => FindOptions){
    this._findAnimeFilterService.updateFindFilters(updateFn)
    return this
  }

  build( filters ?:  FindOptions ){
    const findOption = (filters) ? filters : this._findAnimeFilterService.findFilters()
    return this._findAnimeService.find(findOption).pipe(
        Rxjs.tap((response) => {
          if(this._haveSetAnimes){
            if(response){
              this._animeService.setAnimes({
                hasError: false,
                isLoad: true,
                isLoading: false,
                item: response
              })
            }else{
              this._animeService.setAnimes({
                hasError: true,
                isLoad: false,
                isLoading: false,
              })
            }
          }
        })
      )
  }

}
