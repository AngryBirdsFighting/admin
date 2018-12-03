<template>
  <div>
    <i-table v-if="goodsList.length > 0" :columns="columns" :goodsList="goodsList"></i-table>
    <i-page :listTotal="total"></i-page>
  </div>
</template>

<script>
import Goods from "../../api/goods.js";
import iTable from "../../components/table/table";
import iPage from "../../components/page/page";
let goods = new Goods();
export default {
  data() {
    let vm = this;
    return {
      columns: [
        {
          title: "商品名称",
          key: "name"
        },
        {
          title: "数量",
          key: "counts"
        },
        {
          title: "单价",
          key: "prize"
        },
        {
          title: "类别",
          key: "type",
          render: (h, params) => {
            const row = params.row;
            let t = vm.goodsType.find(item => {
              if (item.value == row.type) {
                return item;
              }
            });
            return h("span", t.name);
          }
        },
        {
          title: "添加时间",
          key: "createTime"
        },
        {
          title: "添加人",
          key: "createUser"
        },
        {
          title: "操作",
          key: "action",
          // minWidth: "400px",
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.show(params.index);
                    }
                  }
                },
                "add"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.remove(params.index);
                    }
                  }
                },
                "delete"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.remove(params.index);
                    }
                  }
                },
                "edit"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.remove(params.index);
                    }
                  }
                },
                "info"
              )
            ]);
          }
        }
      ],
      goodsList: [],
      total: 0,
      goodsType: []
    };
  },
  components: {
    "i-table": iTable,
    "i-page": iPage
  },
  created() {
    let vm = this;
    goods.getDictionary("", (res, err) => {
      vm.goodsType = res.data.goods;
    });
    goods.getList((res, err) => {
      if (res.data.status == 1) {
        this.goodsList = res.data.list;
        this.total = 100;
      }
    });
  }
};
</script>

<style>
</style>
