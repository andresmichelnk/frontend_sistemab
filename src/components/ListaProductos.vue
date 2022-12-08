<template>
  <div class="container-fluid">
    <ul class="list-group">
      <li class="list-group-item" v-for="item in productos" :key="item.index">
        <h4>{{ item.nombre }}</h4>
        <span>Codigo: {{ item.codigo }}</span> <br>
        Descripcion : {{ item.descripcion }} <br>
        Precio de Venta: {{ item.precioVenta }} <br>
        Unidad de Medida : {{ item.unidadMedida }}
        <div class="col-ms-12">
          <button class="btn btn-primary float-end button-array">Eliminar</button>
          <button class="btn btn-primary float-end button-array">Editar</button>
        </div>
      </li>
    </ul>
    <div class="alert alert-danger" role="alert" v-if="state.status">{{ state.e }}</div>
  </div>
</template>

<script setup>
import {getAllProducto} from "../user/productosApi";
import {ref, onBeforeMount, reactive} from "vue";

const productos = ref([])
const state = reactive({
  e: "",
  status: false
})

function fetchData() {
  getAllProducto().then((data) => {
    productos.value = data
  }).catch((error) => {
    state.e = "No se Encontro la lista de Productos"
    state.status = true
    console.error('No se encuentra la API-REST')
  })
}

onBeforeMount(fetchData)
defineExpose({fetchData})
</script>