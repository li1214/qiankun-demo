import { createApp } from 'vue';
import App from './App.vue';
import subApps from './micro-app';
import {registerMicroApps,start} from 'qiankun';

createApp(App).mount('#app')

registerMicroApps(subApps,{
  beforeLoad: (app)=>{
    console.log('before load app.name====>>>>>', app.name)
  },
  beforeMount: app => {
    console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
  },
  afterMount: app => {
    console.log('[LifeCycle] after mount %c%s', 'color: green;', app.name);
  },
  afterUnmount: app => {
    console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
  }
})

start()