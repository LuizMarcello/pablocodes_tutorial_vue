<template>
  <!-- Diretiva "v-once": Vai renderizar uma única vêz,
       depois fica como estático. Ex: Rodapé. Muito bom
       para desempenho. -->
  <NavBar v-once></NavBar>
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
     <UsuarioProps />
    <!-- <UsuarioEmit /> -->
    <!-- <ListaUsuarioProps /> -->
    <ListaUsuarioEmit />
    <!-- <UsuarioWatchWatchEffect /> -->
    <!-- <UsuarioPropsComputed /> -->
    <!-- <UsuarioCiclosDeVida /> -->
    <!-- <Usuario /> -->
    <!-- <Usuario></Usuario> -->
    <!-- <usuario></usuario> -->
  </main>
</template>

<script setup>
import Cabecalho from "./components/Cabecalho.vue";
//import ListaUsuarioProps from "./components/ListaUsuarioProps.vue";
import ListaUsuarioEmit from "./components/ListaUsuarioEmit.vue";
//import UsuarioEmit from "./components/UsuarioEmit.vue";
//import UsuarioProps from "./components/UsuarioProps.vue";
//import Usuario from "./components/UsuarioReactive.vue";
//import Usuario from "./components/UsuarioRef.vue";
//import NavBar from "./components/NavBar.vue";
//import UsuarioCiclosDeVida from "./components/UsuarioCiclosDeVida.vue";
//import UsuarioPropsComputed from "./components/UsuarioPropsComputed.vue";
//import UsuarioPropsComputed from "./components/UsuarioPropsComputed.vue";
//import UsuarioWatchWatchEffect from "./components/UsuarioWatchWatchEffect.vue";
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

[color-scheme="dark"] {
  background-color: black;
  color: white;
}

[color-scheme="light"] {
  background-color: pink;
  color: black;
}
</style>
