<template>
  <div class="container-fluid ">
    <form name="Form" @submit.prevent="submit()">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label separar-top separar-bottom">
          <h3>Nuevo Provedor</h3>
        </label>
        <input type="text" v-model="nombre" class="form-control" id="exampleFormControlInput1" placeholder="Nombre" required>

        <label for="exampleFormControlTextarea1" class="form-label"></label>
        <textarea v-model="direccion" class="form-control" id="exampleFormControlTextarea1" rows="3" minlength="12"
                  placeholder="Direccion" required></textarea>
      </div>
      <br>
      <button type="submit" class="btn btn-primary">Agregar Provedor</button>
    </form>

    <br><br><br>

  </div>
</template>

<script setup>
import {createProvedor} from '../user/provedorApi';
import {ref} from "vue"

const nombre = ref("")
const direccion = ref("")

const emit = defineEmits(['created'])

const created = (event) =>{
  emit('created')
}

const validation = ()=>{
  alert('No se puede')
}

function submit() {
  createProvedor({
    nombre:nombre.value,
    direccion:direccion.value
  }).then((res)=>{
    created()
  })
}

</script>
