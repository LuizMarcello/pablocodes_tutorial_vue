<template>
  <div>
    <form action="" class="formulario">
      <label for="nome">Nome:</label><br />
      <input type="text" id="nome" name="nome" v-model="pessoa.nome" /><br />
      <label for="dataNascimento">Data Nascimento:</label><br />
      <input
        type="number"
        id="dataNascimento"
        name="dataNascimento"
        v-model="pessoa.dataNascimento"
      /><br />
    </form>
  </div>

  <p style="text-align: center">
    {{ pessoa.nome }} nasceu em {{ pessoa.dataNascimento }}
  </p>
</template>

<script setup>
/* Reatividade do vueJS */

/* O "reactive" é mais focado em objetos. */
import { ref, reactive } from "vue";

/* Criando o objeto "pessoa" */
const pessoa = reactive({
  nome: "",
  dataNascimento: 0,
  idade: 0,
});

/* Para alterar uma propriedade deste objeto */
/* Neste caso, não precisa do ".value" */
console.log(pessoa.idade);
pessoa.idade = 27;
console.log(pessoa.idade);
</script>

<style scoped>
.formulario {
  margin: 0 auto;
  padding: 5px;
  width: 200px;
  background-color: darkcyan;
}
</style>
