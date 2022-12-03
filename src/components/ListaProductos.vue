<script>
import getAll from '../user/productosApi.js'

export default {
  name: 'ListaProductos',
  setup() {
    return getAll()
  }
}
</script>


<template>
  <div class="container-fluid">
    <ul class="list-group">
      <li class="list-group-item" v-for="item in state.producto" :key="item.index">
        <p>
        <h4>{{ item.nombre }}</h4>
        <span>Codigo: {{ item.codigo }}</span> <br>
        Descripcion : {{ item.descripcion }} <br>
        Precio de Venta: {{ item.precioVenta }} <br>
        Unidad de Medida : {{ item.unidadMedida }}
        <button class="btn btn-primary float-end button-array">Eliminar</button>
        <button class="btn btn-primary float-end button-array">Editar</button>
        </p>
      </li>
    </ul>

  </div>
</template>