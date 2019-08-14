<template>
    <header>
        <div class="row m-0">
            <div class="col-md-8  text-center clearfix p-0">
                <a href=""><img src="../assets/img/logo.jpg" class="float-left"></a>
                <ul class="list-unstyled">
                    <li class="float-left p-3">
                        <a href="javascript:;">
                            <router-link to="/">首页</router-link>
                        </a>
                    </li>
                    <li class="float-left p-3">
                        <a href="javascript:;">
                            <router-link to="/newhouse">新房</router-link>
                        </a>
                    </li>
                    <li class="float-left p-3">
                        <a href="javascript:;">
                            <router-link to="/oldhouse">二手房</router-link>
                        </a>
                    </li>
                    <li class="float-left p-3">
                        <a href="javascript:;">
                            <router-link to="/community">小区</router-link>
                        </a>
                    </li>
                    <li class="float-left p-3">
                        <a href="javascript:;">
                            <router-link to="/rent">租房</router-link>
                        </a>
                    </li>
                    <li class="float-left p-3">
                        <a href="javascript:;">
                            <router-link to="/rental">发布</router-link>
                        </a>
                    </li>
                </ul>
                
            </div>
            <div class="col-md-4 col-sm-12 ">
                <ul class="list-unstyled mr-5">
                    <li class="float-right p-3">
                        <a href="javascript:;">
                            <router-link to="/login">登录</router-link>
                        </a>
                    </li>
                    <li class="float-right p-3">
                        <a href="javascript:;">
                            <router-link to="/registe">注册</router-link>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    
}
</script>
<style scope>
   
    @media screen and (max-width: 806px) and (min-width: 550px){
        header>.row>.col-md-8{
           width: 100%;
           margin: 0 auto;
       }
       header>.row>.col-md-4{
           width: 100%;
           margin: 0 auto;
       }
    }
    @media screen and (max-width: 549px){
       header>.row>.col-md-8>ul{
           display: none;
       }
       header>.row>.col-md-4{
           position:absolute;
           width: 100%;
           margin: 0 auto;
       }
    }
</style>