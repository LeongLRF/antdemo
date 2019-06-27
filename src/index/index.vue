<template>
  <div class="index">
    <a-layout>
     <a-layout-header style="background-color:#fff;">
       <mynavbar></mynavbar>
     </a-layout-header>
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer>
        <myfooter></myfooter>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
import mynavbar from '@/components/mynavbar'
import myfooter from '@/components/myfooter'
export default {
  name: 'index',
  components: {
    mynavbar,
    myfooter
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
