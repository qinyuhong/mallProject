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
                    // 注册按钮
                    {
                        type:'submit',
                        label:'注册'
                    }
                ]
               
            }
        }
    },
    methods:{
        //注册事件
        submitHandler(e){
            e.preventDefault();
            this.$axios.get('/api/register',{params:this.model})
            .then(res=>{
                console.log(res.message);
            })
            .catch(err=>{
                console.log(err);
            })
        }
    }
}
</script>

