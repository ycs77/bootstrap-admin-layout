/*!
 * Bootstrap Admin Layout v0.1.0 (https://github.com/ycs77/bootstrap-admin-layout)
 * Copyright 2019 Lucas Yang <yangchenshin77@gmail.com>
 * Licensed under MIT (https://github.com/ycs77/bootstrap-admin-layout/blob/master/LICENSE)
 */

(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}(function () { 'use strict';

  const sidebarToggler = document.querySelector('.layout-sidebar-toggler');

  if (sidebarToggler) {
    sidebarToggler.addEventListener('click', () => {
      document.body.classList.add('show-sidebar');
      document.querySelector('.layout-sidebar').classList.add('show');
    });
  }

  const sidebarOverlay = document.querySelector('.layout-sidebar-overlay');

  if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', () => {
      document.body.classList.remove('show-sidebar');
      document.querySelector('.layout-sidebar').classList.remove('show');
    });
  }

}));
