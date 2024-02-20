import { Component, Input } from '@angular/core';

@Component({
  selector: 'web-caption',
  standalone: true,
  imports: [],
  templateUrl: './caption.component.html',
})
export class CaptionComponent {
  @Input({ required:true }) icon !: string 
}
