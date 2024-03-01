import { Component, OnInit, Signal, inject, } from '@angular/core';
import * as WebComponents from '@webComponents';
import { DataWithStatus } from 'projects/ikanime/src/app/interfaces';
import { Pagination } from 'projects/ikanime/src/app/models';
import { AnimeCategory, AnimeState } from 'projects/ikanime/src/app/models/anime';
import { AnimeCategoryService, AnimeStateService } from 'projects/ikanime/src/app/services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-venture',
  standalone: true,
  imports: [ 
    CommonModule, 
    WebComponents.CaptionComponent, 
    WebComponents.MultiselectComponent,
    WebComponents.BasicOptionComponent,
   ],
  templateUrl: './venture.component.html'
})
export class VentureComponent implements OnInit {

  private _categoryService = inject(AnimeCategoryService)
  private _stateService = inject(AnimeStateService)

  public categories !: Signal<DataWithStatus<Pagination<AnimeCategory[]>>>
  public states !: Signal<DataWithStatus<Pagination<AnimeState[]>>>

  ngOnInit(): void {
    this.categories = this._categoryService.categories
    this.states = this._stateService.states
  }

}
