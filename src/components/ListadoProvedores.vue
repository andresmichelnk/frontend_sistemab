<template>
  <div class="container-fluid">
    <ul class="list-group">
      <li class="list-group-item " v-for="item in provedores.values" :key="item.index">
        <h4>{{ item.nombre }}</h4>
        <span>Direccion: {{ item.direccion }}</span>
        <div class="col-ms-12">
          <button class="btn btn-primary float-end button-array ">Eliminar</button>
          <button class="btn btn-primary float-end button-array ">Editar</button>
        </div>
        <p></p>
      </li>
    </ul>
    <div class="alert alert-danger" role="alert" v-if="state.status">{{ state.e }}</div>
  </div>
</template>

<script setup>
import {getAllProvedor} from '../user/provedorApi.js'
import {ref, onBeforeMount} from 'vue'

const provedores = ref([])

function fetchData() {
  getAllProvedor().then((data) => {
    provedores.value = data
  })
}

onBeforeMount(fetchData)
</script>

