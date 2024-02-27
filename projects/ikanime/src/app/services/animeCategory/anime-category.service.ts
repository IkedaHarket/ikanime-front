import { Injectable, Signal, inject, signal } from '@angular/core';
import { environment } from 'projects/ikanime/src/environments/environment';
import * as Rxjs from 'rxjs'
import * as API_INTERFACES from '../../interfaces/api';
import * as API_MODELS from '../../models/api';
import { Pagination } from '../../models';
import { AnimeCategory } from '../../models/anime';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { convertToCategory } from './adapter';
import { convertToPagination } from '../adapters';
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
export class AnimeCategoryService {

  private _http = inject(HttpClient)
  private _baseUrl = environment.API_URL
  private _categories = signal<DataWithStatus<Pagination<AnimeCategory[]>>>({
    hasError: false, isLoad: false, isLoading: true
  })

  public get categories(): Signal<DataWithStatus<Pagination<AnimeCategory[]>>>{
    return this._categories.asReadonly()
  }

  public setCategories(value: DataWithStatus<Pagination<AnimeCategory[]>>): void{
    this._categories.set(value)
  }

  public updateCategories(updateFn: (value: DataWithStatus<Pagination<AnimeCategory[]>>) => DataWithStatus<Pagination<AnimeCategory[]>>): void{
    this._categories.update(updateFn)
  }
  
  find(options: FindOptions = {}): Rxjs.Observable<Pagination<AnimeCategory[]> | null>{
    let url = `${this._baseUrl}/anime/category/find`;
    if(options.queries){
      url += `?${ new API_MODELS.PaginationRequest(options.queries.page, options.queries.limit).createUrlParams() }`
    }else{
      url += `?${ new API_MODELS.PaginationRequest(1, 100).createUrlParams() }`
    }
    
    return this._http.post<API_INTERFACES.ServerResponse<API_INTERFACES.PaginationResponse<API_INTERFACES.CategoryFindResponse[]>>>(
      url, { }
      ).pipe(
          Rxjs.map( ({ response }) => {
            return convertToPagination<AnimeCategory[]>({
              ...response,
              records: convertToCategory(response.records)
            })
          } ),
          Rxjs.catchError( (e)=>  this._handleError(e) ),
        );
  }

  findAndSetCategories(options: FindOptions = {}){
    return this.find(options).pipe(
        Rxjs.tap((response)=>{
          if(response){
            this.setCategories({
              hasError: false,
              isLoad: true,
              isLoading: false,
              item: response
            })
          }else{
            this.setCategories({
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
