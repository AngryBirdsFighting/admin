<template>
 <div>
    <Menu :theme="theme2" width="auto" :accordion="accordion">
        <Submenu v-if="data.length > 0" v-for="item in data" :name = item.code :key= item.code>
            <template slot="title">
                <Icon :type= item.icon></Icon>
                {{item.name}}
            </template>
            <Menu-item v-if="item.child" v-for="obj in item.child" :name = obj.code :key = obj.code>{{obj.name}}</Menu-item>
        </Submenu>
    </Menu>
 </div>
</template>

<script>
export default {
  data() {
    return {
      theme2: 'dark',
      accordion: true
    };
  },
   props: {
      data: Array,
      default:[]
    }
};
</script>

<style>
</style>