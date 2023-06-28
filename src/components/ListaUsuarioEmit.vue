<template>
  <div class="selecionados">
    <span v-for="pm in pessoasSelecionadas" :key="pm.id" class="card">{{
      pm.first_name
    }}</span>
  </div>
  <!-- <div v-if="carregando">
    <h3>Carregando...</h3>
  </div> -->
  <!-- <div class="pessoas" v-else> -->
  <div class="pessoas">
    <div v-for="pessoooa in pessoas" :key="pessoooa.id" v-if="!error">
      <button class="botao" @click="redirecionaFuncionario(pessoooa.id)">
        Ver funcionário
      </button>
      <UsuarioEmit
        v-bind:pessoaaa="pessoooa"
        :seleeecao="idSelecionado(pessoooa.id)"
        @selecccao="adicionaSelecao"
      ></UsuarioEmit>
    </div>
    <div v-else>
      {{ error }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watchEffect } from "vue";
import UsuarioEmit from "./UsuarioEmit.vue";
/* Tem a ver com rotas(rotear) */
import { useRouter } from "vue-router";

/* Inicializando */
const router = useRouter();

/* Para enviar dados deste componente pai para os filhos */
import { provide } from "vue";

const pessoas = ref([]);
const idsSelecao = ref([]);
const pessoasSelecionadas = ref([]);
const aviso = "Em caso de dúvidas, contate o suporte";

/* Criando aqui um "provide" */
provide("aviso", aviso);

const adicionaSelecao = (evento) => {
  if (idSelecionado(evento)) {
    idsSelecao.value = idsSelecao.value.filter((x) => x !== evento);
    return;
  }
  idsSelecao.value.push(evento);
};

watchEffect(() => {
  /* "pessoasSelecionadas" vai recebendo os "ids",
      selecionados. */
  pessoasSelecionadas.value = pessoas.value.filter((x) =>
    /* "idsSelecao" contém todos os "ids" já selecionados */
    /* "includes" verifica se já contém o novo "id" selecionado. */
    idSelecionado(x.id)
  );
});

/* Retorna "true" ou "false", se o id já foi
   selecionado, ou não. */
const idSelecionado = (id) => {
  return idsSelecao.value.includes(id);
};

const redirecionaFuncionario = (id) => {
  router.push(`/equipe/${id}`);
};

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
/* Seletor deep: */
:deep(.aviso) {
  color: red;
}
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
.selecionados {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}
.selecionados > span {
  background: #6fd6d6;
  padding: 5px;
  font-size: 0.785rem;
  border-radius: 5px;
}
</style>
