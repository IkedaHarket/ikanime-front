import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'web-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
})
export class ButtonComponent{
  @Input() title: string = 'Button'
  @Input() type: string = 'button'
  @Input() class: string = ''
  @Output() onClick = new EventEmitter<HTMLButtonElement>();
  @ViewChild('button') button !: ElementRef<HTMLButtonElement>
  @ViewChild('icon') icon !: ElementRef

  handlerClick(){
    this.onClick.emit(this.button.nativeElement)
  }
  
}
