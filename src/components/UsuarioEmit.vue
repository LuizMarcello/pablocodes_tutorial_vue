<!-- eslint-disable -->
<template>
  <div class="perfil">
    <img :src="pessoaaa.avatar" alt="Perfil" />
    <strong>{{ pessoaaa.first_name }}</strong>
    <span>{{ pessoaaa.email }}</span>
    <button class="botao" @click="enviaEmit(pessoaaa.id)">Selecionar</button>
  </div>
</template>

<script setup>
import {} from "vue";

/* "Props": de componente "pai" para "filho" */
/* As "props" são somente leitura */
/* De "ListaUsuarioEmit" para "UsuarioEmit" */
/* Aqui, usando um objeto */
defineProps({
  /* Aqui também, outro objeto, de configurações */
  pessoaaa: {
    /* O tipo da props */
    type: Object,
    /* a props é obrigatória */
    //required: true,
    /* Valores default */
    //default: () => ({
    //id: 0,
    //first_name: "",
    //last_name: "",
    //avatar: "",
    //email: "",
    //}),
  },
});

/* "Emit": de componente "filho" para o "pai" */
/* Os "emits" são somente leitura */
/* De "UsuarioEmit" para o "ListaUsuarioEmit" */
/* Aqui usando um array */
const emit = defineEmits(["selecccao"]);

const enviaEmit = (id) => {
  emit("selecccao", id);
};
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
