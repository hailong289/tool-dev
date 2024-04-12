<script setup>
import MonacoVue from './Monaco.vue';
</script>

<template>
<div class="menu">
    <ul>
      <li><a href="">JSON parse</a></li>
      <li><a href="">Compare diff</a></li>
      <li><a href="">Code</a></li>
    </ul>
  </div>
  <div class="content-right">
    <h1>Compare diff</h1>
    <div class="card">
       <MonacoVue />
    </div>
  </div>
</template>


<style scoped>
.menu {
  width: 200px;
  
}
.menu ul {
  padding: 0px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.menu ul li {
  list-style: none;
  width: 100%;
}
.menu ul li a {
  text-decoration: none;
  color: white;
  padding: 0px 10px;
}
.content-right{
  width: calc(100% - 200px);
  height: 80vh;
}
.card {
  width: 100%;
  max-width: 100%;
  margin: auto;
  border-width: 1px;
  border-color: rgba(219, 234, 254, 1);
  border-radius: 1rem;
  background-color: rgba(255, 255, 255, 1);
  padding: 1rem;
  height: 95%;
  padding: 20px 0px;
}
</style>