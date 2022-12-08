<template>
  <div class="container-fluid">
    <form name="Form" @submit.prevent="submit()">
      <label for="formGroupExampleInput1" class="form-label separar-top separar-bottom">
        <h3>Nuevo Producto</h3>
      </label>
      <input type="text" class="form-control" id="formGroupExampleInput2" v-model="codigo"
             placeholder="Codigo del producto">

      <label for="formGroupExampleInput2" class="form-label"></label>
      <input type="text" class="form-control" id="formGroupExampleInput1" v-model="descripcion"
             placeholder="Descripcion del producto">

      <label for="formGroupExampleInput3" class="form-label"></label>
      <input type="text" class="form-control" id="formGroupExampleInput3" v-model="precioVenta"
             placeholder="Precio de Venta">

      <label for="formGroupExampleInput5" class="form-label"></label>
      <input type="text" class="form-control" id="formGroupExampleInput5" v-model="unidadMedida"
             placeholder="Unidad de medida del producto">

      <br>
      <button type="submit" class="btn btn-primary">Agregar Producto</button>
    </form>
    <br><br><br>
  </div>
</template>

<script setup>
import {createProducto} from "../user/productosApi";
import {ref} from 'vue'

const descripcion = ref("")
const codigo = ref("")
const precioVenta = ref()
const unidadMedida = ref("")

const submit = () => {
  createProducto({
    descripcion,
    codigo,
    precioVenta,
    unidadMedida
  })
}
</script>