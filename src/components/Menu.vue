<script setup>
import {logout} from "@/plugins/basic_auth"
import {useRouter} from "vue-router";

const router = useRouter()

function _logout(){
  logout();
  router.push("/login");
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
        <div class="d-flex flex-row collapse navbar-collapse float-end" id="navbarNav">
          <ul class="navbar-nav flex-grow-1">
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
          <button class="btn btn-info mx-3 text-white" @click="_logout">
            logout
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>