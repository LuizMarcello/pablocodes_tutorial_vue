<template>
  <NavBar />
  <!--  <NavBar></NavBar> -->
  <!-- <navBar></navBar> -->
  <!-- Existe também um "componente genérico" chamado "component" -->
  <!-- <component is="NavBar"></component> -->
  <header>
    <Cabecalho />
    <!-- <cabecalho></cabecalho> -->
    <!--  <Cabecalho></Cabecalho> -->
  </header>

  <main>
    <Usuario />
    <!-- <Usuario></Usuario> -->
    <!-- <usuario></usuario> -->
  </main>
</template>

<script setup>
import Cabecalho from "./components/Cabecalho.vue";
import Usuario from "./components/Usuario.vue";
//import NavBar from "./components/NavBar.vue";
/* O componente "NavBar.vue" agora está de forma global, no main.js */
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
header {
  line-height: 1.5;
}
</style>
