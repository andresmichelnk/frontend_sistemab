<template>
  <div class="container-fluid">
    <form name="Form" @submit.prevent="submit()">
      <label for="formGroupExampleInput1" class="form-label separar-top separar-bottom">
        <h3>Nuevo Producto</h3>
      </label>
      <input type="text" class="form-control" id="formGroupExampleInput2" v-model="codigo"
             placeholder="Codigo del producto" required alp>

      <label for="formGroupExampleInput2" class="form-label"></label>
      <input type="text" class="form-control" id="formGroupExampleInput1" v-model="descripcion"
             placeholder="Descripcion del producto" required>

      <label for="formGroupExampleInput3" class="form-label"></label>
      <input type="number" class="form-control" id="formGroupExampleInput3" v-model="precioVenta"
             placeholder="Precio de Venta" required>

      <label for="formGroupExampleInput5" class="form-label"></label>
      <input type="text" class="form-control" id="formGroupExampleInput5" v-model="unidadMedida"
             placeholder="Unidad de medida del producto" required>

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

const emit = defineEmits(['created'])

const created = (event) => {
  emit('created')
}

const submit = () => {
  createProducto({
    descripcion: descripcion.value,
    codigo: codigo.value,
    precioVenta: precioVenta.value,
    unidadMedida: unidadMedida.value
  }).then((res)=>{
    created()
  })
}
</script>