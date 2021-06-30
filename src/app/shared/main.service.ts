import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MainService {

  public sidenavLinks: any[] = [
    {
      id: 1,
      name: 'home',
      active: false,
      link: 'home'
    },
    {
      id: 2,
      name: 'collections',
      active: false,
      link: 'bloglist'
    },
    {
      id: 3,
      name: 'add_circle',
      active: false,
      link: 'create'
    }
  ]

  constructor() {

  }

  setActiveClass(id: number){
    this.sidenavLinks.forEach((item) => {
      item.id == id ? item.active = true : item.active = false;
    })
  }
}
