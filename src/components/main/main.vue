
<template>
    <div class="layout">
        <Row type="flex">
            <i-col v-if="menuList && menuStyle" :span="spanLeft" class="layout-menu-left">
               <slide-menu  :menuList = menuList @on-open-change="menuChange" :openName="selectedArray" :activeName="selected" @on-select = "toPage"></slide-menu>
            </i-col>
            <i-col v-else-if ="menuList && !menuStyle" :span="spanLeft" class="layout-menu-left">
                <collapsed-menu :menuList = menuList   @on-select = "toPage"></collapsed-menu>
            </i-col>
            <i-col :span="spanRight">
                <div class="layout-header">             
                    <header-bar  @on-toggle="toggleClick"></header-bar>
                </div>
                <!-- <div class="layout-breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb-item href="#">首页</Breadcrumb-item>
                        <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
                        <Breadcrumb-item>某应用</Breadcrumb-item>
                    </Breadcrumb>
                </div> -->
                <div class="layout-content" :style="'height:'+ height +'px;'" >
                    <div class="layout-content-main">
                        <router-view>
                        </router-view>
                    </div>
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
import collapsedMenu from "./collapsedMenu/collapsedMenu.vue";
import headerBar from "./headerBar/headerBar.vue";

import {mapGetters} from "vuex";
    export default {
        data () {
            return {
                menuList: [],
                spanLeft: 3,
                spanRight: 21,
                menuStyle:true,
                selected: "list",
                selectedArray:["goods"]
            }
        },
        components:{
            "slide-menu": slideMenu,
            "header-bar": headerBar,
            "collapsed-menu": collapsedMenu
        },
        computed: {
            height () {
               let h =  window.innerHeight  - 171
               return h
            },
            iconSize () {
                return this.spanLeft === 3 ? 14 : 24;
            },
        },
        created(){
            this.menuList = this.$store.state.user.menuList
        },
        methods: {
            toggleClick () {
                if (this.spanLeft === 3) {
                    this.spanLeft = 1;
                    this.spanRight = 23;
                    this.menuStyle = false
                } else {
                    this.spanLeft = 3;
                    this.spanRight = 21;
                    this.menuStyle = true
                }
            },
            toPage (name){
                this.selected = name
                let params = {}
                this.$router.push({name, params})
            },
            menuChange(name){
                this.selectedArray = name
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