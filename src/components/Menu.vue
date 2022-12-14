<script>
export default {
  name: 'Menu'
}
</script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/home">
          Sistemab
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse float-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/provedor">
                <a class="nav-link decoracion">Gestionar Provedor</a>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/producto">
                <a class="nav-link" href="#">Gestionar Productos</a>
              </router-link>
            </li>
<!--            <li class="nav-item">
              <RouterLink to="/targetas">
                <a class="nav-link" href="#">Gestionar Targetas de Estivas</a>
              </RouterLink>
            </li>-->
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>