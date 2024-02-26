import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { AnimeCategoryService } from '../../services';

@Component({
  selector: 'app-anime-world',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './anime-world.component.html',
  styleUrl: './anime-world.component.scss'
})
export class AnimeWorldComponent implements OnInit {

  private _categoryService = inject(AnimeCategoryService)

  ngOnInit(): void {
    this._categoryService.find().subscribe(console.log)
  }

}
