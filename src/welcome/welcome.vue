<template>
  <div>
    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
      </ol>
      <!-- Wrapper for slides -->
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <img src="../assets/images/cart_nl.jpg" alt="">
          <div class="carousel-caption">
            <div class="title">
              <h1>NEW ARRIVALS</h1>
              <h2>coming soon</h2>
            </div>
          </div>
        </div>
        <div class="item">
          <img src="../assets/images/cart_nl.jpg" alt="">
          <div class="carousel-caption">
          </div>
        </div>
      </div>
      <!-- Controls -->
      <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <div class="middle text-center">
        <h1>独立设计品牌</h1>
        <p>只为更好的你</p>
    </div>
    <div class="discount text-center">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="discount-inner">
              <img src="../assets/images/promo_1.jpg" alt="" width="100%">
              <div class="promo_link">
                <a href="">立即购买</a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="discount-inner">
              <img src="../assets/images/promo_2.jpg" alt="" width="100%">
              <div class="promo_link">
                <a href="">立即购买</a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="discount-inner">
              <img src="../assets/images/promo_3.jpg" alt="" width="100%">
              <div class="promo_link">
                <a href="">立即购买</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="our-product text-center">
      <h1>OUR PRODUCT</h1>
    </div>
    <div class="product">
      <div class="container">
        <a-carousel :autoplay="true">
          <div class="row">
            <div class="col-md-4">
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
          <div class="row">
            <div class="col-md-4">
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
          <div class="row">
            <div class="col-md-4">
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
          <div class="row">
            <div class="col-md-4">
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
        </a-carousel>
      </div>
    </div>
    <div class="container-fluid">
      <div class="service">
        <div class="container">
        <div class="row">
          <div class="col-md-3 service-option">
            <img src="../assets/images/option_2.png" alt="" style="margin-top: 15px">
              <div class="pull-right text-center" style="margin-top: 10px">
              <h3 class="option_title">7天退换</h3>
              <p class="option_subtitle">无理由</p>
            </div>
          </div>
          <div class="col-md-3 service-option">
            <img src="../assets/images/option_2.png" alt="" style="margin-top: 15px">
            <div class="pull-right text-center" style="margin-top: 10px">
              <h3 class="option_title">7天退换</h3>
              <p class="option_subtitle">无理由</p>
            </div>
          </div>
          <div class="col-md-3 service-option">
            <img src="../assets/images/option_2.png" alt="" style="margin-top: 15px">
            <div class="pull-right text-center" style="margin-top: 10px">
              <h3 class="option_title">7天退换</h3>
              <p class="option_subtitle">无理由</p>
            </div>
          </div>
          <div class="col-md-3 service-option">
            <img src="../assets/images/option_2.png" alt="" style="margin-top: 15px">
            <div class="pull-right text-center" style="margin-top: 10px">
              <h3 class="option_title">7天退换</h3>
              <p class="option_subtitle">无理由</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    <div class="team text-center">
      <h1>OUR TEAM</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'welcome',
  data () {
    return {
      rate: 4
    }
  }
}
</script>

<style scoped>
  .title {
    margin-bottom: 40%;
  }
  .title > h1 {
    font-size: 120px;
  }
  .middle > h1{
    font-size: 50px ;
  }
  .middle > p {
    margin-top: 10px;
    font-size: 30px;
  }
  .middle {
    margin-top: 60px;
    margin-bottom: 60px;
  }
  body {
    background-color: #fff;
  }
  .promo_link {
    width: 100%;
    height: 60px;
    background: #2f2f2f;
    text-align: center;
    -webkit-transition: all 200ms ease;
    -moz-transition: all 200ms ease;
    -ms-transition: all 200ms ease;
    -o-transition: all 200ms ease;
    transition: all 200ms ease;
  }
  .promo_link a {
    display: block;
    text-decoration: none;
    font-family: 'Lucida', serif;
    font-size: 18px;
    color: #FFFFFF;
    line-height: 60px;
    -webkit-transition: all 200ms ease;
    -moz-transition: all 200ms ease;
    -ms-transition: all 200ms ease;
    -o-transition: all 200ms ease;
    transition: all 200ms ease;
  }
  .discount-inner{
    margin-right: 20px;
    margin-left: 10px;
  }
  .ant-carousel >>> .slick-slide {
    text-align: center;
    height: auto;
    overflow: hidden;
  }
  .our-product {
    font-family: 'Lucida', serif;
    padding-top: 30px;
    padding-bottom: 20px;
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
  .option{
    padding-top: 15px;
  }
  .service{
    background-image: url(../assets/images/cart_nl.jpg);
    width: 95%;
    margin-left: 40px;
    height: 200px;
    border-radius: 5px;
  }
  .product{
    margin-bottom: 100px;
  }
  .service-option{
    background-color: #fff;
    margin-top: 50px;
    margin-right: 28px;
    margin-left: 28px;
    width: 20%;
    border-radius: 5px;
  }
  .option_title {
    font-size: 18px;
    font-weight: 600;
    color: #232323;
  }
  .option_subtitle {
    font-size: 14px;
    color: #8a8a8a;
  }
  .team h1{
    font-family: 'Lucida', serif;
    padding-top: 30px;
    padding-bottom: 20px;
  }
</style>
