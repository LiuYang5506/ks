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
                    <dt class="pb-4 pt-4">
                        按地铁线
                    </dt>
                    <dd class="subway">
                        <a href="">1号线&nbsp;</a>
                        <a href="">&nbsp;2号线&nbsp;</a>
                        <a href="">&nbsp;3号线&nbsp;</a>
                        <a href="">&nbsp;4号线&nbsp;</a>
                        <a href="">&nbsp;5号线&nbsp;</a>
                        <a href="">&nbsp;6号线&nbsp;</a>
                        <a href="">&nbsp;10号线&nbsp;</a>
                        <a href="">&nbsp;国博线&nbsp;</a>
                        <a href="">&nbsp;环线&nbsp;</a>
                    </dd>
                </dl>
            </div>
            <div class="col-12 w-100 my-position row m-0 mt-4 mb-5">
                <div class="col-md-4 col-sm-12 mb-3">
                    <img src="../assets/img/1.jpg.296x216.jpg" alt="">
                </div>
                <div class="card border-0 w-100 pl-4 card-position col-md-5 col-sm-12 mb-3">
                    <a class="sontitle mb-3" href="javascript:;">
                    <router-link to="/newhouse_details">上邦高尔夫</router-link>
                    </a>
                    <h6 class="text-muted mb-3">九龙坡区&nbsp;|&nbsp;白市驿</h6>
                    <span class="mb-3">重庆九龙坡区上邦高尔夫社区</span>
                    <span class="text-muted mb-3">建面&nbsp;37-256平方米</span>
                </div>
                <div class="col-md-3 mt-5">
                    <h5>12000元/平方米</h5>
                    <span class="text-muted">总价45万/套起</span>
                </div>
            </div>
            <div class="col-12 w-100 my-position row m-0 mb-5">
                <div class="col-md-4 col-sm-12 mb-3">
                    <img src="../assets/img/1.jpg.296x216 (3).jpg" alt="">
                </div>                
                <div class="card border-0 w-100 pl-4 card-position col-md-5 col-sm-12 mb-3">
                    <a class="sontitle mb-3" href="javascript:;">
                    <router-link to="/newhouse_details">和记黄埔御峰</router-link>
                    </a>
                    <h6 class="text-muted mb-3">南岸区&nbsp;|&nbsp;海棠溪</h6>
                    <span class="mb-3">重庆南岸区御泰路201号</span>
                    <span class="text-muted mb-3">建面&nbsp;151-153平方米</span>
                </div>
                <div class="col-md-3 mt-5">
                    <h5>15500元/平方米</h5>
                    <span class="text-muted">总价234万/套起</span>
                </div>
            </div>
            <div class="col-12 w-100 my-position row m-0 mb-5">
                <div class="col-md-4 col-sm-12 mb-3">
                    <img src="../assets/img/1.jpg.296x216 (1).jpg" alt="">
                </div> 
                <div class="card border-0 w-100 pl-4 card-position col-md-5 col-sm-12 mb-3">
                    <a class="sontitle mb-3" href="javascript:;">
                    <router-link to="/newhouse_details">保亿御景玖园</router-link>
                    </a>
                    <h6 class="text-muted mb-3">北碚区&nbsp;|&nbsp;蔡家</h6>
                    <span class="mb-3">重庆北碚蔡家金兴大道</span>
                    <span class="text-muted mb-3">建面&nbsp;83-134平方米</span>
                </div>
                <div class="col-md-3 mt-5">
                    <h5>15500元/平方米</h5>
                    <span class="text-muted">总价129万/套起</span>
                </div>
            </div>
            <div class="col-12 w-100 my-position row m-0 mb-5">
                <div class="col-md-4 col-sm-12 mb-3">
                    <img src="../assets/img/1.jpg.296x216 (2).jpg" alt="">
                </div> 
                <div class="card border-0 w-100 pl-4 card-position col-md-5 col-sm-12 mb-3">
                    <a class="sontitle mb-3" href="javascript:;">
                    <router-link to="/newhouse_details"> 中骏东原阅璟山</router-link>
                    </a>
                    <h6 class="text-muted mb-3">九龙坡区&nbsp;|&nbsp;华岩新城</h6>
                    <span class="mb-3">重庆九龙坡区龙门阵大道阅璟山</span>
                    <span class="text-muted mb-3">建面&nbsp;73-98平方米</span>
                </div>
                <div class="col-md-3 mt-5">
                    <h5>14000元/平方米</h5>
                    <span class="text-muted">总价102万/套起</span>
                </div>
            </div>
            <div class="col-12 w-100 my-position row m-0 mb-5">
                <div class="col-md-4 col-sm-12 mb-3">
                    <img src="../assets/img/1.jpg.296x216 (4).jpg" alt="">
                </div> 
                <div class="card border-0 w-100 pl-4 card-position col-md-5 col-sm-12 mb-3">
                    <a class="sontitle mb-3" href="javascript:;">
                    <router-link to="/newhouse_details"> 远洋山水赋</router-link>
                    </a>
                    <h6 class="text-muted mb-3">沙坪坝区&nbsp;|&nbsp;西永</h6>
                    <span class="mb-3">远洋山水赋售楼中心</span>
                    <span class="text-muted mb-3">套内&nbsp;105平方米</span>
                </div>
                <div class="col-md-3 mt-5">
                    <h5>15000元/平方米</h5>
                    <span class="text-muted">总价157万/套起</span>
                </div>
            </div>
            <div class="col-12 w-100 my-position row m-0 mb-5">
                <div class="col-md-4 col-sm-12 mb-3">
                    <img src="../assets/img/1.jpg.296x216 (5).jpg" alt="">
                </div> 
                <div class="card border-0 w-100 pl-4 card-position col-md-5 col-sm-12 mb-3">
                    <a class="sontitle mb-3" href="javascript:;">
                    <router-link to="/newhouse_details">阳光城翡丽公园</router-link>
                    </a>
                    <h6 class="text-muted mb-3">沙坪坝区&nbsp;|&nbsp;双碑</h6>
                    <span class="mb-3">重庆市沙坪坝区远祖桥翡丽公园</span>
                    <span class="text-muted mb-3">套内&nbsp;69-95平方米</span>
                </div>
                <div class="col-md-3 mt-5">
                    <h5>14000元/平方米</h5>
                    <span class="text-muted">总价97万/套起</span>
                </div>
            </div>
            <div class="col-12 w-100 my-position row m-0 mb-5">
                <div class="col-md-4 col-sm-12 mb-3">
                    <img src="../assets/img/1.jpg.296x216 (6).jpg" alt="">
                </div> 
                <div class="card border-0 w-100 pl-4 card-position col-md-5 col-sm-12 mb-3">
                    <a class="sontitle mb-3" href="javascript:;">
                    <router-link to="/newhouse_details">东海印</router-link>
                    </a>
                    <h6 class="text-muted mb-3">九龙坡区&nbsp;|&nbsp;华岩新城</h6>
                    <span class="mb-3">重庆市九龙坡区龙门阵大道</span>
                    <span class="text-muted mb-3">套内&nbsp;69-110平方米</span>
                </div>
                <div class="col-md-3 mt-5">
                    <h5>13000元/平方米</h5>
                    <span class="text-muted">总价89万/套起</span>
                </div>
            </div>
            <div class="col-12 w-100 my-position row m-0 mb-5">
                <div class="col-md-4 col-sm-12 mb-3">
                    <img src="../assets/img/1.jpg.296x216 (7).jpg" alt="">
                </div> 
                <div class="card border-0 w-100 pl-4 card-position col-md-5 col-sm-12 mb-3">
                    <a class="sontitle mb-3" href="javascript:;">
                    <router-link to="/newhouse_details">兴茂盛世国际</router-link>
                    </a>
                    <h6 class="text-muted mb-3">九龙坡区&nbsp;|&nbsp;二郎</h6>
                    <span class="mb-3">重庆市九龙坡区科城路135号</span>
                    <span class="text-muted mb-3">套内&nbsp;34-35平方米</span>
                </div>
                <div class="col-md-3 mt-5">
                    <h5>11000元/平方米</h5>
                    <span class="text-muted">总价37万/套起</span>
                </div>
            </div>
            <div class="col-12 w-100 my-position row m-0 mb-5">
                <div class="col-md-4 col-sm-12 mb-3">
                    <img src="../assets/img/1.jpg.296x216 (8).jpg" alt="">
                </div> 
                <div class="card border-0 w-100 pl-4 card-position col-md-5 col-sm-12 mb-3">
                    <a class="sontitle mb-3" href="javascript:;">
                    <router-link to="/newhouse_details">金科黛山悦府</router-link>
                    </a>
                    <h6 class="text-muted mb-3">璧山区&nbsp;|&nbsp;璧山街道</h6>
                    <span class="mb-3">金科黛山悦府销售中心</span>
                    <span class="text-muted mb-3">套内&nbsp;95-124平方米</span>
                </div>
                <div class="col-md-3 mt-5">
                    <h5>9000元/平方米</h5>
                    <span class="text-muted">总价85万/套起</span>
                </div>
            </div>
            <div class="col-12 w-100 my-position row m-0 mb-5">
                <div class="col-md-4 col-sm-12 mb-3">
                    <img src="../assets/img/1.jpg.296x216 (9).jpg" alt="">
                </div> 
                <div class="card border-0 w-100 pl-4 card-position col-md-5 col-sm-12 mb-3">
                    <a class="sontitle mb-3" href="javascript:;">
                    <router-link to="/newhouse_details">西海岸</router-link>
                    </a>
                    <h6 class="text-muted mb-3">九龙坡区&nbsp;|&nbsp;西彭</h6>
                    <span class="mb-3">重庆市.九龙坡区.新城东路</span>
                    <span class="text-muted mb-3">建面&nbsp;105-179平方米</span>
                </div>
                <div class="col-md-3 mt-5">
                    <h5>5500元/平方米</h5>
                    <span class="text-muted">总价57万/套起</span>
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

