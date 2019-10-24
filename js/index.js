import Sidebar from './sidebar'

const BootstrapAdminLayout = {
  Sidebar
}

export {
  Sidebar
}

export default BootstrapAdminLayout

if (typeof window !== 'undefined') {
  window.BootstrapAdminLayout = BootstrapAdminLayout
}
