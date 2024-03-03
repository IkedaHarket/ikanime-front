import { Injectable, Signal, signal } from '@angular/core';
import { Pagination } from '../../../../models/paginator.entity';
import { Anime } from '../../../../models/anime';
import { DataWithStatus } from '../../../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AnimesService {

  private _animes = signal<DataWithStatus<Pagination<Anime[]>>>({
    hasError: false, isLoad: false, isLoading: true
  })

  public get animes(): Signal<DataWithStatus<Pagination<Anime[]>>>{
    return this._animes.asReadonly()
  }

  public setAnimes(value: DataWithStatus<Pagination<Anime[]>>): void{
    this._animes.set(value)
  }

  public updateAnimes(updateFn: (value: DataWithStatus<Pagination<Anime[]>>) => DataWithStatus<Pagination<Anime[]>>): void{
    this._animes.update(updateFn)
  }
}
