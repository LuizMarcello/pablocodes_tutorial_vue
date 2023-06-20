<template>
  <div class="pessoas">
    <Usuario
      v-for="pessoa in pessoas"
      :key="pessoa.id"
      :pessoa="pessoa"
      @seleccao="adicionaSelecao"
    ></Usuario>
  </div>
</template>

<script setup>
/* As propriedades computadas são armazenadas em cache */
/* Reatividade do vueJS */
/* O "ref" é mais específico para tipos primitivos,
   como numero, booleano. */
import {
  ref,
  reactive,
  /* Componente montado */
  onMounted,
  computed
} from "vue";

import Usuario from "./Usuario.vue";

const pessoas = ref([]);
const idsSelecao = ref([]);

/* Com o componente montado */
onMounted(async () => {
  pessoas.value = await buscaInformacoes();
});

const adicionaSelecao = (evento) => {
  idsSelecao.value.push(evento);
  
};

/* Usando json para retornar informações da API fake "reqres.in" */
const buscaInformacoes = async () => {
  const req = await fetch(`https://reqres.in/api/users?page=2`);
  const json = await req.json();
  return json.data;
};

/* Foi transformada em "global" no "main.js" */
/* Criando a diretiva personalizada "local" "v-email" */
//const vEmail = {
//created(el, biding) {
//el.style.color = "blue";
/* Tendo acesso ao elemento "el" */
//console.log(el.innerText);
//el.innerHTML = `<a hef="mailto:${biding.value}">${biding.value}</a>`;
//}
//};
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
