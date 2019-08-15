<template  slot-scope="scope">
    <div>
        <transition :name="transitionName">
            <router-view class="Router"></router-view>
        </transition>
        <cube-tab-bar
            v-model="selectedLabelDefault"
            :data="tabs"
            @click="clickHandler"
            @change="changeHandler" class="botnav">
        </cube-tab-bar>
        <span class="countsum">{{countsum}}</span>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      
        transitionName:'slide-right',
      selectedLabelDefault: '首页',
      tabs: [{
        label: '首页',
        icon: 'cubeic-home'
      }, {
        label: '分类',
        icon: 'cubeic-tag'
      }, {
        label: '购物车',
        icon: 'cubeic-mall'
      }, {
        label: '我的',
        icon: 'cubeic-person'
      }]
    }
  },
   computed:{
    ...mapGetters({
      countsum:'countsum'
    })
  },
  methods: {
    clickHandler (label) {
      // if you clicked home tab, then print 'Home'
     
    },
    changeHandler (label) {
      // if you clicked different tab, this methods can be emitted
      switch(label){
              case '首页':
              this.$router.replace({path:'/Botnav/Index'});
              break;
                case '分类':
              this.$router.replace({path:'/Botnav/Tab'});
              break;
                case '购物车':
              this.$router.replace({path:'/Botnav/Shopcar'});
              break;
                case '我的':
              this.$router.replace({path:'/Botnav/Mine'});
              break;
      }
      
    }
  },
  created(){
    switch(this.$route.path){
      case'/Botnav/Index':
      this.selectedLabelDefault='首页';
      break;
       case'/Botnav/Mine':
      this.selectedLabelDefault='我的';
      break;
       case'/Botnav/Shopcar':
      this.selectedLabelDefault='购物车';
      break;
       case'/Botnav/Tab':
      this.selectedLabelDefault='分类';
      break;
    }
  },
 
}
</script>

<style >
     .cube-tab-bar.botnav{
        position:fixed;
        bottom:0;
        left :0;
        z-index: 1000;
        width: 100%;
        background:#fff;
     }
       
        .cube-tab div{
             font-size:14px;
            padding-top:3px;
        }
           
       .cube-tab i {
            font-size:18px;
       }
        
     .Router{
         position: absolute;
         width: 100%;
         transition: all 0.8s ease;
     }
        
    .silde-left-enter,.slide-right-leave-active{
         opacity: 0;
        -webkit-transform: translate(100%,0);
        transform: translate(100%,0);
    }
       
    .slide-left-leave-active,.slide-right-enter{
        opacity: 0;
        -webkit-transform:  translate(-100%,0);
        transform:  translate(-100%,0);
    }
     .countsum{
      position: fixed;
      bottom: 33px;
      right :31%;
      z-index : 1001;
      width :18px;
      height: 18px;
      line-height: 18px;
      border-radius: 50%;
      font-size :14px;
      background: red;
      color: #fff;
     }
    
</style>