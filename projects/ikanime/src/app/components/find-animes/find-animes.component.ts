import { Component, ElementRef, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as Rxjs from 'rxjs';

import * as webComponents from '@webComponents';
import { AnimeService } from '../../services';
import { Anime } from '../../models/anime';

@Component({
  selector: 'app-find-animes',
  standalone: true,
  imports: [ CommonModule, FormsModule, webComponents.BadgeAnimeTypeComponent, webComponents.ClickOutsideDirective ],
  templateUrl: './find-animes.component.html',
})
export class FindAnimesComponent implements OnInit {
  
  public animeToFind: string = ''
  public animes: Anime[] = []
  public animesNotFound: boolean = false 
  
  private _animeToFindChanged = new Rxjs.Subject<string>();
  private _destroy$ = new Rxjs.Subject<void>();
  private _animeService = inject(AnimeService)
  
  constructor(public el: ElementRef){}

  ngOnInit(): void {
    this.setAnimeToFindSubscription();
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  setAnimeToFindSubscription(): void {
    this._animeToFindChanged
      .pipe(
        Rxjs.debounceTime(300),
        Rxjs.distinctUntilChanged(),
        Rxjs.takeUntil(this._destroy$)
      )
      .subscribe((newValue) => {
        this.updateAnimeToFind(newValue);
      });
  }

  handleClickOutside() {
    this.animeToFind = '';
    this.animes = [];
    this.animesNotFound = false;
  }

  onAnimeToFindChange(newValue: string): void {
    this._animeToFindChanged.next(newValue);
  }

  updateAnimeToFind(newValue: string): void {
    this.animesNotFound = false 
    
    if(newValue.trim().length === 0){
      this.animes = []
      return
    }

    this._animeService.findAnimeBuilder()
      .build({
        queries:{ limit: 10, page:1 },
        body: { name: { contains: newValue }, }
      }).subscribe((resp)=>{
        if(!resp) return
        this.animes = resp.records
        if(this.animes.length === 0){
          this.animesNotFound = true
        }
      })

    }

}
