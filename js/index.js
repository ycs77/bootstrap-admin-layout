import Sidebar from './sidebar'

class BootstrapAdminLayout {
  constructor() {
    new Sidebar()
  }
}

export {
  Sidebar
}

export default BootstrapAdminLayout

if (typeof window !== 'undefined') {
  window.BootstrapAdminLayout = BootstrapAdminLayout
}
