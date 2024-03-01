import { Component, OnInit, Signal, inject, } from '@angular/core';
import * as WebComponents from '@webComponents';
import { DataWithStatus } from 'projects/ikanime/src/app/interfaces';
import { Pagination } from 'projects/ikanime/src/app/models';
import { AnimeCategory, AnimeState, AnimeType } from 'projects/ikanime/src/app/models/anime';
import * as Service from 'projects/ikanime/src/app/services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-venture',
  standalone: true,
  imports: [ 
    CommonModule, 
    WebComponents.CaptionComponent, 
    WebComponents.MultiselectComponent,
    WebComponents.BasicOptionComponent,
    WebComponents.ButtonComponent,
   ],
  templateUrl: './venture.component.html'
})
export class VentureComponent implements OnInit {

  private _categoryService = inject(Service.AnimeCategoryService)
  private _stateService = inject(Service.AnimeStateService)
  private _typeService = inject(Service.AnimeTypeService)

  public categories !: Signal<DataWithStatus<Pagination<AnimeCategory[]>>>
  public states !: Signal<DataWithStatus<Pagination<AnimeState[]>>>
  public types !: Signal<DataWithStatus<Pagination<AnimeType[]>>>

  ngOnInit(): void {
    this.categories = this._categoryService.categories
    this.states = this._stateService.states
    this.types = this._typeService.types
  }

}
