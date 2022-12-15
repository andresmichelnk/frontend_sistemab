<template>
  <div class="container-fluid">
    <form v-if="item" name="Form" @submit.prevent="">
      <label for="formGroupExampleInput1" class="form-label separar-top separar-bottom">
        <h3>Actualizar Producto</h3>
      </label>
      <input type="text" class="form-control" v-model="innerValue.codigo"
             placeholder="Codigo del producto" required>

      <label for="formGroupExampleInput2" class="form-label"></label>
      <input type="text" class="form-control" v-model="innerValue.descripcion"
             placeholder="Descripcion del producto" required>

      <label for="formGroupExampleInput3" class="form-label"></label>
      <input type="number" class="form-control" v-model="innerValue.precioVenta"
             placeholder="Precio de Venta" required>

      <label for="formGroupExampleInput5" class="form-label"></label>
      <input type="text" class="form-control" v-model="innerValue.unidadMedida"
             placeholder="Unidad de medida del producto" required>

      <br>
      <div style="display: flex;flex-direction: row;justify-content: space-between">
        <button class="btn btn-danger" @click="deleteItem">eliminar</button>
        <button class="btn btn-primary" @click="updateItem">actualizar</button>
      </div>
    </form>

    <form v-else name="Form" @submit.prevent="submit()">
      <label for="formGroupExampleInput1" class="form-label separar-top separar-bottom">
        <h3>Nuevo Producto</h3>
      </label>
      <input type="text" class="form-control" id="formGroupExampleInput2" v-model="innerValue.codigo"
             placeholder="Codigo del producto" required>

      <label for="formGroupExampleInput2" class="form-label"></label>
      <input type="text" class="form-control" id="formGroupExampleInput1" v-model="innerValue.descripcion"
             placeholder="Descripcion del producto" required>

      <label for="formGroupExampleInput3" class="form-label"></label>
      <input type="number" class="form-control" id="formGroupExampleInput3" v-model="innerValue.precioVenta"
             placeholder="Precio de Venta" required>

      <label for="formGroupExampleInput5" class="form-label"></label>
      <input type="text" class="form-control" id="formGroupExampleInput5" v-model="innerValue.unidadMedida"
             placeholder="Unidad de medida del producto" required>

      <br>
      <button type="submit" class="btn btn-primary">Agregar Producto</button>
    </form>
    <br><br><br>
  </div>
</template>

<script setup>
import {createProducto, deleteProducto, updateProducto} from "../user/productosApi";
import {defineProps, defineEmits, watch, reactive,} from "vue"


const props = defineProps(['item'])

const innerValue = reactive({
  descripcion: "",
  codigo: "",
  precioVenta: null,
  unidadMedida: ""
})

watch(() => props.item, ({descripcion, codigo, precioVenta, unidadMedida}, _old_item) => {
  innerValue.descripcion = descripcion ?? "";
  innerValue.codigo = codigo ?? "";
  innerValue.precioVenta = precioVenta ?? null;
  innerValue.unidadMedida = unidadMedida ?? "";
})

const emit = defineEmits(['created'])
const created = (event) => {
  emit('created')
}

function submit() {
  createProducto(innerValue).then((res) => {
    created()
  })
}

function deleteItem() {
  let {codigo} = props.item
  deleteProducto(codigo, innerValue)
      .then(() => created())
}

function updateItem() {
  let {codigo} = props.item;
  updateProducto(codigo, innerValue)
      .then(() => created())
}
</script>