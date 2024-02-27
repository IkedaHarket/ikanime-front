import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Signal, inject, signal } from '@angular/core';
import { environment } from 'projects/ikanime/src/environments/environment';
import * as API_INTERFACES from '../../interfaces/api';
import * as API_MODELS from '../../models/api';
import * as Rxjs from 'rxjs';
import { Pagination } from '../../models';
import { AnimeState } from '../../models/anime';
import { convertToPagination } from '../adapters';
import { convertToState } from './adapter';
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
export class AnimeStateService {

  private _http = inject(HttpClient)
  private _baseUrl = environment.API_URL
  private _states = signal<DataWithStatus<Pagination<AnimeState[]>>>({
    hasError: false, isLoad: false, isLoading: true
  })

  public get states(): Signal<DataWithStatus<Pagination<AnimeState[]>>>{
    return this._states.asReadonly()
  }

  public setStates(value: DataWithStatus<Pagination<AnimeState[]>>): void{
    this._states.set(value)
  }

  public updateStates(updateFn: (value: DataWithStatus<Pagination<AnimeState[]>>) => DataWithStatus<Pagination<AnimeState[]>>): void{
    this._states.update(updateFn)
  }

  find(options: FindOptions = {}): Rxjs.Observable<Pagination<AnimeState[]> | null>{
    let url = `${this._baseUrl}/anime/state/find`;
    if(options.queries){
      url += `?${ new API_MODELS.PaginationRequest(options.queries.page, options.queries.limit).createUrlParams() }`
    }
    
    return this._http.post<API_INTERFACES.ServerResponse<API_INTERFACES.PaginationResponse<API_INTERFACES.StateFindResponse[]>>>(
      url, {}
      ).pipe(
          Rxjs.map( ({ response }) => {
            return convertToPagination<AnimeState[]>({
              ...response,
              records: convertToState(response.records)
            })
          } ),
          Rxjs.catchError( (e)=>  this._handleError(e) ),
        );
  }

  findAndSetStates(options: FindOptions = {}){
    return this.find(options).pipe(
        Rxjs.tap((response)=>{
          if(response){
            this.setStates({
              hasError: false,
              isLoad: true,
              isLoading: false,
              item: response
            })
          }else{
            this.setStates({
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
