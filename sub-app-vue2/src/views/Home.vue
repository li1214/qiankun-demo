<template>
  <div class="home">
    <HelloWorld :msg="msessge" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data(){
    return {
      msessge: 'This is a Vue2 Project!',
    }
  }
};
</script>
