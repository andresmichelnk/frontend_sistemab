<script setup>
import {useRouter} from 'vue-router';
import {login} from "@/plugins/basic_auth"
import {ref} from "vue";

let username = new ref("");
let password = new ref("");
const router = useRouter()

function _login() {
  login(username.value, password.value).then(() =>
      router.push('/home')
  ).catch(console.log)
}
</script>

<template>
  <div class="container center col-4 fixed-top centro">
    <p class="title">
      <img src="../assets/vite.png" class="rounded-circle" alt="...">
    </p>
    <form class="separar-bottom">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Usuario</label>
        <input v-model="username" type="text" class="form-control" id="exampleInputEmail1"
               aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">Usted esta seguro con nosotros</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Clave</label>
        <input v-model="password" type="password" class="form-control" id="exampleInputPassword1">
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Me echa un vistazo</label>
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="_login">Enviar</button>
    </form>
  </div>
</template>