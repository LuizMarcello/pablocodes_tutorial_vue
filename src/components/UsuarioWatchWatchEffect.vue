<template>
  <form class="formulario">
    <label for="codigoUsuario">Código Usuário</label><br />
    <input
      type="text"
      id="codigoUsuario"
      name="codigoUsuario"
      v-model="codigoUsuario"
    />
  </form>
  <div class="perfil">
    <img v-bind:src="pessoa.avatar" alt="Perfil" />
    <strong>{{ nomeCompleto }}</strong>
    <span>{{ pessoa.email }}</span>
  </div>
</template>

<script setup>
import {
  ref,
  reactive,
  /* Componente montado */
  onMounted,
  computed,
  watch,
  watchEffect,
} from "vue";

const pessoa = ref({});
const codigoUsuario = ref(0);

/* Componente montado */
onMounted(async () => {
  pessoa.value = await buscaInformacoes(1);
});

/* Propriedade computada */
const nomeCompleto = computed(
  () => `${pessoa.value.first_name} ${pessoa.value.last_name}`
);

/* Usando json para retornar informações da API fake "reqres.in" */
const buscaInformacoes = async (codigo) => {
  const req = await fetch(`https://reqres.in/api/users/${codigo}`);
  const json = await req.json();
  return json.data;
};

/* "watch" é mais indicada para observar algo(uma propriedade)
    mais específica, sempre que ela mudar. */
/* Função de callback que recebe dois argumentos:
   Vai ouvir a propriedade "codigoUsuario" */
   watch(codigoUsuario, (novo, antigo) => {
  //watch([codigoUsuario, pessoa], ([novo, antigo], [pessoaNovo, pessoaAntigo]) => {
  //console.log(novo, antigo);
  if (novo <= 0) {
    alert("Código inválido");
    //codigoUsuario.value = 0;
  }
});

/* Função que recebe uma função de retôrno(callback) como argumento,
   que é executada imediatamente, sempre que uma de suas dependências
   é alterada. Ele é executado também automaticamente quando o componente
   inicia(Ele nem precisa do "OnMounted()"). Ele é mais indicado para quando
   um conjunto de proprieades podem mudar em conjunto, como em objeto inteiro,
   em vez de apenas uma propriedade. */
watchEffect(async () => {
  pessoa.value = await buscaInformacoes(codigoUsuario.value || 5);
});


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
button:disabled,
button[disabled] {
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
  cursor: default;
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
