import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface Inputs {
  label: string,
}

@Component({
  selector: 'web-multiselect',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './multiselect.component.html'
})
export class MultiselectComponent {
  @Input({ required: true }) props !: Inputs
  
  public hasClick: boolean = true

  toggleHasClick(): void {
    this.hasClick = !this.hasClick
  }

}
