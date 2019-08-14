<template>
    <div>
        <MyHeader />
        <div class="mt-5 container  clearfix">
            <a class="pr-3 ml-3" href=""><h5><b>我有房出售</b></h5></a>
            <a href=""><h5><b>我有房出租</b></h5></a>
            <div class="card mt-5 float-left w-100">
                <div class="text-center" >
                    <h2>发布出售房源</h2>
                    <p>科尚扎根本土，更懂重庆更懂您</p>
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
   
</style>