import { Component, Input } from '@angular/core';
import { GearIconComponent } from './gear/gear.component';
import { ReturnArrowIconComponent } from './return-arrow/return-arrow.component';
import { ListIconComponent } from './list/list.component';
import { IframeIconComponent } from './iframe/iframe.component';

type Icon = 'gear' | 'return-arrow' | 'list' | 'iframe'

@Component({
  selector: 'web-icon',
  standalone: true,
  imports: [ 
    GearIconComponent,
    ReturnArrowIconComponent,
    ListIconComponent,
    IframeIconComponent
  ],
  templateUrl: './icon.component.html',
})
export class IconComponent {

  @Input({required: true}) icon !: Icon
  
}
