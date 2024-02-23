import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'projects/ikanime/src/environments/environment';
import * as API from '../../interfaces/api';

interface FindOptions extends API.AnimeFindFilterRequest, API.PaginationRequest{}

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  private _http = inject(HttpClient)
  private _baseUrl = environment.API_URL

  find(options: FindOptions){
    const urlParams = new URLSearchParams();
    if (options.limit) {
      urlParams.append('limit', options.limit.toString());
    }
    if (options.page) {
      urlParams.append('page', options.page.toString());
    }
    const url = `${this._baseUrl}/anime?${urlParams.toString()}`;

    return this._http.get(url);
  }
}