import MyHeader from '../components/MyHeader.vue'
import MyFooter from '../components/MyFooter.vue'

export default {
    data(){
        return{
            houseList:[]
        }
    },
    created(){
        this.axios.get('newhouse').then(res=>{
            this.houseList=res.data;
            console.log(this.houseList);
        }).catch(err=>{
            console.log(err);
        })
    },
    methods:{

    },
    components:{
        MyHeader,
        MyFooter
    }
}
</script>
<style scope>
        .container{
            max-width:1200px;
            margin:0 auto;
        }
        .btn-primary {
            width: 80px;
            height: 46px;
            background: #00A8FF url(../assets/img/alist.png) no-repeat 22px 7px;
            margin-left: -5px;
        }
        
        .sontitle>a {
            font-size: 20px;
            font-weight: 900;
            color: #333;
        }
        .sontitle:hover {
            text-decoration: none;
        }
        .sontitle>a:hover {
            color: #d00000;
            text-decoration: none;
        }
        /*.my-position {
            position: relative;
        }*/
        
        .card-position {
            /** position: absolute;
            top: -50px;
            left: 310px;*/
            float: left;
        }
        
        .my-position img {
            width: 288px;
            height: 216px;
            transition: transform 1s;
        }
        
        .my-position img:hover {
            transform: scale(1.1);
        }
        
        .my-position div h5 {
            color: #d00000;
        }
         .area a{
           color:#333;
       }
       .area a:hover{
           color:#d00000;
           text-decoration:none;
       }
    </style>