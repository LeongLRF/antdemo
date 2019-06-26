<template>
  <div class="index">
    <a-layout>
      <a-layout-sider
        :width="250" style="height: auto"
        :trigger="null"
        collapsible
        v-model="collapsed"
        :collapsedWidth = 0
      >
        <my-side></my-side>
      </a-layout-sider>
      <a-layout-content>
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
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
