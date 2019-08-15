<template>
    <div>
        <cube-form
            :model="model"
            :schema="schema"
            @submit="submitHandler"
        ></cube-form>
    </div>
</template>

<script>

export default {
    data(){
        return{
            model:{
                username:'',
                password:''
            },
            schema:{
                fields:[
                    {   //用户名
                        type:'input',
                        modelKey:'username',
                        label:'用户名',
                        props:{
                            placeholder:'请输入用户名'
                        },
                        //校验规则
                        rules:{
                            required: true,
                            type:'string',
                            min:3,
                            max:15
                        },
                        trigger:'blur',
                        messages:{
                            required:'用户名不能为空',
                            min:'输入字符不能少于3位',
                            max:'输入字符不能大于15位'
                        }
                    },
                    // 密码
                    {
                        type:'input',
                        modelKey:'password',
                        label:'密码',
                        props:{
                            type:'password',
                            placeholder:'请输入密码',
                            //设置一个小眼睛
                            eye:{
                                open:false
                            }
                        },
                        //校验规则
                        rules:{
                            required:true,
                        },
                        trigger:'blur',
                        
                    },
                    // 登录按钮
                    {
                        type:'submit',
                        label:'登录'
                    }
                ]
               
            }
        }
    },
    methods:{
        //登录事件
       submitHandler(e){
            e.preventDefault();
           this.$axios.get('/api/login',{params:this.model})
           .then(res=>{
               if(res.code=='1'){
                  this.$store.commit('settoken',res.token)
                  window.localStorage.setItem('mytoken',res.token)
              
                 
                // 判断全局守卫传过来的路由是否带参  带参就跳转到带参路径  不带参就跳转首页
                  if(this.$route.query.redirect){
                       this.$router.replace({path:this.$route.query.redirect})
                  }else{
                       this.$router.replace({path:'/Botnav/Index'})
                  }
               }else{
                    console.log(res.message)
               }
           })
           .catch(err=>{
               console.log(err)
           })
        }
    }
}
</script>

