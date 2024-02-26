import { Injectable, inject } from '@angular/core';
import { environment } from 'projects/ikanime/src/environments/environment';
import * as Rxjs from 'rxjs'
import * as API_INTERFACES from '../../interfaces/api';
import * as API_MODELS from '../../models/api';
import { Pagination } from '../../models';
import { AnimeCategory } from '../../models/anime';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { convertToCategory } from './adapter';
import { convertToPagination } from '../adapters';

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

  find(options: FindOptions = {}): Rxjs.Observable<Pagination<AnimeCategory[]> | null>{
    let url = `${this._baseUrl}/anime/category/find`;
    if(options.queries){
      url += `?${ new API_MODELS.PaginationRequest(options.queries.page, options.queries.limit).createUrlParams() }`
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

  private _handleError(error: HttpErrorResponse) {
    return Rxjs.of(null)
  }

}
