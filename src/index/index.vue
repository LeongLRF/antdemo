<template>
  <div class="index">
    <a-layout>
     <a-layout-header style="background-color:#fff;">
       <mynavbar></mynavbar>
     </a-layout-header>
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
import mynavbar from '@/components/mynavbar'
export default {
  name: 'index',
  components: {
    mynavbar
  },
  data () {
    return {
      collapsed: false
    }
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
