<template>
    <div>
        <Menu :theme="theme2" width="auto" :accordion="accordion">
            <div v-if="menuList.length > 0">
                <Submenu v-for="item in menuList" :name = item.path :key= item.path>
                    <template slot="title">
                    <Icon :type= item.meta.icon></Icon>
                        {{item.name}}
                    </template>
                    <div v-if="item.children">
                        <Menu-item v-for="obj in item.children" :name = obj.path :key = obj.path>{{obj.name}}

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
      accordion: true
    };
  },
   props: ["menuList"]
};
</script>

<style>
</style>