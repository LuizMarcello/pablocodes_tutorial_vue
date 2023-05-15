<template>
  <div class="perfil">
    <img v-bind:src="pessoa.avatar" alt="Perfil" />
    <strong>{{ pessoa.first_name + pessoa.last_name }}</strong>
    <span>{{ pessoa.email }}</span>
  </div>
</template>

<script setup>
/* Reatividade do vueJS */
/* O "ref" é mais específico para tipos primitivos,
   como numero, booleano. */

import {
  ref,
  reactive,
  /* Antes de montar */
  //onBeforeMount,
  /* Montado */
  onMounted,
  /* Antes de atualizar */
  //onBeforeUpdate,
  /* Atualizado */
  //onUpdated,
  /* Antes de desmontar */
  //onBeforeUnmount,
  /* Desmontado */
  //onUnmounted,
} from "vue";

/* Criando um objeto(não array) */
//const pessoa = reactive({
//avatar: "",
//email: "",
//first_name: "",
//last_name: "",
//});

/* Agora não é mais objeto, por está buscando
   na API fake "reqres.in". */
const pessoa = ref({});

/* Ciclos de vida do componente */
/* Antes de montar */
//onBeforeMount(() => {
//console.log("onBeforeMount");
//});

/* Montado */
onMounted(async () => {
  //pessoa.avatar = "https://xsgames.co/randomusers/assets/avatars/male/0.jpg";
  //pessoa.email = "pablo@gmail.com";
  //pessoa.first_name = "Pablo";
  //pessoa.last_name = "Codes";
  pessoa.value = await buscaInformacoes();
});

/* Usando json para retornar informações da API fake "reqres.in" */
const buscaInformacoes = async () => {
  const req = await fetch("https://reqres.in/api/users/1");
  const json = await req.json();
  return json.data;
};

/* Antes de atualizar */
//onBeforeUpdate(() => {
//console.log("onBeforeUpdate");
//});

/* Atualizado */
//onUpdated(() => {
//console.log("onUpdated");
//});

/* Antes de desmontar */
//onBeforeUnmount(() => {
//console.log("onBeforeUnmount");
//});

/* Desmontado */
//onUnmounted(() => {
//console.log("onUnmounted");
//});
</script>

<style scoped>
.formulario {
  margin: 0 auto;
  padding: 5px;
  width: 200px;
  background-color: darkcyan;
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

.botao:hover {
  background: rgb(102, 147, 147);
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
</style>
