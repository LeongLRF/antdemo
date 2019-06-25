<template>
  <div class="index">
    <a-layout>
      <a-layout-sider :width="250" style="height: auto">
        <my-side></my-side>
      </a-layout-sider>
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
import mySide from '../components/mySider'
export default {
  name: 'index',
  components: {
    mySide
  }
}
</script>

<style scoped>
  *{
    padding: 0;
    margin: 0;
  }
  .sider{
    position: absolute;
  }
</style>
