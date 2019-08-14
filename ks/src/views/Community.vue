<template>
    <div>
        <MyHeader />
        <div class="p-4 mt-4 row container">
            <div class="w-100">
                <button class="btn mb-3">楼盘</button>
                <br>
                <input class="w-50 p-2" type="text" placeholder="请输入区域、商圈或者楼盘名称">
                <button class="btn btn-primary p-2 pl-4 mb-1"></button>
            </div>
            <div class="w-100 mt-5 mb-5">
                <dl class="area">
                    <h5 class="mb-4"><b>选择位置</b></h5>
                    <dt class="pb-4">
                        按区域
                    </dt>
                    <dd class="">
                        <a href="">渝中区&nbsp;</a>
                        <a href="">&nbsp;沙坪坝区&nbsp;</a>
                        <a href="">&nbsp;江北区&nbsp;</a>
                        <a href="">&nbsp;南岸区&nbsp;</a>
                        <a href="">&nbsp;九龙坡区&nbsp;</a>
                        <a href="">&nbsp;大渡口区&nbsp;</a>
                        <a href="">&nbsp;渝北区&nbsp;</a>
                        <a href="">&nbsp;巴南区&nbsp;</a>
                        <a href="">&nbsp;北碚区&nbsp;</a>
                        <a href="">&nbsp;江津区&nbsp;</a>
                        <a href="">&nbsp;璧山区&nbsp;</a>
                    </dd>
                </dl>
            </div>
            <div class="row w-100">
                <div class="col-12 border-bottom">
                    <h5>重庆所有在售二手房小区</h5>
                </div>
                <div class="col-12 w-100 my-position row m-0 mt-4 mb-3 pb-3 border-bottom">
                    <div class="col-md-4 col-sm-12 mb-4 pl-4">
                        <img src="../assets/img/1.jpg.232x175.jpg" alt="">
                    </div>
                    <div class="border-0 w-100 card-position pl-5 col-md-5 col-sm-12 mb-3 text-left ">
                        <a class="sontitle" href="javascript:;">
                        <router-link to="/community_details">绿地城</router-link>
                        </a>
                        <h6 class="text-muted mb-3 mt-3">有三个户型&nbsp;|&nbsp;43套正在出售</h6>
                        <span class="text-muted">大渡口区&nbsp;钓鱼嘴半岛</span>

                        <p class="text-muted mt-3">30天成交量19套</p>
                    </div>
                    <div class="col-md-3 mt-5 pl-5">
                        <h5>11542元m<sup>2</sup></h5>
                    </div>
                </div>
                
            </div>
            <div>
                <ul class="pagination">
                    <li class="page-item disabled mr-1"><a class="page-link" href="#">上一页</a></li>
                    <li class="page-item mx-1 active  mx-1"><a class="page-link" href="#">1</a></li>
                    <li class="page-item mx-1"><a class="page-link" href="#">2</a></li>
                    <li class="page-item mx-1"><a class="page-link" href="#">3</a></li>
                    <li class="page-item mx-1"><a class="page-link" href="#">4</a></li>
                    <li class="page-item mx-1"><a class="page-link" href="#">5</a></li>
                    <li class="page-item ml-1"><a class="page-link" href="#">下一页</a></li>
                </ul>
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
    .my-position img {
            width: 232px;
            height: 174px;
        }
    .my-position h5{
        color: #d00000;
    }
</style>