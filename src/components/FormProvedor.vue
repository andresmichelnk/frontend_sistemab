<template>
  <div class="container-fluid ">
    <form v-if="item" name="Form" @submit.prevent="">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label separar-top separar-bottom">
          <h3>Actualiza Provedor</h3>
        </label>
        <input type="text" v-model="innerValue.nombre" class="form-control" placeholder="Nombre"
               required>

        <label for="exampleFormControlTextarea1" class="form-label"></label>
        <textarea v-model="innerValue.direccion" class="form-control" rows="3" minlength="12"
                  placeholder="Direccion" required></textarea>
      </div>
      <br>
      <div style="display: flex;flex-direction: row;justify-content: space-between">
        <button class="btn btn-danger" @click="deleteItem">eliminar</button>
        <button class="btn btn-primary" @click="updateItem">actualizar</button>
      </div>
    </form>
    <form v-else name="Form" @submit.prevent="submit()">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label separar-top separar-bottom">
          <h3>Nuevo Provedor</h3>
        </label>
        <input type="text" v-model="innerValue.nombre" class="form-control" id="exampleFormControlInput1"
               placeholder="Nombre"
               required>

        <label for="exampleFormControlTextarea1" class="form-label"></label>
        <textarea v-model="innerValue.direccion" class="form-control" id="exampleFormControlTextarea1" rows="3"
                  minlength="12"
                  placeholder="Direccion" required></textarea>
      </div>
      <br>
      <button type="submit" class="btn btn-primary">Agregar Provedor</button>
    </form>
    <br><br><br>
  </div>
</template>

<script setup>
import {createProvedor, updateProvedor} from '../user/provedorApi';
import {defineProps, defineEmits, watch, reactive,} from "vue"

const props = defineProps(['item'])

const innerValue = reactive({
  nombre: "",
  direccion: ""
})

watch(() => props.item, ({nombre, direccion}, _old_item) => {
  innerValue.nombre = nombre ?? "";
  innerValue.direccion = direccion ?? "";
})

const emit = defineEmits(['created'])

const created = (event) => {
  emit('created')
}

function submit() {
  createProvedor(innerValue).then((res) => {
    created()
  })
}

function deleteItem() {
  alert(Eliminar)
  created()
}

function updateItem() {
  let {id} = props.item;
  updateProvedor(id, innerValue).then(
      () => created()
  )
}

</script>
