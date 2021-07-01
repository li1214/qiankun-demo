const microApps = [
  {
    name: 'sub-app-jquery',
    entry: '//localhost:7001/',
    activeRule: '/sub-app-jquery',
    container: '#sub-app',
    props:{
      routerBase: '/sub-app-jquery',
    }
  },
  {
    name: 'sub-app-vue2',
    entry: '//localhost:7002/',
    activeRule: '/sub-app-vue2',
    container: '#sub-app',
    props:{
      routerBase: 'sub-app-vue2',
    }
  },
  {
    name: 'sub-app-vue3',
    entry: '//localhost:7003/',
    activeRule: '/sub-app-vue3',
    container: '#sub-app',
    props:{
      routerBase: 'sub-app-vue3',
    }
  }
]

export default microApps