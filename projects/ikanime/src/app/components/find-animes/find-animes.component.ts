import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-find-animes',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './find-animes.component.html',
})
export class FindAnimesComponent {
  
  public animeToFind: string = ''

  

}
