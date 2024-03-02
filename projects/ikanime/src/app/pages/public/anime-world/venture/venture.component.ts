import { Component, inject } from '@angular/core';
import * as WebComponents from '@webComponents';
import { CommonModule } from '@angular/common';
import * as Service from '../../../../services'
import { SearchComponent } from 'projects/ikanime/src/app/containers/pages/public/anime-world/venture/search/search.component';

@Component({
  selector: 'app-venture',
  standalone: true,
  imports: [ 
    CommonModule, 
    WebComponents.CaptionComponent,
    SearchComponent
   ],
  templateUrl: './venture.component.html'
})
export class VentureComponent {

  public _categoryService = inject(Service.AnimeCategoryService)
  public _stateService = inject(Service.AnimeStateService)
  public _typeService = inject(Service.AnimeTypeService)

  dataIsLoaded(){
    return this._categoryService.categories().isLoad &&
    this._stateService.states().isLoad &&
    this._typeService.types().isLoad 
  }

}
