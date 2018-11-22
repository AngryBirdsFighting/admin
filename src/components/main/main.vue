
<template>
    <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
        <Row type="flex">
            <i-col :span="spanLeft" class="layout-menu-left">
               <slide-menu :menuList = menuList></slide-menu>
            </i-col>
            <i-col :span="spanRight">
                <div class="layout-header">
                     <Button type="text" @click="toggleClick">
                        <Icon type="md-menu" color="black" size="12"></Icon>
                    </Button>
                    <header-bar></header-bar>
                   
                </div>
                <div class="layout-breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb-item href="#">首页</Breadcrumb-item>
                        <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
                        <Breadcrumb-item>某应用</Breadcrumb-item>
                    </Breadcrumb>
                </div>
                <div class="layout-content">
                    <div class="layout-content-main">内容区域</div>
                </div>
                <div class="layout-copy">
                    2011-2016 &copy; TalkingData
                </div>
            </i-col>
        </Row>
    </div>
</template>
<script>
import slideMenu from "./slideMenu/slideMenu.vue";
import headerBar from "./headerBar/headerBar.vue";
import { Fetch } from "../../fetch/";

let fetch = new Fetch()
import {mapGetters} from "vuex";
    export default {
        data () {
            return {
                spanLeft: 3,
                spanRight: 19              
            }
        },
        components:{
            "slide-menu": slideMenu,
            "header-bar": headerBar
        },
        computed: {
            iconSize () {
                return this.spanLeft === 3 ? 14 : 24;
            },
            ...mapGetters(["menuList"])
        },
        created(){
            let param = {
                url: "/getData",
                // type: "Get",
                // data:{
                //     a:"111",
                //     b:"222"
                // }
            }
            fetch.request(param, (data) => {
                debugger
                console.log(data)
            })
        },
        methods: {
            toggleClick () {
                if (this.spanLeft === 3) {
                    this.spanLeft = 1;
                    this.spanRight = 19;
                } else {
                    this.spanLeft = 3;
                    this.spanRight = 19;
                }
            }
        }
        
    }
</script>



<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-menu-left{
        background: #464c5b;
    }
    .layout-header{
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .layout-ceiling-main a{
        color: #9ba7b5;
    }
    .layout-hide-text .layout-text{
        display: none;
    }
    .ivu-col{
        transition: width .2s ease-in-out;
    }
</style>