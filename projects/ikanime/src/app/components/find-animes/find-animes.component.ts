import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as Rxjs from 'rxjs';
import { AnimeService } from '../../services';

@Component({
  selector: 'app-find-animes',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './find-animes.component.html',
})
export class FindAnimesComponent implements OnInit {
  
  public animeToFind: string = ''

  private _animeToFindChanged = new Rxjs.Subject<string>();
  private _destroy$ = new Rxjs.Subject<void>();

  private _animeService = inject(AnimeService)
  

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

  onAnimeToFindChange(newValue: string): void {
    this._animeToFindChanged.next(newValue);
  }

  updateAnimeToFind(newValue: string): void {
    this._animeService.find({
      queries:{ limit: 10, page:1 },
      body: { name: { contains: newValue }, }
    }).subscribe(console.log)
  }

}
