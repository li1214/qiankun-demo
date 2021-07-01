import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from 'vue-router';
import routes from "./router";
import './public.path';

let router = null;
let app = null;
let history = null;

function render(props = {}) {
  const {container} = props;

  history =  createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/sub-app-vue3' : '/');
  router = createRouter({
    history,
    routes,
  })

  app = createApp(App);
  app.use(router);
  app.mount(container ? container.querySelector('#app') : '#app');

}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[sub-app-vue3] app bootstraped');
}

export async function mount(props) {
  render(props);
  app.config.globalProperties.$onGlobalStateChange = props.onGlobalStateChange;
  app.config.globalProperties.$setGlobalState = props.setGlobalState;
}

export async function unmount() {
  app.unmount();
  app._container.innerHTML = '';
  app = null;
  router = null;
  history.destroy();
}
