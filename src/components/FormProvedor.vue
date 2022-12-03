<template>
  <div class="container-fluid">
    <label for="formGroupExampleInput2" class="form-label separar-top separar-bottom">
      <h3>Nuevo Provedor</h3>
    </label>
    <input type="text" class="form-control" v-model="nombre" id="formGroupExampleInput2" placeholder="Nombre" required>
    <span class="alert" v-if="re11">{{ respuesta }}</span>
    <label for="formGroupExampleInput2" class="form-label"></label>
    <textarea class="form-control" v-model="direccion"  placeholder="Direccion" required></textarea>
    <span class="alert" v-if="re22">{{ respuesta }}</span>

    <br>
    <button @click="validar" class="btn btn-primary">Agregar Provedor</button>
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
      re11 = ref(false),
      re22 = ref(false),
      respuesta = ref("El campo esta vacio")


    const validar = () => {
      if (nombre.value === "") { re11.value = true }
      else { return re11.value = false }
      if (direccion.value === "") { re22.value = true }
      else { return re22.value = false }
    }

    return { nombre, direccion, validar, re11, re22, respuesta }
  }
}
</script>