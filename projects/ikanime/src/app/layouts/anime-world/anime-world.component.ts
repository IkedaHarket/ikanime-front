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
  styleUrl: './anime-world.component.scss'
})
export class AnimeWorldComponent implements OnInit {

  public _categoryService = inject(AnimeCategoryService)
  private _stateService = inject(AnimeStateService)
  private _typeService = inject(AnimeTypeService)

  ngOnInit(): void {
    this._categoryService.find().subscribe((categories)=> {
      if(!categories) return
      this._categoryService.setCategories(categories)
    })
    this._stateService.find().subscribe(console.log)
    this._typeService.find().subscribe(console.log)
  }

}
