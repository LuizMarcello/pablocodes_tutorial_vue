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

app.mount("#app");

//createApp(App).mount('#app')