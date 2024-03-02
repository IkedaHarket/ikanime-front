import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { AnimeCategoryService, AnimeStateService, AnimeTypeService } from '../../services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-anime-world',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    CommonModule
  ],
  templateUrl: './anime-world.component.html',
})
export class AnimeWorldComponent implements OnInit {

  private _categoryService = inject(AnimeCategoryService)
  private _stateService = inject(AnimeStateService)
  private _typeService = inject(AnimeTypeService)

  ngOnInit(): void {
    this._categoryService.findAndSetCategories().subscribe()
    this._stateService.findAndSetStates().subscribe()
    this._typeService.findAndSetTypes().subscribe()
  }

  dataIsLoaded(){
    return this._categoryService.categories().isLoad &&
    this._stateService.states().isLoad &&
    this._typeService.types().isLoad 
  }

}
