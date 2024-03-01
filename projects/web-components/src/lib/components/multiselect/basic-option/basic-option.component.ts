import { Component, Input } from '@angular/core';

interface Option{
  label:string
  key:string
  title: string
  name: string
}

@Component({
  selector: 'web-basic-option',
  standalone: true,
  imports: [],
  templateUrl: './basic-option.component.html',
})
export class BasicOptionComponent {
  @Input({ required: true }) option !: Option
}
