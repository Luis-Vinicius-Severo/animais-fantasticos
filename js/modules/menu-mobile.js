import outsideClick from './outsideclick.js';

export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.active = 'active';

    if (events === undefined) {
      this.events = ['touchstart', 'click'];
    } else {
      this.events = events;
    }

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuList.classList.add(this.active);
    this.menuButton.classList.add(this.active);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.active);
      this.menuButton.classList.remove(this.active);
    });
  }

  addMenuMobileEvents() {
    this.events.forEach(evento =>
      this.menuButton.addEventListener(evento, this.openMenu),
    );
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
