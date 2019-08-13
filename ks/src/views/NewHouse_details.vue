<template >
    <div>
        <MyHeader />
        <div class="container">
            <ul class="breadcrumb pr-0">
                <li class="breadcrumb-item"><a href="">科尚重庆站</a></li>
                <li class="breadcrumb-item"><a href="">重庆新房</a></li>
                <li class="breadcrumb-item"><a href="">重庆楼盘</a></li>
                <li class="breadcrumb-item"><a href="">九龙坡区楼盘</a></li>
                <li class="breadcrumb-item"><a href="">上邦高尔夫社区</a></li>
            </ul>
            <div class="w-100 detail">
                <div>
                    <img src="../assets/img/93.jpg">
                    <div class="top">  
                        <table></table>
                        <span class="p-2">在售</span>
                        <h4 class="pl-3 mt-5">上邦高尔夫国际社区</h4>
                        <p class="pl-3">均价<span>12000元/m<sup>2</sup></span></p>
                    </div>
                    <div class="bottom pl-3 pt-3 pb-2">
                        <p>品牌地产</p> 
                        <h6 class="pt-2 pb-2">物业类型：洋房、别墅</h6>
                        <h6 class="pt-2 pb-2">项目地址：重庆市九龙坡区</h6>
                        <h6 class="pt-2 pb-2">开盘时间：2019-07-01</h6>
                        <div class="w-100 row p-2">
                            <div class="col-3">
                                <img src="../assets/img/30314.jpg.56x74.jpg">
                            </div>
                            <div class="col-9 pl-4">
                                <h6>
                                    刘兴兵
                                </h6>
                                <p>
                                    15923038331
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-12 border-bottom">
                    <h4>户型介绍</h4>
                </div>
                <div class="col-12 row pt-3 pb-3 border-bottom">
                    <div class="col-4">
                        <img class="hx1" src="../assets/img/1.jpg" alt="">
                    </div>
                    <div class="col-4 details">
                        <h5>一室一厅&nbsp;建面&nbsp;38m<sup>2</sup></h5>
                        <p>总价<b>33-34</b>万/套</p>
                        <p>建面单价<b>8684</b>元m<sup>2</sup></p>
                    </div>
                    <div class="col-4">
                        <button class="btn btn-danger">查看</button>
                    </div>
                </div>
                <div class="col-12 row pt-3 pb-3 border-bottom">
                    <div class="col-4">
                        <img class="hx1" src="../assets/img/2.jpg" alt="">
                    </div>
                    <div class="col-4 details">
                        <h5>一室一厅&nbsp;建面&nbsp;48m<sup>2</sup></h5>
                        <p>总价<b>42-43</b>万/套</p>
                        <p>建面单价<b>8750</b>元m<sup>2</sup></p>
                    </div>
                    <div class="col-4">
                        <button class="btn btn-danger">查看</button>
                    </div>
                </div>
                <div class="col-12 row pt-3 pb-3 border-bottom">
                    <div class="col-4">
                        <img class="hx1" src="../assets/img/3.jpg" alt="">
                    </div>
                    <div class="col-4 details">
                        <h5>一室一厅&nbsp;建面&nbsp;47m<sup>2</sup></h5>
                        <p>总价<b>44-45</b>万/套</p>
                        <p>建面单价<b>9361</b>元m<sup>2</sup></p>
                    </div>
                    <div class="col-4">
                        <button class="btn btn-danger">查看</button>
                    </div>
                </div>
                <div class="col-12 row pt-3 pb-3 border-bottom">
                    <div class="col-4">
                        <img class="hx1" src="../assets/img/4.jpg" alt="">
                    </div>
                    <div class="col-4 details">
                        <h5>一室一厅&nbsp;建面&nbsp;37.69m<sup>2</sup></h5>
                        <p>总价<b>34-37</b>万/套</p>
                        <p>建面单价<b>9020</b>元m<sup>2</sup></p>
                    </div>
                    <div class="col-4">
                        <button class="btn btn-danger">查看</button>
                    </div>
                </div>
                <div class="col-12 row pt-3 pb-3 border-bottom">
                    <div class="col-4">
                        <img class="hx1" src="../assets/img/9.jpg" alt="">
                    </div>
                    <div class="col-4 details">
                        <h5>一室一厅&nbsp;建面&nbsp;53.6m<sup>2</sup></h5>
                        <p>总价<b>53-56</b>万/套</p>
                        <p>建面单价<b>9888</b>元m<sup>2</sup></p>
                    </div>
                    <div class="col-4">
                        <button class="btn btn-danger">查看</button>
                    </div>
                </div>
            </div>
        </div>
        <MyFooter />
    </div>
</template>
<script>
    import MyHeader from '../components/MyHeader.vue'
    import MyFooter from '../components/MyFooter.vue'

    export default {
        data(){
            return{

            }
        },
        components:{
            MyHeader,
            MyFooter
        }
    }
</script>
<style>
    
    

    .breadcrumb{
        background:#fff;
        
    }
    .breadcrumb-item>a{
        color:#333;
    }
    .breadcrumb-item>a:hover{
        color:#d00000;
        text-decoration:none;
    }
    .breadcrumb-item + .breadcrumb-item::before{
            content: '>';
    }
    .detail>div{
        position:relative;
    }
    .detail>div>img{
        height:110%;
    }
    .detail>div>.top{
        position:absolute;
        top:0px;
        left:0px;
        width:30%;
        background: #303030;
        color: #fff;
    }
    .detail>div>.top>h4{
        font-size:100%;
    }
    .detail>div>div>span{
        position:absolute;
        left:20px;
        margin-top:5px;
        background:#666;
        border-radius:3px;
    }
    .detail>div>div>p>span{
        font-size:100%;
        color:#d00000;
    }
    .detail>div>.bottom{
        width:30%;
        background: #8e968d;
        position: absolute;
        top:115px;
        left:0px;
    }
    .bottom>.row>div>p{
        color: #d00000;
    }

    .hx1{
        width: 160px;
        height: 130px;
    }
    .details b{
        color: #d00000;
    }
    .details+div{
        line-height: 130px;
        text-align: center;
    }



    @media screen and (max-width: 991px) and (min-width: 768px){
        .detail>div>.top,.detail>div>.bottom{
            width: 40%;
        }
    }

    @media screen and (max-width: 767px) and (min-width: 550px){
        .detail>div>.top,.detail>div>.bottom{
            width: 45%;
        }
    }
    @media screen and (max-width: 549px){
        .detail>div>.top,.detail>div>.bottom{
            width: 55%;
        }
    }
</style>