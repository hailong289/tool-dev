<script setup>
</script>

<template>
  <div class="sidebar-left">
    <nav class="menu">
        <RouterLink to="/" class="item" active-class="active">JSON format</RouterLink>
        <RouterLink to="/diff"  class="item" active-class="active">Diff code</RouterLink>
    </nav>
  </div>
  <div class="content-right">
<!--     <MonacoVue />-->
     <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.sidebar-left {
  width: 200px;
  background: #836FFF;
  padding: 20px 10px;
  .menu {
     width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    .item {
      width: calc(100% - 20px);
      height: 40px;
      line-height: 40px;
      border-radius: 10px;
      list-style: none;
      text-decoration: none;
      color: white;
      padding: 0 10px;
    }
    .active {
      background: white;
      color: black;
    }
  }
}
.content-right{
  width: calc(100% - 210px);
  height: 100vh;
  padding-right: 10px;
}
</style>
