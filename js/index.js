const sidebarToggler = document.querySelector('.layout-sidebar-toggler')
if (sidebarToggler) {
  sidebarToggler.addEventListener('click', () => {
    document.body.classList.add('show-sidebar')
    document.querySelector('.layout-sidebar').classList.add('show')
  })
}

const sidebarOverlay = document.querySelector('.layout-sidebar-overlay')
if (sidebarOverlay) {
  sidebarOverlay.addEventListener('click', () => {
    document.body.classList.remove('show-sidebar')
    document.querySelector('.layout-sidebar').classList.remove('show')
  })
}
