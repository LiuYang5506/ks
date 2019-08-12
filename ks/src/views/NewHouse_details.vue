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
                    <div></div>
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
    .detail>div>.top{
        position:absolute;
        top:0px;
        left:0px;
        width:30%;
        background: #303030;
            color: #fff;
    }
    .detail>div>div>span{
        position:absolute;
        left:20px;
        margin-top:5px;
        background:#666;
        border-radius:3px;
    }
    .detail>div>div>p>span{
        font-size:25px;
        color:#d00000;
    }
</style>