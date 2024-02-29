import { Component, OnInit, Signal, inject } from '@angular/core';
import * as WebComponents from '@webComponents';
import { DataWithStatus } from 'projects/ikanime/src/app/interfaces';
import { Pagination } from 'projects/ikanime/src/app/models';
import { AnimeCategory } from 'projects/ikanime/src/app/models/anime';
import { AnimeCategoryService } from 'projects/ikanime/src/app/services';

@Component({
  selector: 'app-venture',
  standalone: true,
  imports: [ WebComponents.CaptionComponent, WebComponents.MultiselectComponent ],
  templateUrl: './venture.component.html'
})
export class VentureComponent implements OnInit {

  private _categoryService = inject(AnimeCategoryService)
  public categories !: Signal<DataWithStatus<Pagination<AnimeCategory[]>>>

  ngOnInit(): void {
    this.categories = this._categoryService.categories
  }

}
