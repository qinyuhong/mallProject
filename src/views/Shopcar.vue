<template>
    <div>
        <div class="goods" v-for="(item,index) in cartarr" :key="index">
            {{item.title}}
            <div class="goodsright">
                <i class="cubeic-remove" @click="removeCar(index)"></i>
                <span>{{item.cartCount}}</span>
                <i class="cubeic-add" @click="addCar(index)"></i>
            </div>            
        </div>
        <cube-button style="margin:10px 0;">下单</cube-button>
        <cube-button @click="clearCar">清空购物车</cube-button>
    </div>
</template>


<script>
import {mapState} from 'vuex'
export default {
    data(){
        return{
           
        }
    },
    methods:{
       
        //增加商品
        addCar(index){
            this.$store.commit('addCar',index)
        },
          //减少商品
        removeCar(index){
         this.$store.commit('removeCar',index)
        }, 
        // 清空购物车
        clearCar(){
             this.$store.commit('clearCar')
        }
    },
    computed:{
        ...mapState({
            // 调用vuex中的state中的数据并赋值
            cartarr:state=>state.cartarr
        })
    }
}
</script>

<style scoped>
     .goods{
           padding: 10px;
        text-align: left ;
     }
      
        .goodsright{
            float:right;
        }
            
        .goodsright i {
             font-size:18px;
        }
           
</style>
