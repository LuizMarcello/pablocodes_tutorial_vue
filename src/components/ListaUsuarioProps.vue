<template>
  <div class="pessoas">
    <UsuarioProps
      v-for="pessoooa in pessoas"
      :key="pessoooa.id"
      v-bind:pessoaaa="pessoooa"
    ></UsuarioProps>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

import UsuarioProps from "./UsuarioProps.vue";

const pessoas = ref([]);

/* Usando json para retornar informações da API fake "reqres.in" */
const buscaInformacoes = async () => {
  const req = await fetch(`https://reqres.in/api/users?page=2`);
  const json = await req.json();
  return json.data;
};

/* Com o componente montado */
onMounted(async () => {
  pessoas.value = await buscaInformacoes();
});
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
.botao {
  margin: 5px auto;
  padding: 5px;
  display: block;
  background: darkcyan;
  border-radius: 5px;
  border-style: none;
  cursor: pointer;
}
</style>
