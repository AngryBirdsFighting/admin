<template>
  <div class="menu-collapsed">
    <template v-for="(item, index) in menuList">
        <Dropdown 
          v-if="item.children && item.children.length > 1" 
          :key= "index"
          ref="dropdown"
          class="dropdown"
          @on-click="handleClick"
          :transfer="hideTitle"
          :placement="placement"
        >
          <a
            class="drop-menu-a"
            type="text"
          >
            <Icon :size="rootIconSize" :color="textColor" :type="item.meta.icon"></Icon>
          </a>
          <DropdownMenu ref="dropdownmenu" slot="list">
            <template v-for="child in item.children">
              <DropdownItem  :key="`drop-${child.name}`" :name="child.name">
                <span class="menu-title">{{ child.name }}</span>
              </DropdownItem>
            </template>
          </DropdownMenu>
        </Dropdown>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rootIconSize: 30,
      hideTitle: true,
      placement: 'right-start',
      textColor: "#ffffff"
    };
  },
  components: {},
  props: ["menuList"],
  methods: {
    handleClick(name) {
        debugger
      this.$emit("on-select", name);
    },
     showChildren (item) {
      return item.children && (item.children.length > 1 || (item.meta && item.meta.showAlways))
    },
    //  handleMousemove(event, children) {
    //   const { pageY } = event;
    //   const height = children.length * 38;
    //   const isOverflow = pageY + height < window.innerHeight;
    //   this.placement = isOverflow ? "right-start" : "right-end";
    // }
  },
  created(){
      this.menuList
  }
};
</script>

<style>
.dropdown{
    margin-top: 15px;
    width: 100%;
    text-align: center
}
</style>
