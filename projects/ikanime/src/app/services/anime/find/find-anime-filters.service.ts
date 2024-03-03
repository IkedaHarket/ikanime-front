import { Injectable, Signal, signal } from '@angular/core';
import { FindOptions } from '../domain/interfaces/find-options.interface';

@Injectable({
  providedIn: 'root'
})
export class FindAnimeFiltersService {

  private _findFilters = signal<FindOptions>({})

  public get findFilters(): Signal<FindOptions>{
    return this._findFilters.asReadonly()
  }

  public setFindFilters(value: FindOptions): void{
    this._findFilters.set(value)
  }

  public updateFindFilters(updateFn: (value: FindOptions) => FindOptions): void{
    this._findFilters.update(updateFn)
  }

}
