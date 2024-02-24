import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'projects/ikanime/src/environments/environment';
import * as API_INTERFACES from '../../interfaces/api';
import * as API_MODELS from '../../models/api';

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

  find(options: FindOptions = {}){
    let url = `${this._baseUrl}/anime/find`;
    if(options.queries){
      url += `?${ new API_MODELS.PaginationRequest(options.queries.page, options.queries.limit).createUrlParams() }`
    }
    
    return this._http.post(url, { ...options?.body });
  }
}
