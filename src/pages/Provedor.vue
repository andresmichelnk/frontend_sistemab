<template >
  <Menu></Menu>
  <div class="container separar">
    <div class="container-fluid">
      <div class="row align-items-start ">
        <div class="col-ms-12 col-md-6 col-lg-8">
          <h3 class="container-fluid separar-top separar-bottom">Listado de Provedores</h3>
          <ListaTrabajador ref="ListaTrabajador" class="separar-bottom" />
        </div>
        <div class="col-ms-12 col-md-6 col-lg-4">
          <FormularioProvedor @created="fetchData" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormularioProvedor from '../components/FormProvedor.vue'
import ListaTrabajador from '../components/ListadoProvedores.vue'
import Menu from '../components/Menu.vue'

export default {
  components: {
    Menu,
    FormularioProvedor,
    ListaTrabajador
  },
  methods:{
    fetchData() {
      this.$refs['ListaTrabajador'].fetchData();
    }
  }
}
</script>
