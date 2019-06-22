<template>
  <div class="index">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2 sider">
          <my-side></my-side>
        </div>
        <div class="col-md-10">
          <div class="content"></div>
        </div>
      </div>
    </div>
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
