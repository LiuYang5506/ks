<template>
    <div>
        <MyHeader />
        <div class="mt-5 container  clearfix mb-5">
            <a class="pr-3 ml-3" href=""><h5><b>我有房出售</b></h5></a>
            <a href=""><h5><b>我有房出租</b></h5></a>
            <div class="card mt-5 float-left w-100 border-0">
                <div class="text-center" >
                    <h2>发布出售房源</h2>
                    <p>科尚扎根本土，更懂重庆更懂您</p>
                </div>
                <div class="text-left">
                    <h6 class="border-bottom pb-3 pt-3">所在城市：<span>重庆</span> </h6>
                    <h6 class="border-bottom pb-3 pt-3">小区名称：<input type="text" placeholder="请输入小区名称"></h6>
                    <h6 class="border-bottom pb-3 pt-3">房屋地址：<input  class="w-25" type="text" placeholder="楼栋号"><input  class="w-25" type="text" placeholder="单元号"><input  class="w-25" type="text" placeholder="门牌号"></h6>
                    <h6 class="border-bottom pb-3 pt-3">期望售价：<input type="text" placeholder="请输入您期望卖出的价格"><span class="price">万元</span></h6>
                    <h6 class="border-bottom pb-3 pt-3">您的称呼：<input type="text" placeholder="我们应该如何称呼您"></h6>
                    <h6 class="border-bottom pb-3 pt-3">手机号码：<input class="w-75" type="text" placeholder="您的联系方式，方便我们及时与您联系"></h6>
                </div>
                <div class="text-center mt-5">
                    <button class="btn btn-danger btn-lg">提交委托</button>
                </div>
            </div>
            
        </div>
        <MyFooter />
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
<style scope>
   .container>a{
       float: left;
       color: #666;
   }
   .container>a:hover{
       color: #d00000;
       text-decoration: none;
   }
   .card>div>.border-bottom{
       width: 85%;
   }
   input{
       border:0;
       outline: none;
   }
   .price{
       color: #d00000;
       font-weight: 900;
   }
   .btn-lg{
       background: #d00000;
   }
   .btn-lg:hover{
       background: #d00000;
   }
</style>