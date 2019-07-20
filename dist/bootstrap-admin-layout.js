/*!
 * Bootstrap Admin Layout v0.1.0 (https://github.com/ycs77/bootstrap-admin-layout)
 * Copyright 2019 Lucas Yang <yangchenshin77@gmail.com>
 * Licensed under MIT (https://github.com/ycs77/bootstrap-admin-layout/blob/master/LICENSE)
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.bootstrapAdminLayout = {}));
}(this, function (exports) { 'use strict';

  class Sidebar {
    constructor() {
      this._listeners();
    }

    bindEvent(selector, event, callback) {
      const element = document.querySelector(selector);

      if (element) {
        element.addEventListener(event, callback);
      }
    }

    _listeners() {
      this._onTogglerBtnClick();

      this._onOverlayBlockClick();
    }

    _onTogglerBtnClick() {
      this.bindEvent('.layout-sidebar-toggler', 'click', () => {
        document.body.classList.add('show-sidebar');
        document.querySelector('.layout-sidebar').classList.add('show');
      });
    }

    _onOverlayBlockClick() {
      this.bindEvent('.layout-sidebar-overlay', 'click', () => {
        document.body.classList.remove('show-sidebar');
        document.querySelector('.layout-sidebar').classList.remove('show');
      });
    }

  }

  class BootstrapAdminLayout {
    constructor() {
      new Sidebar();
    }

  }

  if (typeof window !== 'undefined') {
    window.BootstrapAdminLayout = BootstrapAdminLayout;
  }

  exports.Sidebar = Sidebar;
  exports.default = BootstrapAdminLayout;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
