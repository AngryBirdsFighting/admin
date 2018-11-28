<template>
    <Form ref="formInline" :model="formInline" :rules="ruleInline">
        <FormItem prop="user">
            <Input type="text" v-model="formInline.userName" placeholder="Username">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="Password">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
        </FormItem>
    </Form>
</template>
<script>
import User from "../../api/user.js"
import { mapMutations } from "vuex"
import { getRoutePermission, extendRoutes } from "../../util/menu.js"
import AllRoutesData from "../../router/fullRouter"
let user = new User()
    export default {
        data () {
            return {
                formInline: {
                    userName: '',
                    password: ''
                },
                ruleInline: {
                    userName: [
                        { required: true, message: '用户名不能为空', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '密码不能为空', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度最少6位', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {     
            ...mapMutations([ 
            'setAccess','setPermission', "setUserName"
            ]), 
            handleSubmit(name) {
                let vm = this
                this.$refs[name].validate((valid) => {
                   user.login(this.formInline,(res, err) => {
                       if(!err){
                           user.getUserInfo({ID:res.ID},(res, err) => {
                               debugger
                               let menu = getRoutePermission(res.data)
                               debugger
                               let menuData = extendRoutes(menu, AllRoutesData)   
                               console.log(vm.$router)   
                               debugger
                               console.log(menuData)                  
                           })
                       }
                   })
                })
            },

        }
    }
</script>