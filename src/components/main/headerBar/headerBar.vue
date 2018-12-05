<template>
  <div>
    <Button type="text">
      <Icon type="md-menu" @click="toggle" color="black" size="20"></Icon>
    </Button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods:{
    toggle(){
       this.$emit("on-toggle")      
    }
  }
};
</script>

<style>
</style>
