class Sidebar {
  constructor() {
    this._listeners()
  }

  openMenu() {
    document.body.classList.add('show-sidebar')
    document.querySelector('.layout-sidebar').classList.add('show')
  }

  closeMenu() {
    document.body.classList.remove('show-sidebar')
    document.querySelector('.layout-sidebar').classList.remove('show')
  }

  bindEvent(selector, event, callback) {
    const element = document.querySelector(selector)
    if (element) {
      element.addEventListener(event, callback)
    }
  }

  _listeners() {
    this._onTogglerBtnClick()
    this._onOverlayBlockClick()
  }

  _onTogglerBtnClick() {
    this.bindEvent('.layout-sidebar-toggler', 'click', this.openMenu)
  }

  _onOverlayBlockClick() {
    this.bindEvent('.layout-sidebar-overlay', 'click', this.closeMenu)
  }
}

export default Sidebar
