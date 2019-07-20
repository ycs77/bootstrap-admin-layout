# Usage

Example:

```html
<div class="layout-container">
  <!-- Sidebar -->
  <div class="layout-sidebar">
    <ul class="nav navbar-nav nav-root layout-sidebar-content">
      <li class="nav-item active">
        <a class="nav-link" href="#">
          <div class="nav-link-icon">
            <i class="fas fa-fw fa-home"></i>
          </div>
          <div class="nav-link-name">Home</div>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <div class="nav-link-icon">
            <i class="fas fa-fw fa-user"></i>
          </div>
          <div class="nav-link-name">User</div>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <div class="nav-link-icon">
            <i class="fas fa-fw fa-cog"></i>
          </div>
          <div class="nav-link-name">Settings</div>
        </a>
      </li>
    </ul>
  </div>
  <div class="layout-sidebar-overlay"></div>

  <!-- Content Wrapper -->
  <div class="layout-content-wrapper">
    <div class="layout-breadcrumb">
      <div>
        <!-- Sidebar Toggler Button -->
        <button class="layout-sidebar-toggler" type="button" aria-label="Toggle navigation">
          <span class="layout-sidebar-toggler-icon"></span>
        </button>
      </div>

      <!-- Breadcrumb -->
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          <li class="breadcrumb-item active" aria-current="page">Page</li>
        </ol>
      </nav>
    </div>

    <div class="layout-content">
      <main class="px-3">
        <!-- Content Start -->
        <div class="text-center">
          <h1>{{ title }}</h1>
          <p class="lead">{{ description }}</p>
        </div>
        <!-- Content End -->
      </main>
    </div>
  </div>
</div>
```
