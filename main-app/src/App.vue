<template>
  <div id="main-app">
    <div class="header">
      <ul>
        <li v-for="item in microApps"
            :key="item.name"
            :class="{'active': item.activeRule === current}"
            @click="goto(item)">{{item.name}}</li>
      </ul>
    </div>
    <div id="sub-app"></div>
  </div>
</template>

<script>
import microApps from './micro-app';

export default {
  name: 'App',
  data() {
    return {
      microApps,
      current: '/sub-app-jquery/',
    }
  },
  created() {
    this.bindCurrent()
  },
  mounted() {
    this.listenRouterChange()
  },
  methods: {
    goto(item) {
      history.pushState(null,item.activeRule,item.activeRule)
    },
    bindCurrent(){
      const path = window.location.pathname
      if (this.microApps.findIndex(item => item.activeRule === path) >= 0) {
        this.current = path
      }
    },
    listenRouterChange(){
       const _wr = function (type) {
        const orig = history[type]
        return function () {
          const rv = orig.apply(this, arguments)
          const e = new Event(type)
          e.arguments = arguments
          window.dispatchEvent(e)
          return rv
        }
      }
      history.pushState = _wr('pushState')

      window.addEventListener('pushState', this.bindCurrent)
      window.addEventListener('popstate', this.bindCurrent)
    },
  },
  destroy(){
    window.removeEventListener('pushState', this.bindCurrent)
    window.removeEventListener('popstate', this.bindCurrent)
  }
}
</script>

<style>
#main-app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.header{
  text-align: center;
  font-size: 20px;
}
ul {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
li {
  list-style: none;
  margin-left: 12px;
  transition: color 0.3s;
  cursor: pointer;
}
li:hover{
  color:#f60;
}
.active{
  color:#f60;
}
</style>
