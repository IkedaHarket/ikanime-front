import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Signal, inject, signal } from '@angular/core';
import { environment } from 'projects/ikanime/src/environments/environment';
import * as API_INTERFACES from '../../interfaces/api';
import * as API_MODELS from '../../models/api';
import * as Rxjs from 'rxjs';
import { Pagination } from '../../models';
import { convertToPagination } from '../adapters';
import { AnimeType } from '../../models/anime';
import { convertToAnimeType } from './adapter';
import { DataWithStatus } from '../../interfaces';

interface FindOptions{
  queries?: {
    page: number,
    limit: number
  },
}

@Injectable({
  providedIn: 'root'
})
export class AnimeTypeService {

  private _http = inject(HttpClient)
  private _baseUrl = environment.API_URL
  private _types = signal<DataWithStatus<Pagination<AnimeType[]>>>({
    hasError: false, isLoad: false, isLoading: true
  })

  public get types(): Signal<DataWithStatus<Pagination<AnimeType[]>>>{
    return this._types.asReadonly()
  }

  public setTypes(value: DataWithStatus<Pagination<AnimeType[]>>): void{
    this._types.set(value)
  }

  public updateTypes(updateFn: (value: DataWithStatus<Pagination<AnimeType[]>>) => DataWithStatus<Pagination<AnimeType[]>>): void{
    this._types.update(updateFn)
  }
  
  find(options: FindOptions = {}): Rxjs.Observable<Pagination<AnimeType[]> | null>{
    let url = `${this._baseUrl}/anime/type/find`;
    if(options.queries){
      url += `?${ new API_MODELS.PaginationRequest(options.queries.page, options.queries.limit).createUrlParams() }`
    }
    
    return this._http.post<API_INTERFACES.ServerResponse<API_INTERFACES.PaginationResponse<API_INTERFACES.TypeFindResponse[]>>>(
      url, {}
      ).pipe(
          Rxjs.map( ({ response }) => {
            return convertToPagination<AnimeType[]>({
              ...response,
              records: convertToAnimeType(response.records)
            })
          } ),
          Rxjs.catchError( (e)=>  this._handleError(e) ),
        );
  }

  findAndSetTypes(options: FindOptions = {}){
    return this.find(options).pipe(
        Rxjs.tap((response)=>{
          if(response){
            this.setTypes({
              hasError: false,
              isLoad: true,
              isLoading: false,
              item: response
            })
          }else{
            this.setTypes({
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
