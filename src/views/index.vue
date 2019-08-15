<template  slot-scope="scope">
<div>
<!-- 轮播图 -->
   <cube-slide ref="slide" :data="items" @change="changePage">
     <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
        <a :href="item.url">
            <img :src="item.image">
        </a>
     </cube-slide-item>
  </cube-slide>
  <!-- 滚动列表 -->
  <cube-slide ref="slidelists" :auto-play="false" :data="lists">
            <cube-slide-item v-for="(list, index) in lists" :key="index">
               <ul class="listul">
                   <li class="listli" v-for="(item,index1) in list" :key="index1">
                       <a :href="item.url">
                           <img :src="item.image" alt="">
                           <p>{{item.label}}</p>
                       </a>
                   </li>
               </ul>
            </cube-slide-item>
        </cube-slide>
</div>
</template>

<script>
export default {
  data() {
    return {
      items: [],  //轮播图数组
      lists:[]  //滚动列表数组
      
    }
  },
  methods: {
    changePage(current) {
    //   console.log('当前轮播图序号为:' + current)
    },
    clickHandler(item, index) {
    //   console.log(item, index)
    }
  },
async  created(){
    //  轮播图数据获取
      this.$axios.get('/api/banner')
      .then(res=>{
          this.items=res.data;
      })
      .catch(err=>{
          console.log(err);
      })
    //   滚动列表数据获取
    this.$axios.get('/api/rollinglist')
    .then(result=>{
        this.lists=result.data
    })
      .catch(err1=>{
          console.log(err1);
      })
    //  try{
    //      //获取轮播图数据
    //      const items=await this.$axios.get('/api/banner')
    //      this.items=items.data
    //      //获取滚动分类数据
    //      const lists=await this.$axios.get('/api/rollinglist')
    //      this.lists=lists.data
    //  }catch(err){
    //      console.log(err)
    //  }
  }
}
</script>

<style scoped>
    .listul{
        display: flex;
        flex-wrap: wrap
    }
    .listli{
        width: 20%;
        justify-content: center;
    }
    .listli img{
        width: 35px;
        height: 35px;
        border-radius: 50%;
        padding: 5px 0;
    }
    .listli p{
        font-size: 14px;
        padding-bottom: 10px;
    }
</style>