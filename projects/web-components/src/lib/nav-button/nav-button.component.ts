import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'web-nav-button',
  standalone: true,
  imports: [],
  templateUrl: './nav-button.component.html',
})
export class NavButtonComponent {
  @Input() selected ?: boolean
  @Output() onClick = new EventEmitter<HTMLButtonElement>();
  @ViewChild('button') button !: ElementRef<HTMLButtonElement>

  handlerClick(){
    this.onClick.emit(this.button.nativeElement)
  }
}
