<script>
import FormularioProducto from '../components/FormProducto.vue'
import ListaProductos from '../components/ListaProductos.vue';
import Menu from '../components/Menu.vue'

export default {
  components: {
    Menu,
    FormularioProducto,
    ListaProductos
  }
}
</script>

<template>
  <Menu></Menu>
  <div class="container separar">
    <div class="container-fluid">
      <div class="row align-items-start ">
        <div class="col-ms-12 col-md-5 col-lg-4">
          <FormularioProducto />
        </div>
        <div class="col-ms-12 col-md-7 col-lg-8">
          <h3 class="container-fluid  separar-top separar-bottom">Lista de Productos</h3>
          <ListaProductos class="separar-bottom" />
        </div>
      </div>
    </div>
  </div>
</template>