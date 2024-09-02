import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";

// If false - lets you debug without zoho SDK
const LOCAL_DEBUG = true;
const app = createApp(App);

if( LOCAL_DEBUG ){
  app.provide("pageData", {
    //Test data that would come from zoho goes here.
  });
  app.mount('#app');
} else{
  window.ZOHO.embeddedApp.on("PageLoad", function (data) {
    app.provide("pageData", data);
    app.mount("#app");
  });

  window.ZOHO.embeddedApp
    .init()
    .then(()=>{})
    .catch(console.error);
}
