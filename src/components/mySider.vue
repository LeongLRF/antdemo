<template id="side">
  <div class="sider">
    <div class="logo text-center">
      <p>LOGO</p>
    </div>
    <div class="menu">
      <ul>
        <li class="menu-item">首页&nbsp;&nbsp;<i class="fa fa-angle-right"></i></li>
        <li class="menu-item">商城&nbsp;&nbsp;<i class="fa fa-angle-right"></i></li>
        <li class="menu-item">关于我们&nbsp;&nbsp;<i class="fa fa-angle-right"></i></li>
        <li class="menu-item">联系我们&nbsp;&nbsp;<i class="fa fa-angle-right"></i></li>
      </ul>
    </div>
    <div >
      <input type="text" class="search" placeholder="search">
      <button class="search_button"><i class="fa fa-search"></i></button>
    </div>
    <div class="shop-car">
      <div class="icon" style="font-weight: bold;font-size: 25px;"><i class="glyphicon glyphicon-shopping-cart lg"></i></div>
      <div class="text text-center" style="font-weight: bold;font-size: 20px;">CAR</div>
      <div class="money text-center" style="font-weight: bold;font-size: 20px;">100￥</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'side',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.sider{
  background-color: #1a1a1a;
  width: 100%;
  height: auto;
  padding: 10px;
}
  .logo{
    border: solid 2px #bbe432;
    width: 80%;
    height: 66px;
    color: white;
    margin-left: 20px;
    margin-top: 50px;
  }
  .logo > p{
    font-size: 30px;
    font-weight: bold;
    margin-top: 10px;
  }
  .menu{
    color: white;
    margin: 50px 20px 20px 30px;
  }
  .menu > ul > li {
    list-style-type:none;
    margin-bottom:  10px;
    transition: all 500ms ease;
  }
.menu > ul > li:hover {
  list-style-type:none;
  color: #bbe432;
}
  .search{
      margin-top: 70px;
      width: 70%;
      margin-left: 30px;
      margin-bottom: 10px;
      height: 45px;
      background: transparent;
      border: none;
      outline: none;
      border-bottom: solid 1px #cacaca;
      color: #FFFFFF;
      -webkit-transition: all 200ms ease;
      -moz-transition: all 200ms ease;
      -ms-transition: all 200ms ease;
      -o-transition: all 200ms ease;
      transition: all 200ms ease;
    }
.search :hover{
  margin-top: 30px;
  width: 70%;
  margin-left: 30px;
  margin-bottom: 10px;
  height: 45px;
  background: transparent;
  border: none;
  outline: none;
  color: #FFFFFF;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
  border-bottom: solid 1px #bbe432;
}
.search_button {
  width: 26px;
  height: 45px;
  background: transparent;
  border: none;
  outline: none;
  color: #FFFFFF;
  cursor: pointer;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}
.search_button :hover{
  width: 26px;
  height: 45px;
  background: transparent;
  border: none;
  outline: none;
  color: #bbe432;
  cursor: pointer;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}
  .shop-car{
    margin-left: 20px;
    margin-top: 70px;
    margin-bottom: 220px;
    color: white;
    padding: 10px;
  }
  .shop-car > div {
    display: inline-block;
    margin-left: 10px;
  }
</style>
