class Sidebar {
  constructor() {
    this._listeners()
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
    this.bindEvent('.layout-sidebar-toggler', 'click', () => {
      document.body.classList.add('show-sidebar')
      document.querySelector('.layout-sidebar').classList.add('show')
    })
  }

  _onOverlayBlockClick() {
    this.bindEvent('.layout-sidebar-overlay', 'click', () => {
      document.body.classList.remove('show-sidebar')
      document.querySelector('.layout-sidebar').classList.remove('show')
    })
  }
}

export default Sidebar
