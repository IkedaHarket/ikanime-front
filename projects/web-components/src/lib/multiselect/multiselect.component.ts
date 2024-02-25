import { Component, Input } from '@angular/core';

interface Option{
  label:string,
  key: string
}

interface Inputs {
  label: string,
  options: Option[]
}

@Component({
  selector: 'web-multiselect',
  standalone: true,
  imports: [],
  templateUrl: './multiselect.component.html'
})
export class MultiselectComponent {
  @Input({ required: true }) props !: Inputs
  
}
