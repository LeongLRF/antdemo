<template>
  <div>
    <div class="banner text-center" style="padding-top: 50px">
      <p style="color: white; font-size: 40px;font-weight: bold">New Arrivals</p>
    </div>
    <div class="container">
      <div class="tool-bar">
        <div class="row">
          <div class="col-md-6">
            <div class="sort">
              <i class="fa fa-th-large" style="font-size: 20px"></i>
            </div>
            <div class="menu">
              <i class="fa fa fa-bars" style="font-size: 20px"></i>
            </div>
          </div>
          <div class="col-md-6">
            <div class="filter pull-right">
              <a-dropdown>
                <a-menu slot="overlay" @click="handleMenuClick">
                  <a-menu-item key="1"><a-icon type="user" />1st menu item</a-menu-item>
                  <a-menu-item key="2"><a-icon type="user" />2nd menu item</a-menu-item>
                  <a-menu-item key="3"><a-icon type="user" />3rd item</a-menu-item>
                </a-menu>
                <a-button style="margin-left: 8px" class="filter-btn">
                  筛选<a-icon type="filter" /> <a-icon type="down" />
                </a-button>
              </a-dropdown>
            </div>
            <div class="filter"></div>
          </div>
        </div>
      </div>
      <div class="shop">
        <div class="row">
          <div class="col-md-4 pro-div">
            <img src="../assets/images/product_9.jpg" alt="" width="100%">
            <div class="rating">
              <a-rate v-model='rate'/>
            </div>
            <div class="product_content">
              <a-col-12>
                <div class="desc pull-left">
                  <div class="name">
                    <a href="">裤子</a>
                  </div>
                  <div class="price">40￥</div>
                </div>
              </a-col-12>
              <a-col-12>
                <div class="option pull-right">
                  <div class="buy">
                    <img src="../assets/images/shopping-bag-white.svg" alt="">
                  </div>
                  <div class="add">+</div>
                </div>
              </a-col-12>
            </div>
          </div>
          <div class="col-md-4">
            <img src="../assets/images/product_2.jpg" alt="" width="100%">
            <div class="rating">
              <a-rate v-model='rate'/>
            </div>
            <div class="product_content">
              <a-col-12>
                <div class="desc pull-left">
                  <div class="name">
                    <a href="">裤子</a>
                  </div>
                  <div class="price">40￥</div>
                </div>
              </a-col-12>
              <a-col-12>
                <div class="option pull-right">
                  <div class="buy">
                    <img src="../assets/images/shopping-bag-white.svg" alt="">
                  </div>
                  <div class="add">+</div>
                </div>
              </a-col-12>
            </div>
          </div>
          <div class="col-md-4">
            <img src="../assets/images/product_1.jpg" alt="" width="100%">
            <div class="rating">
              <a-rate v-model='rate'/>
            </div>
            <div class="product_content">
              <a-col-12>
                <div class="desc pull-left">
                  <div class="name">
                    <a href="">裤子</a>
                  </div>
                  <div class="price">40￥</div>
                </div>
              </a-col-12>
              <a-col-12>
                <div class="option pull-right">
                  <div class="buy">
                    <img src="../assets/images/shopping-bag-white.svg" alt="">
                  </div>
                  <div class="add">+</div>
                </div>
              </a-col-12>
            </div>
          </div>
          <div class="col-md-4 pro-div">
            <img src="../assets/images/product_9.jpg" alt="" width="100%">
            <div class="rating">
              <a-rate v-model='rate'/>
            </div>
            <div class="product_content">
              <a-col-12>
                <div class="desc pull-left">
                  <div class="name">
                    <a href="">裤子</a>
                  </div>
                  <div class="price">40￥</div>
                </div>
              </a-col-12>
              <a-col-12>
                <div class="option pull-right">
                  <div class="buy">
                    <img src="../assets/images/shopping-bag-white.svg" alt="">
                  </div>
                  <div class="add">+</div>
                </div>
              </a-col-12>
            </div>
          </div>
          <div class="col-md-4">
            <img src="../assets/images/product_2.jpg" alt="" width="100%">
            <div class="rating">
              <a-rate v-model='rate'/>
            </div>
            <div class="product_content">
              <a-col-12>
                <div class="desc pull-left">
                  <div class="name">
                    <a href="">裤子</a>
                  </div>
                  <div class="price">40￥</div>
                </div>
              </a-col-12>
              <a-col-12>
                <div class="option pull-right">
                  <div class="buy">
                    <img src="../assets/images/shopping-bag-white.svg" alt="">
                  </div>
                  <div class="add">+</div>
                </div>
              </a-col-12>
            </div>
          </div>
          <div class="col-md-4">
            <img src="../assets/images/product_1.jpg" alt="" width="100%">
            <div class="rating">
              <a-rate v-model='rate'/>
            </div>
            <div class="product_content">
              <a-col-12>
                <div class="desc pull-left">
                  <div class="name">
                    <a href="">裤子</a>
                  </div>
                  <div class="price">40￥</div>
                </div>
              </a-col-12>
              <a-col-12>
                <div class="option pull-right">
                  <div class="buy">
                    <img src="../assets/images/shopping-bag-white.svg" alt="">
                  </div>
                  <div class="add">+</div>
                </div>
              </a-col-12>
            </div>
          </div>
          <div class="col-md-4 pro-div">
            <img src="../assets/images/product_9.jpg" alt="" width="100%">
            <div class="rating">
              <a-rate v-model='rate'/>
            </div>
            <div class="product_content">
              <a-col-12>
                <div class="desc pull-left">
                  <div class="name">
                    <a href="">裤子</a>
                  </div>
                  <div class="price">40￥</div>
                </div>
              </a-col-12>
              <a-col-12>
                <div class="option pull-right">
                  <div class="buy">
                    <img src="../assets/images/shopping-bag-white.svg" alt="">
                  </div>
                  <div class="add">+</div>
                </div>
              </a-col-12>
            </div>
          </div>
          <div class="col-md-4">
            <img src="../assets/images/product_2.jpg" alt="" width="100%">
            <div class="rating">
              <a-rate v-model='rate'/>
            </div>
            <div class="product_content">
              <a-col-12>
                <div class="desc pull-left">
                  <div class="name">
                    <a href="">裤子</a>
                  </div>
                  <div class="price">40￥</div>
                </div>
              </a-col-12>
              <a-col-12>
                <div class="option pull-right">
                  <div class="buy">
                    <img src="../assets/images/shopping-bag-white.svg" alt="">
                  </div>
                  <div class="add">+</div>
                </div>
              </a-col-12>
            </div>
          </div>
          <div class="col-md-4">
            <img src="../assets/images/product_1.jpg" alt="" width="100%">
            <div class="rating">
              <a-rate v-model='rate'/>
            </div>
            <div class="product_content">
              <a-col-12>
                <div class="desc pull-left">
                  <div class="name">
                    <a href="">裤子</a>
                  </div>
                  <div class="price">40￥</div>
                </div>
              </a-col-12>
              <a-col-12>
                <div class="option pull-right">
                  <div class="buy">
                    <img src="../assets/images/shopping-bag-white.svg" alt="">
                  </div>
                  <div class="add">+</div>
                </div>
              </a-col-12>
            </div>
          </div>
          <div class="col-md-4 pro-div">
            <img src="../assets/images/product_9.jpg" alt="" width="100%">
            <div class="rating">
              <a-rate v-model='rate'/>
            </div>
            <div class="product_content">
              <a-col-12>
                <div class="desc pull-left">
                  <div class="name">
                    <a href="">裤子</a>
                  </div>
                  <div class="price">40￥</div>
                </div>
              </a-col-12>
              <a-col-12>
                <div class="option pull-right">
                  <div class="buy">
                    <img src="../assets/images/shopping-bag-white.svg" alt="">
                  </div>
                  <div class="add">+</div>
                </div>
              </a-col-12>
            </div>
          </div>
          <div class="col-md-4">
            <img src="../assets/images/product_2.jpg" alt="" width="100%">
            <div class="rating">
              <a-rate v-model='rate'/>
            </div>
            <div class="product_content">
              <a-col-12>
                <div class="desc pull-left">
                  <div class="name">
                    <a href="">裤子</a>
                  </div>
                  <div class="price">40￥</div>
                </div>
              </a-col-12>
              <a-col-12>
                <div class="option pull-right">
                  <div class="buy">
                    <img src="../assets/images/shopping-bag-white.svg" alt="">
                  </div>
                  <div class="add">+</div>
                </div>
              </a-col-12>
            </div>
          </div>
          <div class="col-md-4">
            <img src="../assets/images/product_1.jpg" alt="" width="100%">
            <div class="rating">
              <a-rate v-model='rate'/>
            </div>
            <div class="product_content">
              <a-col-12>
                <div class="desc pull-left">
                  <div class="name">
                    <a href="">裤子</a>
                  </div>
                  <div class="price">40￥</div>
                </div>
              </a-col-12>
              <a-col-12>
                <div class="option pull-right">
                  <div class="buy">
                    <img src="../assets/images/shopping-bag-white.svg" alt="">
                  </div>
                  <div class="add">+</div>
                </div>
              </a-col-12>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shop',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.banner{
  background-image: url('../assets/images/newsletter.jpg');
  height: 200px;
}
.sort {
  width: 41px;
  height: 41px;
  background-color: #937c6f;
  padding: 11px;
}
.tool-bar{
  margin-top: 50px;
}
.tool-bar > div > div > div {
    display: inline;
}
.menu{
  width: 41px;
  height: 41px;
  background-color: black;
  color: white;
  padding: 11px;
}
.filter-btn{
  border: black solid 1px;
  border-radius: 0;
  height: 41px;
  color: black;
  width: 100%;
}
  .shop {
    margin-top: 50px;
  }
.name a{
  font-size: 16px;
  font-weight: 600;
  color: #232323;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}
.price {
  font-size: 24px;
  font-weight: 600;
  color: #8a8a8a;
}
.buy {
  display: inline-block;
  background: #937c6f;
  width: 37px;
  height: 37px;
  padding-top: 7px;
  padding-left: 8px;
  vertical-align: middle;
  margin-right: 4px;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}
.add {
  display: inline-block;
  vertical-align: middle;
  font-size: 14px;
  font-weight: 600;
  width: 37px;
  height: 37px;
  color: #232323;
  background: #e0e3e4;
  line-height: 37px;
  text-align: center;
  -webkit-transition: all 200ms ease;
  -moz-transition: all 200ms ease;
  -ms-transition: all 200ms ease;
  -o-transition: all 200ms ease;
  transition: all 200ms ease;
}
</style>
