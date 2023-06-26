<template>
  <div>
    <div class="perfil">
      <UsuarioEmit :pessoaaa="pessoa"></UsuarioEmit>
    </div>
  </div>
</template>

<UsuarioProps></UsuarioProps>

<script setup>
import { ref, onMounted } from "vue";
import UsuarioEmit from "../components/UsuarioEmit.vue";
/* Informações da rota na url */
import { useRoute } from "vue-router";

/* Inicializando */
const route = useRoute();

/* Pegando o "id" colocado na url */
const id = route.params.id;

//console.log(id);

const pessoa = ref([]);

/* Usando json para retornar informações da API fake "reqres.in" */
const buscaInformacoes = async () => {
  /* Passando neste url o id de forma dinâmica */
  const req = await fetch(`https://reqres.in/api/users/${id}`);
  const json = await req.json();
  return json.data;
};

/* Com o componente montado */
onMounted(async () => {
  pessoa.value = await buscaInformacoes();
});
</script>

<style lang="scss" scoped></style>
