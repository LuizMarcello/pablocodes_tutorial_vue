<template>
  <div class="aviso">
    {{ aviso }}
  </div>
</template>

<script setup>
/* Neste componente filho: "inject" */
import { inject } from "vue";

/* Lá do componente pai "ListaUsuarioEmit.vue" */
const aviso = inject("aviso");
</script>

<style scoped>
.aviso {
    font-size: 0.575rem;
    text-align: center;
}
</style>
