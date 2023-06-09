<template>
  <div>
    <h2 class="titulo">{{ nome }}</h2>
  <!-- A diretiva "v-html" renderiza uma string como um objeto html. -->
    <!-- <span v-html="subtitulo"></span> -->
    <!-- <span v-text="subtitulo"></span> -->
  </div>
</template>

<script setup>
const nome = "Pablo Codes";
/* A diretiva "v-html" renderiza uma string como
   um objeto html. */
//const subtitulo = `<p style="color:silver">Tutoriais Vue, .NET</p>`;
</script>

<style scoped>
.titulo {
  margin: 0 auto;
  text-align: center;
  color: red;
}
</style>
