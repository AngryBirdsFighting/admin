<template>
  <div style="margin: 10px;overflow: hidden">
    <div style="float: right;">
      <Page
        v-if="listTotal > 0"
        :total="listTotal"
        show-total
        show-sizer
        show-elevator
        :page-size-opts="pageSizeOpts"
        :current="currentIndex"
        :page-size="pageSize"
      ></Page>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 1,
      pageSize: 10,
      pageSizeOpts: [10, 20, 30, 500]
    };
  },
  props: {
    listTotal: {
      type: Number,
      default: 0
    }
  },
  components: {}
};
</script>

<style>
</style>
