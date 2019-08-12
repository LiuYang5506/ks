<template>
    <div>
        <MyHeader />
        <table></table>
        <div class="w-100 row p-5 bg-dark m-0 text-center flex" id="content">
            <div class="col-lg-4 col-md-6 mt-5">
                <img class="mb-5" src="../assets/img/userimg1.png" alt="">
                <p class="mb-5">二手房、新房、租房应有尽有的找房神器</p>
                <p class="mb-5">更有科尚强大的品牌支持，交易放心</p>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6 pl-5">
                <img src="../assets/img/userimg2.png" alt="">
            </div>
            <div class="col-lg-4 col-sm-6 bg-white p-4">
                <h4 class="mb-3 text-left">用户注册</h4>
                <p class="text-left login">已有账号?<a href="./login.html">去登录</a></p>
                <input class="w-100 p-2 mt-4" type="text" placeholder="请输入手机号">
                <input class="w-100 p-2" type="text" placeholder="请输入验证码">
                <input class="w-100 p-2" type="text" placeholder="请输入短信验证码">
                <input class="w-100 p-2" type="password" placeholder="请输入密码">
                <a href=""><em>获取验证码</em></a>
                <img id="code" src="../assets/img/code.gif" alt="">
                <button class="btn btn-danger btn-lg btn-block mt-4">注册</button>

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
    #content>div>p {
        color: aliceblue;
    }

    #content>div>.small {
        color: #aaa;
    }

    #code {
        position: relative;
        top: -84px;
        left: 9px;
    }

    a:hover {
        color: #007bff;
    }

    #content>div>a>em {
        position: relative;
        top: -35px;
        left: 160px;
        color: #555;
        font-size: 14px;
        border-left: 1px solid #ddd;
        padding: 0 15px;
    }

    #content>div .login {
        color: #aaa;
    }
</style>