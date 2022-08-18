<template>
  <div class="template">
    <HeaderDetail />
    <div class="template__path">
      <h3>Trang chủ>Template</h3>
    </div>
    <div class="template__body">
      <div class="template__navigation">
        <div class="template__navigation-name">Danh mục</div>
        <hr />
        <ul class="template__navigation-list">
          <span class="template__navigation-list-name"
            >Tất cả các danh mục</span
          >
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
              <a-menu-item-group
                class="template__navigation-item-group"
                key="g1"
              >
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
              <a-menu-item-group
                class="template__navigation-item-group"
                key="g2"
              >
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
              <a-menu-item-group
                class="template__navigation-item-group"
                key="g3"
              >
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
              <a-menu-item-group
                class="template__navigation-item-group"
                key="g4"
              >
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
              <a-menu-item-group
                class="template__navigation-item-group"
                key="g5"
              >
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
              <a-menu-item-group
                class="template__navigation-item-group"
                key="g6"
              >
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
              <a-menu-item-group
                class="template__navigation-item-group"
                key="g7"
              >
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
              <a-menu-item-group
                class="template__navigation-item-group"
                key="g8"
              >
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
              <a-menu-item-group
                class="template__navigation-item-group"
                key="g9"
              >
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
              <a-menu-item-group
                class="template__navigation-item-group"
                key="g10"
              >
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
      <div class="template__content">
        <div class="template__search-bar">
          <input
            type="text"
            placeholder="Nhập page cần tìm kiếm...."
            class="template__search-bar-input"
          />
          <button class="template__search-button">
            <img
              src="../assets/icon/Search.svg"
              alt=""
              class="template__search-button-icon"
            />Tìm kiếm
          </button>
        </div>
        <div class="template__block-list">
          <div class="template__block-list-top">
            <div id="item1" class="template__block-list-item">
              <div class="template__block-list-item-img"></div>
              <div class="template__block-list-item-title">
                Page Design Company profi...
              </div>
              <div class="template__block-list-item-function">
                <button class="template__block-list-item-button-edit">
                  Chỉnh sửa
                </button>
                <button class="template__block-list-item-button-preview">
                  Preview
                </button>
              </div>
            </div>
            <div id="item2" class="template__block-list-item">
              <div class="template__block-list-item-img"></div>
              <div class="template__block-list-item-title">
                Page Design Company profi...
              </div>
              <div class="template__block-list-item-function">
                <button class="template__block-list-item-button-edit">
                  Chỉnh sửa
                </button>
                <button class="template__block-list-item-button-preview">
                  Preview
                </button>
              </div>
            </div>
            <div id="item3" class="template__block-list-item">
              <div class="template__block-list-item-img"></div>
              <div class="template__block-list-item-title">
                Page Design Company profi...
              </div>
              <div class="template__block-list-item-function">
                <button class="template__block-list-item-button-edit">
                  Chỉnh sửa
                </button>
                <button class="template__block-list-item-button-preview">
                  Preview
                </button>
              </div>
            </div>
          </div>
          <div class="template__block-list-bottom">
            <div id="item4" class="template__block-list-item">
              <div class="template__block-list-item-img"></div>
              <div class="template__block-list-item-title">
                Page Design Company profi...
              </div>
              <div class="template__block-list-item-function">
                <button class="template__block-list-item-button-edit">
                  Chỉnh sửa
                </button>
                <button class="template__block-list-item-button-preview">
                  Preview
                </button>
              </div>
            </div>
            <div id="item5" class="template__block-list-item">
              <div class="template__block-list-item-img"></div>
              <div class="template__block-list-item-title">
                Page Design Company profi...
              </div>
              <div class="template__block-list-item-function">
                <button class="template__block-list-item-button-edit">
                  Chỉnh sửa
                </button>
                <button class="template__block-list-item-button-preview">
                  Preview
                </button>
              </div>
            </div>
            <div id="item6" class="template__block-list-item">
              <div class="template__block-list-item-img"></div>
              <div class="template__block-list-item-title">
                Page Design Company profi...
              </div>
              <div class="template__block-list-item-function">
                <button class="template__block-list-item-button-edit">
                  Chỉnh sửa
                </button>
                <button class="template__block-list-item-button-preview">
                  Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderDetail from "../components/HeaderDetail.vue";
