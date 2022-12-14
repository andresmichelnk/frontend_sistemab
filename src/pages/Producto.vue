<template>
  <Menu></Menu>
  <div class="container separar">
    <div class="container-fluid">
      <div class="row align-items-start ">
        <div class="col-ms-12 col-md-7 col-lg-8">
          <h3 class="container-fluid  separar-top separar-bottom">Lista de Productos</h3>
          <listado-productos :productos="productos" :state="state" @select="selectItem" class="separar-bottom"/>
        </div>
        <div class="col-ms-12 col-md-5 col-lg-4">
          <formulario-productos :item="itemSelected" @created="fetchData"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onBeforeMount, reactive, ref} from "vue";
import Menu from '../components/Menu.vue'
import FormularioProductos from "../components/FormProducto.vue";
import ListadoProductos from '../components/ListaProductos.vue'
import {getAllProducto} from "../user/productosApi";

const itemSelected = ref(null)
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

function selectItem(item) {
  itemSelected.value = item;
}

</script>