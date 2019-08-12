<template>
  <div class="home">
    <MyHeader></MyHeader>
    <div id="demo" class="carousel" data-ride="carousel">
        <!--1.轮播图片-->
        <div class="carousel-inner">
            <div class="carousel-item">
                <img class="w-100" src="../assets/img/banner1.jpg">
            </div>
            <div class="carousel-item active">
                <img class="w-100" src="../assets/img/banner2.jpg">
            </div>
        </div>
        <!--2.轮播显示器-->
        <ul class="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" class=""></li>
            <li data-target="#demo" data-slide-to="1" class="active"></li>
        </ul>
    </div>
    <div class="container">
        <!--二级导航-->
        <div class="row mt-5" id="detail">
            <div class="col-lg-3 col-sm-6 pl-5">
                <div class="row">
                    <div class="col text-right  mt-2">
                        <h2> <a href="">买房</a> </h2>
                    </div>
                    <div class="col text-left">
                        <p> <a href="javascript:;">
                        <router-link to="/newhouse">新房</router-link>
                        </a> </p>
                        <p> <a href="">二手房</a></p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div class="row">
                    <div class="col text-right  mt-2">
                        <h2> <a href="">卖房</a> </h2>
                    </div>
                    <div class="col text-left">
                        <p> <a href="">我要卖房</a> </p>
                        <p> <a href="">查房价</a></p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div class="row">
                    <div class="col text-right mt-2">
                        <h2><a href="">租房</a></h2>
                    </div>
                    <div class="col text-left">
                        <p><a href="">找租房</a></p>
                        <p><a href="">我要出租</a></p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div class="row">
                    <div class="col text-right  mt-2">
                        <h2><a href="">商用</a></h2>
                    </div>
                    <div class="col text-left">
                        <p><a href="">商铺</a></p>
                        <p><a href="">写字楼</a></p>
                    </div>
                </div>
            </div>
        </div>
        <!--广告-->
        <div id="advertising" class="mt-5">
            <img src="../assets/img/20830694f6404552b92404d9664a0561.jpg" alt="">
            <img src="../assets/img/51722e36439f4fa9983873b7249bd58e.jpg" alt="">
        </div>
        <!--新房-->
        <div class="mt-5">
            <h2>新房优选</h2>
            <div class="row" id="newhouse">
                <div class="col-12 mb-4">
                    <p class="text-left">一座城，一个家</p>
                    <a href="./newhouse.html" class="text-right ">更多重庆新房</a>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 text-center">
                    <img src="../assets/img/1.jpg.296x216.jpg" alt="">
                    <h5 class="mt-3 mb-5">白市驿-上邦高尔夫国际社区</h5>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 text-center">
                    <img src="../assets/img/1.jpg.296x216 (1).jpg" alt="">
                    <h5 class="mt-3 mb-5">保亿御景玖园</h5>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 text-center">
                    <img src="../assets/img/1.jpg.296x216 (2).jpg" alt="">
                    <h5 class="mt-3 mb-5">中骏东原阅璟山</h5>
                </div>
            </div>
        </div>
        <!--二手精选-->
        <div class="mt-5">
            <h2>二手精选</h2>
            <div class="row" id="oldhouse">
                <div class="col-12 mb-4">
                    <p class="text-left">优质好房，为您精挑细选</p>
                    <a href="./oldhouse.html" class="text-right ">更多重庆二手房</a>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 text-center">
                    <img src="../assets/img/38.jpg.232x175.jpg" alt="">
                    <h5 class="mt-3 mb-5">金科水乡二房75万</h5>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 text-center">
                    <img src="../assets/img/38_2.jpg.232x175.jpg" alt="">
                    <h5 class="mt-3 mb-5">鸥鹏二房105万</h5>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 text-center">
                    <img src="../assets/img/38.jpg.232x175 (1).jpg" alt="">
                    <h5 class="mt-3 mb-5">宝嘉花与山三房145万</h5>
                </div>

            </div>
        </div>
        <!--小区优选-->
        <div class="mt-5">
            <h2>小区优选</h2>
            <div class="row" id="newhouse">
                <div class="col-12 mb-4">
                    <p class="text-left">喧闹的城市，心灵的港湾</p>
                    <a href="./community.html" class="text-right ">更多重庆新房</a>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 text-center">
                    <img src="../assets/img/1.jpg.232x175.jpg" alt="">
                    <h5 class="mt-3 mb-5">绿地城</h5>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 text-center">
                    <img src="../assets/img/1.jpg.232x175 (1).jpg" alt="">
                    <h5 class="mt-3 mb-5">蓝光.御江台</h5>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 text-center">
                    <img src="../assets/img/1.jpg.232x175 (2).jpg" alt="">
                    <h5 class="mt-3 mb-5">融创春晖十里阅峰庭</h5>
                </div>
            </div>
        </div>
    </div>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
// @ is an alias to /src
import MyHeader from '../components/MyHeader.vue'
import MyFooter from '../components/MyFooter.vue'

export default {
  name: 'home',
  components: {
    MyHeader,
    MyFooter
  }
}
</script>
