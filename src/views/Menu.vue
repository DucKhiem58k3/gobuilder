<template>
  <div>
    <div class="template__navigation-name">Danh mục</div>
    <hr />
    <ul class="template__navigation-list">
      Tất cả các danh mục
      <a-menu
        style="width: 250px"
        :default-selected-keys="['1']"
        :open-keys.sync="openKeys"
        mode="inline"
        @click="handleClick"
      >
        <a-sub-menu key="sub1" @titleClick="titleClick">
          <span slot="title" class="template__navigation-item"
            ><span> Thương mại điện tử </span></span
          >
          <a-menu-item-group key="g1">
            <template slot="title"> </template>
            <a-menu-item key="1" class="template__navigation-item-detail">
              Cửa hàng trực tuyến
            </a-menu-item>
            <a-menu-item class="template__navigation-item-detail" key="2">
              Của hàng mỹ phẩm
            </a-menu-item>
            <a-menu-item class="template__navigation-item-detail" key="3">
              Của hàng nước hoa
            </a-menu-item>
          </a-menu-item-group>
        </a-sub-menu>
        <a-sub-menu key="sub2" @titleClick="titleClick">
          <span slot="title" class="template__navigation-item"
            ><span> Cửa hàng trực tuyến </span></span
          >
          <a-menu-item-group key="g2">
            <template slot="title"> </template>
            <a-menu-item class="template__navigation-item-detail" key="4">
              Cửa hàng trực tuyến
            </a-menu-item>
            <a-menu-item class="template__navigation-item-detail" key="5">
              Của hàng mỹ phẩm
            </a-menu-item>
            <a-menu-item class="template__navigation-item-detail" key="6">
              Của hàng nước hoa
            </a-menu-item>
          </a-menu-item-group>
        </a-sub-menu>
        <a-sub-menu key="sub3" @titleClick="titleClick">
          <span slot="title" class="template__navigation-item"
            ><span> Nhiếp ảnh </span></span
          >
          <a-menu-item-group key="g3">
            <template slot="title"> </template>
            <a-menu-item class="template__navigation-item-detail" key="7">
              Cửa hàng trực tuyến
            </a-menu-item>
            <a-menu-item class="template__navigation-item-detail" key="8">
              Của hàng mỹ phẩm
            </a-menu-item>
            <a-menu-item class="template__navigation-item-detail" key="9">
              Của hàng nước hoa
            </a-menu-item>
          </a-menu-item-group>
        </a-sub-menu>
        <a-sub-menu key="sub4" @titleClick="titleClick">
          <span slot="title" class="template__navigation-item"
            ><span> Âm nhạc </span></span
          >
          <a-menu-item-group key="g4">
            <template slot="title"> </template>
            <a-menu-item class="template__navigation-item-detail" key="10">
              Cửa hàng trực tuyến
            </a-menu-item>
            <a-menu-item class="template__navigation-item-detail" key="11">
              Của hàng mỹ phẩm
            </a-menu-item>
            <a-menu-item class="template__navigation-item-detail" key="12">
              Của hàng nước hoa
            </a-menu-item>
          </a-menu-item-group>
        </a-sub-menu>
        <a-sub-menu key="sub5" @titleClick="titleClick">
          <span slot="title" class="template__navigation-item"
            ><span> Nhà thiết kế </span></span
          >
          <a-menu-item-group key="g5">
            <template slot="title"> </template>
            <a-menu-item class="template__navigation-item-detail" key="13">
              Cửa hàng trực tuyến
            </a-menu-item>
            <a-menu-item class="template__navigation-item-detail" key="14">
              Của hàng mỹ phẩm
            </a-menu-item>
            <a-menu-item class="template__navigation-item-detail" key="15">
              Của hàng nước hoa
            </a-menu-item>
          </a-menu-item-group>
        </a-sub-menu>
        <a-sub-menu key="sub6" @titleClick="titleClick">
          <span slot="title" class="template__navigation-item"
            ><span> Nhà hàng & Thực phẩm </span></span
          >
          <a-menu-item-group key="g6">
            <template slot="title"> </template>
            <a-menu-item class="template__navigation-item-detail" key="16">
              Cửa hàng trực tuyến
            </a-menu-item>
            <a-menu-item class="template__navigation-item-detail" key="17">
              Của hàng mỹ phẩm
            </a-menu-item>
            <a-menu-item class="template__navigation-item-detail" key="18">
              Của hàng nước hoa
            </a-menu-item>
          </a-menu-item-group>
        </a-sub-menu>
        <a-sub-menu key="sub7" @titleClick="titleClick">
          <span slot="title" class="template__navigation-item"
            ><span> Chỗ ở </span></span
          >
          <a-menu-item-group key="g7">
            <template slot="title"> </template>
            <a-menu-item class="template__navigation-item-detail" key="19">
              Cửa hàng trực tuyến
            </a-menu-item>
            <a-menu-item class="template__navigation-item-detail" key="20">
              Của hàng mỹ phẩm
            </a-menu-item>
            <a-menu-item class="template__navigation-item-detail" key="21">
              Của hàng nước hoa
            </a-menu-item>
          </a-menu-item-group>
        </a-sub-menu>

        <a-sub-menu key="sub8" @titleClick="titleClick">
          <span slot="title" class="template__navigation-item"
            ><span> Sự kiện </span></span
          >
          <a-menu-item-group key="g8">
            <template slot="title"> </template>
            <a-menu-item class="template__navigation-item-detail" key="22">
              Cửa hàng trực tuyến
            </a-menu-item>
            <a-menu-item class="template__navigation-item-detail" key="23">
              Của hàng mỹ phẩm
            </a-menu-item>
            <a-menu-item class="template__navigation-item-detail" key="24">
              Của hàng nước hoa
            </a-menu-item>
          </a-menu-item-group>
        </a-sub-menu>
        <a-sub-menu key="sub9" @titleClick="titleClick">
          <span slot="title" class="template__navigation-item"
            ><span> Blog</span></span
          >
          <a-menu-item-group key="g9">
            <template slot="title"> </template>
            <a-menu-item class="template__navigation-item-detail" key="25">
              Cửa hàng trực tuyến
            </a-menu-item>
            <a-menu-item class="template__navigation-item-detail" key="26">
              Của hàng mỹ phẩm
            </a-menu-item>
            <a-menu-item class="template__navigation-item-detail" key="27">
              Của hàng nước hoa
            </a-menu-item>
          </a-menu-item-group>
        </a-sub-menu>
        <a-sub-menu key="sub10" @titleClick="titleClick">
          <span slot="title" class="template__navigation-item"
            ><span> Làm đẹp & Sức khỏe </span></span
          >
          <a-menu-item-group key="g10">
            <template slot="title"> </template>
            <a-menu-item class="template__navigation-item-detail" key="28">
              Cửa hàng trực tuyến
            </a-menu-item>
            <a-menu-item class="template__navigation-item-detail" key="29">
              Của hàng mỹ phẩm
            </a-menu-item>
            <a-menu-item class="template__navigation-item-detail" key="30">
              Của hàng nước hoa
            </a-menu-item>
          </a-menu-item-group>
        </a-sub-menu>
      </a-menu>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: ["mail"],
      openKeys: ["sub1"],
    };
  },
  watch: {
    openKeys(val) {
      console.log("openKeys", val);
    },
  },
  methods: {
    handleClick(e) {
      console.log("click", e);
    },
    titleClick(e) {
      console.log("titleClick", e);
    },
  },
};
</script>
<style scoped>
.template__navigation-name {
  font-family: "SVN-Gotham-Light";
  font-size: 13px;
  line-height: 17px;
  text-transform: uppercase;
  color: #8493a8;
  margin-left: 30px;
}
hr {
  margin-right: 30px;
  margin-left: 30px;
  border-top: 1px solid #8493a8;
  background: inherit;
  margin-top: 14px;
  margin-bottom: 11px;
}
.template__navigation-item {
  font-family: "SVN-Gotham-Light";
  font-size: 14px;
  line-height: 19px;
  color: #54657e;
}

.template__navigation-list {
  margin-left: 30px;
  font-family: "SVN-Gotham-Light";
  font-size: 14px;
  line-height: 19px;
  color: #54657e;
}
.template__navigation-item-detail {
  position: relative;
}
.template__navigation-item-detail::before {
  display: block;
  content: "";
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background: #eb6641;
  position: absolute;
  top: 45%;
  left: 35px;
}
</style>