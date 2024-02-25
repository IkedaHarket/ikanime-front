import { Component } from '@angular/core';
import * as WebComponents from '@webComponents';

@Component({
  selector: 'app-venture',
  standalone: true,
  imports: [ WebComponents.CaptionComponent, WebComponents.MultiselectComponent ],
  templateUrl: './venture.component.html'
})
export class VentureComponent {

}
