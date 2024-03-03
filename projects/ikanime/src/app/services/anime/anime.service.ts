import { Injectable, computed, inject } from '@angular/core';
import { AnimesService } from './domain/animes/animes.service';
import { FindAnimeBuilderService } from './find/find-anime-builder.service';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  
  private _findAnimeBuilderService = inject(FindAnimeBuilderService)
  private _animesService = inject(AnimesService)

  public animes = computed(()=> this._animesService.animes() )

  findAnimeBuilder(){
    return this._findAnimeBuilderService
  }
  
}
