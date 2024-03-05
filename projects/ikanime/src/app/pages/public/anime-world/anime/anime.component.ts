import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import * as WebComponents from '@webComponents';
import { AnimeService } from 'projects/ikanime/src/app/services';

@Component({
  selector: 'app-anime',
  standalone: true,
  imports: [
    CommonModule,
    WebComponents.BadgeAnimeCategoryComponent,
    WebComponents.BadgeAnimeTypeComponent,
    WebComponents.ButtonComponent,
  ],
  templateUrl: './anime.component.html'
})
export class AnimeComponent implements OnInit{

  private _animeService = inject(AnimeService)
  private _route = inject(ActivatedRoute)

  public anime = this._animeService.animes
  
  ngOnInit(): void {
    this._route.params.subscribe((params)=>{
      this._animeService.findAnimeBuilder().setFindFilters({
        body:{
          uniqueName:{
            contains: params['name']
          }
        }
      }).setAnimes(true).build().subscribe()
    })    
  }

}
