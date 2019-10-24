# Get started

## Install

```bash
$ npm install bootstrap-admin-layout
```
or
```bash
$ yarn add bootstrap-admin-layout
```

### Import

Import to bootstrap.scss and build:

*bootstrap.scss*
```scss
...
@import "~bootstrap-admin-layout/scss/bootstrap-admin-layout";
```

*app.js*
```js
import { Sidebar } from 'bootstrap-admin-layout'

new Sidebar()
```

Or use CDN:
```html
<!-- CSS -->
<link  href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet"><!-- Bootstrap 4 is required -->
<link  href="/path/to/bootstrap-admin-layout.min.css" rel="stylesheet">

<!-- JS -->
<script src="/path/to/bootstrap-admin-layout.min.js"></script>
<script>
new BootstrapAdminLayout.Sidebar();
</script>
<!-- Demo use Fontawesome 5 icons -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/js/fontawesome.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/js/solid.min.js"></script>
```
