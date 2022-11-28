<template>
  <div class="container-fluid">
    <label for="formGroupExampleInput2" class="form-label separar-top separar-bottom">
      <h3>Nuevo Provedor</h3>
    </label>
    <input type="text" class="form-control" v-model="nombre" id="formGroupExampleInput2" placeholder="Nombre">
    <span class="alert" v-if="re1">{{ respuesta }}</span>
    <label for="formGroupExampleInput2" class="form-label"></label>
    <input type="text-Area" class="form-control" v-model="direccion" id="formGroupExampleInput2"
      placeholder="Direccion">
    <span class="alert" v-if="re2">{{ respuesta }}</span>

    <br>
    <button @click="validar" class="btn btn-primary">Agregar Producto</button>
    <br><br><br>

  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'FormularioProvedor',

  setup() {
    const nombre = ref(""),
      direccion = ref(""),
      re1 = ref(false),
      re2 = ref(false),
      respuesta = ref("El campo esta vacio")


    const validar = () => {
      if (nombre.value == "") { re1.value = true }
      if (nombre.value !== "") { return re1.value = false }
      if (direccion.value == "") { re2.value = true }
      if (direccion.value !== "") { return re2.value = false }
    }

    return { nombre, direccion, validar, re1, re2, respuesta }
  }
}
</script>