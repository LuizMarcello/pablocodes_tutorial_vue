<template>
  <UseFullscreen v-slot="{ toggle }">
    {{ tipoTela }}
    <div>
      <h2 class="titulo">{{ nome }}</h2>
      <!-- A diretiva "v-html" renderiza uma string como um objeto html. -->
      <!-- <span v-html="subtitulo"></span> -->
      <!-- <span v-text="subtitulo"></span> -->
    </div>
    <button @click="toggleDark()">Mudar tema</button>
    <button @click="toggle()">Full Screen</button>
    {{ isDark }}
  </UseFullscreen>
</template>

<script setup>
/* Usando a biblioteca "Vueuse" já instalada */
import { useDark, useToggle, useFullscreen, useMediaQuery } from "@vueuse/core";
import { UseFullscreen } from "@vueuse/components";
import { computed } from "@vue/reactivity";
/* Parâmetro: Objeto com atributos da biblioteca "vueuse"(ctrl+espaço) */
const isDark = useDark({
  selector: "body",
  attribute: "color-scheme",
  valueDark: "dark",
  valueLight: "light"
});
const toggleDark = useToggle(isDark);

const { isFullscreen, enter, exit, toggle } = useFullscreen();

/* Se a tela for min-width: 1024px */
const isLargeScreen = useMediaQuery("(min-width: 1024px)");

/* Propriedade computada */
/* Se a tela for min-width: 1024px */
const tipoTela = computed(() => (isLargeScreen.value ? "Desktop" : "Mobile"));

const nome = "Pablo Codes";
/* A diretiva "v-html" renderiza uma string como
   um objeto html. */
//const subtitulo = `<p style="color:silver">Tutoriais Vue, .NET</p>`;
</script>

<style scoped>
.titulo {
  margin: 0 auto;
  text-align: center;
  color: red;
}
</style>
