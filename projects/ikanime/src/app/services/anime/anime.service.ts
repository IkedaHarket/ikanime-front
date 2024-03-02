import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Signal, inject, signal } from '@angular/core';
import { environment } from 'projects/ikanime/src/environments/environment';
import * as API_INTERFACES from '../../interfaces/api';
import * as API_MODELS from '../../models/api';
import * as Rxjs from 'rxjs';
import { convertToAnime } from './adapter';
import { Pagination } from '../../models/paginator.entity';
import { Anime } from '../../models/anime';
import { convertToPagination } from '../adapters';
import { DataWithStatus } from '../../interfaces';

interface FindOptions{
  queries?: {
    page: number,
    limit: number
  },
  body ?: API_INTERFACES.AnimeFindFilterRequest
}

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  private _http = inject(HttpClient)
  private _baseUrl = environment.API_URL
  
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

  find(options: FindOptions = {}): Rxjs.Observable<Pagination<Anime[]> | null>{
    let url = `${this._baseUrl}/anime/find`;
    if(options.queries){
      url += `?${ new API_MODELS.PaginationRequest(options.queries.page, options.queries.limit).createUrlParams() }`
    }
    
    return this._http.post<API_INTERFACES.ServerResponse<API_INTERFACES.PaginationResponse<API_INTERFACES.AnimeFindResponse[]>>>(
      url, { ...options?.body }
      ).pipe(
          Rxjs.map( ({ response }) => {
            return convertToPagination<Anime[]>({
              ...response,
              records: convertToAnime(response.records)
            })
          } ),
          Rxjs.catchError( (e)=>  this._handleError(e) ),
        );
  }

  findAndSetAnimes(options: FindOptions = {}){
    return this.find(options).pipe(
        Rxjs.tap((response)=>{
          if(response){
            this.setAnimes({
              hasError: false,
              isLoad: true,
              isLoading: false,
              item: response
            })
          }else{
            this.setAnimes({
              hasError: true,
              isLoad: false,
              isLoading: false,
            })
          }
        }),
      )
  }

  private _handleError(error: HttpErrorResponse) {
    return Rxjs.of(null)
  }
}
