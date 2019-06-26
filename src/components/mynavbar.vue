<template>
  <div class="mynavbar">
    <div class="header">
      <div class="header-inner text-center">
        <div class="logo">logo</div>
        <div class="my-menu">
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Shop</a></li>
            <li><a href="">Clothes</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
        <div class="search">
          <input type="text" class="search_input">
          <img src="../assets/images/magnifying-glass.svg" style="position: absolute;
    top: 24%; right: 40%" alt="">
        </div>
        <div class="my-toolbar">
          <ul>
            <li><a href=""><a-icon type="shopping" /></a></li>
            <li><a href=""><a-icon type="star" /></a></li>
            <li><a href=""><a-icon type="user" /></a></li>
            <li><a href=""><a-icon type="bars" /></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mynavbar',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 120px;
    background: #FFFFFF;
    z-index: 100;
    padding-left: 60px;
    padding-right: 64px;
    -webkit-transition: all 200ms ease;
    -moz-transition: all 200ms ease;
    -ms-transition: all 200ms ease;
    -o-transition: all 200ms ease;
    transition: all 200ms ease;
  }
  .header-inner > div{
    display: inline-block;
    margin-right: 50px;
  }
  .header-inner > div > ul > li {
    display: inline-block;
    margin-right: 20px;
  }
  .my-menu ul li a {
    font-size: 16px;
    text-transform: uppercase;
    color: #2f2f2f;
    font-weight: 600;
    letter-spacing: 0.2em;
    -webkit-transition: all 200ms ease;
    -moz-transition: all 200ms ease;
    -ms-transition: all 200ms ease;
    -o-transition: all 200ms ease;
    transition: all 200ms ease;
  }
  .logo{
    font-size: 30px;
    font-weight: bold;
  }
  .my-toolbar{
    font-size: 25px;
  }
  .search_input {
    width: 100%;
    height: 43px;
    background: #f9f5f5;
    border: none;
    outline: none;
    padding-left: 20px;
  }
  .search_button {
    position: absolute;
    top: 45%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    right: 10px;
    width: 19px;
    height: 19px;
    background: transparent;
    border: none;
    outline: none;
  }
</style>
