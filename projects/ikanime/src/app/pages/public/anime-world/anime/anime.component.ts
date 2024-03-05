import { Component, OnInit, inject } from '@angular/core';
import { AnimeService } from 'projects/ikanime/src/app/services';

@Component({
  selector: 'app-anime',
  standalone: true,
  imports: [],
  templateUrl: './anime.component.html'
})
export class AnimeComponent implements OnInit{

  private _animeService = inject(AnimeService)

  ngOnInit(): void {
    this._animeService.findAnimeBuilder().setFindFilters({
      
    })
    
  }

}
