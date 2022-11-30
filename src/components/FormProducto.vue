<template>
  <div class="container-fluid">
    <label for="formGroupExampleInput" class="form-label separar-top separar-bottom">
      <h3>Nuevo Producto</h3>
    </label>
    <input type="text" class="form-control" id="formGroupExampleInput1" v-model="nombreProducto"
      placeholder="Nombre del producto"><span class="alert" v-if="res1">{{ respuesta }}</span>
    <label for="formGroupExampleInput2" class="form-label"></label>
    <input type="text" class="form-control" id="formGroupExampleInput2" v-model="codigo"
      placeholder="Codigo del producto"><span class="alert" v-if="res2">{{ respuesta }}</span>
    <label for="formGroupExampleInput2" class="form-label"></label>
    <input type="text" class="form-control" id="formGroupExampleInput3" v-model="precio"
      placeholder="Precio de Venta"><span class="alert" v-if="res3">{{ respuesta }}</span>
    <label for="formGroupExampleInput2" class="form-label"></label>
    <input type="text" class="form-control" id="formGroupExampleInput4" v-model="cantidad"
      placeholder="Cantidad de producto"><span class="alert" v-if="res4">{{ respuesta }}</span>
    <label for="formGroupExampleInput2" class="form-label"></label>
    <input type="text" class="form-control" id="formGroupExampleInput5" v-model="medida"
      placeholder="Unidad de medida del producto"><span class="alert" v-if="res5">{{ respuesta }}</span>

    <br>
    <button class="btn btn-primary" @click="validar">Agregar Producto</button>
    <br><br><br>


  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'FormularioProducto',

  setup() {
    const nombreProducto = ref(""),
      codigo = ref(""),
      precio = ref(""),
      cantidad = ref(""),
      medida = ref(""),
      respuesta = ref("El campo esta vacio"),
      res1 = ref(false),
      res2 = ref(false),
      res3 = ref(false),
      res4 = ref(false),
      res5 = ref(false)


    const validar = () => {
      if (nombreProducto.value == "") { res1.value = true }
      if (codigo.value == "") { res2.value = true }
      if (precio.value == "") { res3.value = true }
      if (cantidad.value == "") { res4.value = true }
      if (medida.value == "") { res5.value = true }
    }

    return { nombreProducto, codigo, cantidad, medida, precio, validar, respuesta, res1, res2, res3, res4, res5 }
  }
}

</script>