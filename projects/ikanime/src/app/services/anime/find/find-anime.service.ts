import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'projects/ikanime/src/environments/environment';
import * as API_INTERFACES from '../../../interfaces/api';
import * as API_MODELS from '../../../models/api';
import * as Rxjs from 'rxjs';
import { convertToAnime } from '../adapter';
import { Pagination } from '../../../models/paginator.entity';
import { Anime } from '../../../models/anime';
import { convertToPagination } from '../../adapters';
import { FindOptions } from '../domain/interfaces/find-options.interface';

@Injectable({
  providedIn: 'root'
})
export class FindAnimeService {

  private _http = inject(HttpClient)
  private _baseUrl = environment.API_URL

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

  private _handleError(error: HttpErrorResponse) {
    return Rxjs.of(null)
  }
}
