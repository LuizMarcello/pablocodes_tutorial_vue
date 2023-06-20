<template>
  <div class="perfil">
    <img :src="pessoaaa.avatar" alt="Perfil" />
    <strong>{{ pessoaaa.first_name }}</strong>
    <span>{{ pessoaaa.email }}</span>
  </div>
</template>

<script setup>
import {} from "vue";

/* "Props": de componente "pai" para "filho" */
/* As "props" são somente leitura */
/* De "ListaUsuarioProps" para "UsuarioProps" */
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
