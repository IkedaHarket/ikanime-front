import { Component } from '@angular/core';
import * as Router from '@angular/router';
import { NavButtonComponent } from '@webComponents';

interface NavbarButton{
  id: number
  text: string
  selected: boolean
  onClick: Function
  routerLink: string,
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NavButtonComponent,
    Router.RouterLink,
    Router.RouterLinkActive,
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  navbarButtons: NavbarButton[] = [
    {
      id: 1,
      text: 'Inicio',
      selected: true,
      onClick: () => this.changeSelectedNavbarButton(1),
      routerLink: '/anime',
    },{
      id: 2,
      text: 'Animes',
      selected: false,
      onClick: () => this.changeSelectedNavbarButton(2),
      routerLink: '/anime/venture',
    }
  ]

  private changeSelectedNavbarButton(id:number){
    this.navbarButtons.map(b => (b.id === id) ? b.selected = true : b.selected = false)
  }
}
