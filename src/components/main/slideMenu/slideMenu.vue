<template>
    <div>
        <Menu :theme="theme2" width="auto" :accordion="accordion" :active-name="activeName" :open-names="openName" @on-open-change="handleOpen"  @on-select = "handleSelect">
            <div v-if="menuList.length > 0">
                <Submenu v-for="item in menuList" :name = item.name :key= item.path>
                    <template slot="title">
                    <Icon :type= item.meta.icon></Icon>
                        {{item.meta.title}}
                    </template>
                    <div v-if="item.children">
                        <Menu-item v-for="obj in item.children" :name = obj.name :key = obj.path>
                            {{obj.meta.title}}
                        </Menu-item>
                    </div>
                </Submenu>
            </div>
        </Menu>
    </div>
</template>

<script>
export default {
  data() {
    return {
      theme2: 'dark',
      accordion: true,
    };
  },
   props: ["menuList", "openName", "activeName"],
   methods:{
       handleSelect(name){
           this.$emit("on-select", name)      
       },
       handleOpen(name){
           this.$emit("on-open-change", name)      
       }
   },
   created(){
       this
       debugger
   }
};
</script>

<style>
</style>