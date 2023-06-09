/* import './assets/main.css' */

import {
  createApp
} from "vue";
import App from "./App.vue";
import NavBar from "./components/NavBar.vue";


/* Armazenando o "createApp" dentro de uma variável  */
const app = createApp(App);
/* Adicionando este componente de forma global */
app.component("NavBar", NavBar);

/* Tornando a diretiva personalizada "v-email", usada 
   no ListaUsuario.vue, em diretiva "global". */
app.directive("email", {
  created(el, biding) {
    el.innerHTML = `<a hef="mailto:${biding.value}">${biding.value}</a>`
  },
});

app.mount("#app");

//createApp(App).mount('#app')