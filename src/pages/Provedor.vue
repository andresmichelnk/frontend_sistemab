<template>
  <Menu></Menu>
  <div class="container separar">
    <div class="container-fluid">
      <div class="row align-items-start ">
        <div class="col-ms-12 col-md-6 col-lg-8">
          <h3 class="container-fluid separar-top separar-bottom">Listado de Provedores</h3>
          <listado-provedores
              class="separar-bottom"
              :provedores="provedores" :state="state" @select="selectItem"/>
        </div>
        <div class="col-ms-12 col-md-6 col-lg-4">
          <formulario-provedor :item="itemSelected" @created="fetchData"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onBeforeMount, reactive, ref} from 'vue';
import FormularioProvedor from '../components/FormProvedor.vue'
import ListadoProvedores from '../components/ListadoProvedores.vue'
import Menu from '../components/Menu.vue'
import {getAllProvedor} from "../user/provedorApi";

const itemSelected = ref(null)
const provedores = ref([])
const state = reactive({
  e: "",
  status: false
})


function fetchData() {
  getAllProvedor().then((data) => {
    provedores.value = data
  }).catch((error) => {
    state.e = "No se Encontro la lista de Provedores"
    state.status = true
    console.error('No se encuentra la API-REST')
  })
  itemSelected.value = null
}

onBeforeMount(fetchData)


function selectItem(item) {
  itemSelected.value = item;
}

</script>
