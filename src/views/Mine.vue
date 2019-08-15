<template>
    <div class="mine">
        <img src="http://img.netbian.com/file/2019/0808/1097550856777bf536d359b7566fb9b5.jpg" alt="">
         <ul>
            <li v-for="item in minearry" class="mineitem" @click="itemclick(item)" :key="item.label">
                <span class="minetitle">{{item.label}}</span>
                <i class="cubeic-arrow"></i>
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    data(){
        return{
             minearry:[
                {label:'商品收藏'},
                {label:'我的足迹'},
                {label:'店铺收藏'},
                {label:'我的订单'},
                {label:'退出',type:'exit'},
            ]
        }
    },
    methods:{
        itemclick(item){
            if(item.type=='exit'){
                this.$store.commit('settoken','');
                localStorage.removeItem('mytoken');
                this.$router.replace({path:'/Login'})
            }
        }
    }
}
</script>

<style scoped>
    .mine img{
        width: 100%;
        height: 150px;
    }
    .mineitem{
         font-size : 14px;
        text-align: left ;
        height : 50px;
        line-height :50px;
        padding-left: 5%;
        border-bottom :1px solid #eee
    }
       
        .minetitle{
             display: inline-block;
            width: 90%;
        }
           
</style>
