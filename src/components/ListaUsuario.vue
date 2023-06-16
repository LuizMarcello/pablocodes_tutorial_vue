<template>
  <div class="pessoas">
    <div class="perfil" v-for="pessoa in pessoas" :key="pessoa.id">
      <h3 style="color: red" v-if="pessoa.first_name === 'George'">Gerente</h3>
      <h3 style="color: green" v-else-if="pessoa.first_name === 'Rachel'">
        Supervisora
      </h3>
      <h3 style="color: blue" v-else>Operacional</h3>
      <img v-bind:src="pessoa.avatar" alt="Perfil" />
      <strong>{{ pessoa.first_name }}</strong>
      <span style="font-size: 10px" v-email="pessoa.email"></span>
    </div>
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

const pessoas = ref([]);

/* Com o componente montado */
onMounted(async () => {
  pessoas.value = await buscaInformacoes();
});

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
</style>
