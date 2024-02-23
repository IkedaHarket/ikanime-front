import { Component, Input } from '@angular/core';

interface Inputs{
  text: string,
  selected ?: boolean
}

@Component({
  selector: 'web-nav-button',
  standalone: true,
  imports: [],
  templateUrl: './nav-button.component.html',
})
export class NavButtonComponent {
  @Input({ required: true }) props !: Inputs
}
