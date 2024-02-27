import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'projects/ikanime/src/environments/environment';
import * as API_INTERFACES from '../../interfaces/api';
import * as API_MODELS from '../../models/api';
import * as Rxjs from 'rxjs';
import { Pagination } from '../../models';
import { AnimeState } from '../../models/anime';
import { convertToPagination } from '../adapters';
import { convertToState } from './adapter';

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

  private _handleError(error: HttpErrorResponse) {
    return Rxjs.of(null)
  }
}
