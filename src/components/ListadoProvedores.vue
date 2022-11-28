<script>
import getAll from '../user/provedorApi.js'


export default {
  name: 'ListaTrabajador',
  setup() {
    return getAll()
  }
}
</script>


<template>
  <div class="container-fluid">
    <ul class="list-group">
      <li class="list-group-item " v-for="item in state.provedores" :key="item.index">
        <p>
        <h4>{{ item.nombre }}</h4>
        Direccion: {{ item.direccion }}
        <button class="btn btn-primary float-end button-array">Eliminar</button>
        <button class="btn btn-primary float-end button-array">Editar</button>
        </p>
      </li>
    </ul>

  </div>
</template>

