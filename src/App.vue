<script setup>
import HelloWorld from './components/HelloWorld.vue'
import MonacoVue from './components/Monaco.vue';
</script>

<template>
  <div class="menu">
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <div class="content-right">
     <MonacoVue />
  </div>
</template>

<style scoped>
.menu {
  width: 200px;
}
.content-right{
  width: calc(100% - 200px);
  height: 100vh;
}
</style>
