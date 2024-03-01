import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ClickOutsideDirective } from '../../directives/clickOutside/click-outside.directive';

interface Inputs {
  label: string,
}

@Component({
  selector: 'web-multiselect',
  standalone: true,
  imports: [ CommonModule, ClickOutsideDirective ],
  templateUrl: './multiselect.component.html'
})
export class MultiselectComponent {
  @Input({ required: true }) props !: Inputs
  
  public hasClick: boolean = false

  toggleHasClick(): void {
    this.hasClick = !this.hasClick
  }

  handleClickOutside(){
    this.hasClick = false
  }
}
