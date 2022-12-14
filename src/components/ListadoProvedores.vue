<template>
  <div class="container-fluid">
    <ul class="list-group">
      <li class="list-group-item " v-for="item in provedores" :key="item.index">
        <h4>{{ item.nombre }}</h4>
        <span>Direccion: {{ item.direccion }}</span>
        <div class="col-ms-12">
<!--          <button class="btn btn-primary float-end button-array ">Eliminar</button>-->
          <button @click="selectData(item)" class="btn btn-primary float-end button-array ">Editar</button>
        </div>
      </li>
    </ul>
    <div class="alert alert-danger" role="alert" v-if="state.status">{{ state.e }}</div>
  </div>
</template>

<script setup>
import { defineEmits, defineProps} from 'vue'

const emit = defineEmits(['select'])
const props = defineProps(['provedores','state'])

function selectData(item) {
  emit('select', item)
}

</script>

