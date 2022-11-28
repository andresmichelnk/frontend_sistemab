<script>
export default {
  name: 'Login'
}
</script>

<template>
  <div class="container center col-4 fixed-top centro">
    <p class="title">
      <img src="../assets/vite.png" class="rounded-circle" alt="...">
    </p>
    <form class="separar-bottom">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Dirección de correo electrónico</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">Nunca compartiremos su correo electrónico con nadie más.</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Clave</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Me echa un vistazo</label>
      </div>
      <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
  </div>
</template>