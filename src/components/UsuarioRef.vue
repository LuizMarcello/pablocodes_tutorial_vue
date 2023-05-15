<template>
  <div>
    <form action="" class="formulario">
      <label for="nome">Nome:</label><br />
      <input type="text" id="nome" name="nome" v-model="nome" /><br />
      <label for="dataNascimento">Data Nascimento:</label><br />
      <input
        type="number"
        id="dataNascimento"
        name="dataNascimento"
        v-model="dataNascimento"
      /><br />
    </form>
  </div>

  <button class="botao" v-on:click="calcularIdade">Calcular idade</button>
  <p style="text-align: center">{{ nome }} tem {{ idade }} anos.</p>

  <button class="botao" v-on:click="calcularIdadeParametro(2)">+2</button>
  <p style="text-align: center">{{ nome }} tem {{ idadeFutura }} anos.</p>
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

//const nome = ref("");
//const dataNascimento = ref(0);
//const idade = ref(0);
///debugger;
//const idadeFutura = ref(0);

/* Criando um objeto(não array) */
const pessoa = reactive({
  avatar: "",
  email: "",
  first_name: "",
  last_name: "",
});

/* Criando métodos */
//function calcularIdade() {
//idade.value = 2023 - dataNascimento.value;
//}
/* Transformando em "arrow-function" */
const calcularIdade = () => {
  /* debugger; */
  idade.value = 2023 - dataNascimento.value;
};

//function calcularIdadeParametro(valor) {
//debugger;
//idadeFutura.value = idade.value + valor;
//}
/* Transformando em "arrow-function" */
const calcularIdadeParametro = (valor) => {
  idadeFutura.value = idade.value + valor;
  idadeFutura.value;
};

/* Para alterar estas propriedades */
//console.log(idade.value);
//idade.value = 27;
//console.log(idade.value);

/* Ciclos de vida do componente */
/* Antes de montar */
//onBeforeMount(() => {
//console.log("onBeforeMount");
//});

/* Montado */
onMounted(() => {
  console.log("onMounted");
});

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
</style>