import Footer from "../components/Footer.vue";
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
  components: [HeaderDetail, Footer],
  components: { HeaderDetail, Footer },
};
</script>
<style scoped>
.template {
  width: 1440px;
  height: max-content;
  margin: 0 auto;
  background: #f7f8fa;
}
.template__path {
  margin-left: 135px;
  font-family: "SVN-Gotham-Light";
  font-size: 13px;
  line-height: 23px;
  color: #8493a8;
}
.template__body {
  display: flex;
  margin-top: 27px;
}
.template__navigation {
  background: #ffffff;
  margin-left: 135px;
  border-radius: 10px;
  width: 250px;
}
/* .template__navigation-name {
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
.template__navigation-list {
  margin-left: 30px;
  font-family: "SVN-Gotham-Light";
  font-size: 14px;
  line-height: 19px;
  color: #54657e;
}
.template__navigation-item {
  display: flex;
}
.template__navigation-item-name {
  font-family: "SVN-Gotham-Light";
  font-size: 14px;
  line-height: 19px;
  color: #54657e;
}
.template__navigation-item-detail {
  display: none;
  font-family: "SVN-Gotham-Light";
  font-size: 14px;
  line-height: 19px;
  color: #54657e;
}
.template__navigation-item-detail::before {
  display: block;
  content: "";
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background: #EB6641;
} */
.template__navigation-name {
  font-family: "SVN-Gotham-Light";
  font-size: 13px;
  line-height: 17px;
  text-transform: uppercase;
  color: #8493a8;
  margin-left: 30px;
  margin-top: 20px;
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
  margin-left: 5px;
}

.template__navigation-list {
  font-family: "SVN-Gotham-Light";
  font-size: 14px;
  line-height: 19px;
  color: #54657e;
}
.template__navigation-list-name {
  margin-left: 30px;
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
  left: 30px;
}
.template__content {
  width: 1190px;
}
.template__search-bar {
  width: 630px;
  height: 50px;
  border-radius: 25px;
  margin-left: 150px;
  background: #ffffff;
  position: relative;
  border: 1px solid #cad3df;
}
.template__search-bar-input {
  border: none;
  height: 48px;
  width: 475px;
  border-radius: 25px;
  outline: none;
}
.template__search-bar-input:focus{
  border: none;

}
input[type="text"] {
  padding-left: 30px;
}
.template__search-button {
  height: 50px;
  width: 155px;
  border-radius: 25px;
  border: none;
  position: absolute;
  top: -1px;
  background: #eb6641;
  color: #ffffff;
  text-transform: uppercase;
}
.template__search-button-icon {
  padding-right: 15px;
}
.template__block-list {
  margin-top: 40px;
  margin-left: 50px;
  margin-right: 135px;
}
.template__block-list-top {
  display: flex;
  justify-content: space-between;
}
.template__block-list-bottom {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
}
.template__block-list-item {
  width: 270px;
  height: 316px;
  background-image: url(../assets/img/background-template-item.png);
  border-radius: 15px;
}
.template__block-list-item-img {
  width: 270px;
  height: 241px;
}
.template__block-list-item-title {
  height: 40px;
  background: #ffffff;
  font-family: "SVN-Gotham-Light";
  font-size: 14px;
  line-height: 19px;
  color: #374355;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.template__block-list-item-function {
  height: 35px;
  background: #ffffff;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}
.template__block-list-item-button-edit {
  width: 50%;
  height: 35px;
  background: #ffffff;
  border: none;
  border-bottom-left-radius: 15px;
  color: #eb6641;
  font-family: "SVN-Gotham-Light";
  font-size: 13px;
  line-height: 17px;
  text-align: center;
  border-right: 1px solid #ebedf3;
}
.template__block-list-item-button-preview {
  width: 50%;
  height: 35px;
  background: #ffffff;
  border: none;
  border-bottom-right-radius: 15px;
  font-family: "SVN-Gotham-Light";
  font-size: 13px;
  line-height: 17px;
  text-align: center;
  color: #8493a8;
}

#item2 {
  background-image: url(../assets/img/background-template-item-2.png);
}

#item3 {
  background-image: url(../assets/img/background-template-item-3.png);
}

#item4 {
  background-image: url(../assets/img/background-template-item-4.png);
}

#item5 {
  background-image: url(../assets/img/background-template-item-5.png);
}

#item6 {
  background-image: url(../assets/img/background-template-item-6.png);
}
</style>
<style>
.ant-menu-item-group-title {
  display: none;
}
</style>