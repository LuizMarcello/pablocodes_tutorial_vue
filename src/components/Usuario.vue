<template>
  <div class="perfil">
    <img :src="pessoa.avatar" alt="Perfil" />
    <strong>{{ nomeCompleto }}</strong>
    <span>{{ pessoa.email }}</span>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from "vue";

/* Passando como argumento, um array, com eventos personalizados, 
   para o componente pai */
//const emit = defineEmits(["seleccao"]);

//const enviaEmit = (id) => {
//emit("seleccao", id);
//debugger;
//};

/* Passando como argumento, um array, com eventos personalizados, 
   para o componente pai */
//defineEmits(["selecccao"]);
</script>

<style scoped>
.pessoas {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.perfil {
  width: 150px;
  text-align: center;
}

.perfil img {
  margin: 0 auto;
  width: 80px;
  display: block;
  padding: 5px;
  border-radius: 10px;
}
.perfil span {
  display: block;
  font-size: 0.75rem;
}
/* Para transformar esta classe css, dentro
   de "scoped", em classe global. */
/* .botao { */
/* :global(.botao) {
  margin: 5px auto;
  padding: 5px;
  display: block;
  background: darkcyan;
  border-radius: 5px;
  border-style: none;
  cursor: pointer;
} */
</style>
