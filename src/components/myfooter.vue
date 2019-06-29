<template>
  <div class="myfooter text-center">
    <div class="footer-logo">
      <a href="">LOGO</a>
    </div>
    <div class="footer-menu">
      <ul>
        <li><router-link exact :to="{name: 'welcome'}">Home</router-link></li>
        <li><a href="">Shop</a></li>
        <li><a href="">Clothes</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </div>
    <div class="footer-share">
      <ul>
        <li><a href=""><a-icon type="wechat" /></a></li>
        <li><a href=""><a-icon type="qq" /></a></li>
        <li><a href=""><a-icon type="weibo" /></a></li>
        <li><a href=""><a-icon type="twitter" /></a></li>
      </ul>
    </div>
    <div class="copyright text-center">
      power by Leong
    </div>
  </div>
</template>

<script>
export default {
  name: 'myfooter'
}
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -webkit-text-shadow: rgba(0,0,0,.01) 0 0 1px;
    text-shadow: rgba(0,0,0,.01) 0 0 1px;
  }
  a {
    text-decoration: none;
    color: #232323;
    font-family: 'Lucida', serif;
  }
  a:hover {
    text-decoration: none;
    color: #937c6f;
    font-family: 'Lucida', serif;
  }
  .myfooter{
    padding-top: 80px;
  }
  .footer-logo a {
    font-family: 'Lucida', serif;
    font-size: 70px;
    color: #232323;
    text-decoration: none;
  }
  .footer-menu > ul >li:hover {
    display: inline-block;
    margin-left: 40px;
    margin-right: 40px;
    margin-bottom: 50px;
    font-size: 20px;
    text-transform: uppercase;
    color: #937c6f;
    font-weight: 600;
    letter-spacing: 0.2em;
    -webkit-transition: all 200ms ease;
    -moz-transition: all 200ms ease;
    -ms-transition: all 200ms ease;
    -o-transition: all 200ms ease;
    transition: all 200ms ease;
  }
  .footer-menu > ul >li  {
    display: inline-block;
    margin-left: 40px;
    margin-right: 40px;
    margin-bottom: 50px;
    font-size: 16px;
    text-transform: uppercase;
    color: #232323;
    font-weight: 600;
    letter-spacing: 0.2em;
    -webkit-transition: all 200ms ease;
    -moz-transition: all 200ms ease;
    -ms-transition: all 200ms ease;
    -o-transition: all 200ms ease;
    transition: all 200ms ease;
  }
  .footer-share > ul >li {
    display: inline-block;
    margin-left: 40px;
    margin-right: 40px;
    margin-bottom: 30px;
    font-size: 25px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.2em;
    -webkit-transition: all 200ms ease;
    -moz-transition: all 200ms ease;
    -ms-transition: all 200ms ease;
    -o-transition: all 200ms ease;
    transition: all 200ms ease;
  }
  .footer-share a {
    font-size: 24px;
    color: #937c6f;
    -webkit-transition: all 200ms ease;
    -moz-transition: all 200ms ease;
    -ms-transition: all 200ms ease;
    -o-transition: all 200ms ease;
    transition: all 200ms ease;
  }
</style>
