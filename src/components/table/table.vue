<template>
  <div>
    <Table stripe border :columns="columns" highlight-row :data="goodsList"></Table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // dataCount: 0,
      // columns: [
      //     {
      //         title: 'Name',
      //         key: 'name',
      //         render: (h, params) => {
      //             return h('div', [
      //                 h('Icon', {
      //                     props: {
      //                         type: 'person'
      //                     }
      //                 }),
      //                 h('strong', params.row.name)
      //             ]);
      //         }
      //     },
      //     {
      //         title: 'Age',
      //         key: 'age'
      //     },
      //     {
      //         title: 'Address',
      //         key: 'address'
      //     },
      //     {
      //         title: 'Action',
      //         key: 'action',
      //         width: 150,
      //         align: 'center',
      //         render: (h, params) => {
      //             return h('div', [
      //                 h('Button', {
      //                     props: {
      //                         type: 'primary',
      //                         size: 'small'
      //                     },
      //                     style: {
      //                         marginRight: '5px'
      //                     },
      //                     on: {
      //                         click: () => {
      //                             this.show(params.index)
      //                         }
      //                     }
      //                 }, 'View'),
      //                 h('Button', {
      //                     props: {
      //                         type: 'error',
      //                         size: 'small'
      //                     },
      //                     on: {
      //                         click: () => {
      //                             this.remove(params.index)
      //                         }
      //                     }
      //                 }, 'Delete')
      //             ]);
      //         }
      //     }
      // ],
    };
  },
  methods: {
    // show (index) {
    //     this.$Modal.info({
    //         title: 'User Info',
    //         content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
    //     })
    // },
    // remove (index) {
    //     this.data6.splice(index, 1);
    // }
  },
  props: ["columns", "goodsList"],
  created() {
    console.log(this.goodsList);
  }
};
</script>
