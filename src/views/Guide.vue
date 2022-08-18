<template>
  <div class="guide">
    <HeaderDetail />
    <div class="guide__path">
      <h3>Trang chủ>Hướng dẫn</h3>
    </div>
    <div class="guide__content">
      <div class="guide__navigation">
        <a-menu
          style="width: 250px"
          :default-selected-keys="['1']"
          :open-keys.sync="openKeys"
          mode="inline"
          @click="handleClick"
        >
          <a-sub-menu key="sub1" @titleClick="titleClick">
            <span slot="title" class="guide__navigation-item"
              ><span> Tài khoản và mật khẩu </span></span
            >
            <a-menu-item-group class="guide__navigation-item-group" key="g1">
              <template slot="title"> </template>
              <a-menu-item key="1" class="guide__navigation-item-detail">
                Tạo tài khoản GoBuilder
              </a-menu-item>
              <a-menu-item class="guide__navigation-item-detail" key="2">
                Đăng nhập với facebook
              </a-menu-item>
              <a-menu-item class="guide__navigation-item-detail" key="3">
                Đăng nhập với youtube
              </a-menu-item>
              <a-menu-item class="guide__navigation-item-detail" key="4">
                Thay đổi mật khẩu
              </a-menu-item>
            </a-menu-item-group>
          </a-sub-menu>
          <a-sub-menu key="sub2" @titleClick="titleClick">
            <span slot="title" class="guide__navigation-item"
              ><span> Tạo page </span></span
            >
            <a-menu-item-group class="guide__navigation-item-group" key="g2">
              <template slot="title"> </template>
              <a-menu-item class="guide__navigation-item-detail" key="5">
                Livestream nhiều page
              </a-menu-item>
              <a-menu-item class="guide__navigation-item-detail" key="6">
                Live lặp
              </a-menu-item>
              <a-menu-item class="guide__navigation-item-detail" key="7">
                Live từ video có sẵn
              </a-menu-item>
              <a-menu-item class="guide__navigation-item-detail" key="8">
                Live trực tuyến
              </a-menu-item>
            </a-menu-item-group>
          </a-sub-menu>
          <a-sub-menu key="sub3" @titleClick="titleClick">
            <span slot="title" class="guide__navigation-item"
              ><span> Tạo text </span></span
            >
            <a-menu-item-group class="guide__navigation-item-group" key="g3">
              <template slot="title"> </template>
              <a-menu-item class="guide__navigation-item-detail" key="9">
                Cửa hàng trực tuyến
              </a-menu-item>
              <a-menu-item class="guide__navigation-item-detail" key="10">
                Của hàng mỹ phẩm
              </a-menu-item>
              <a-menu-item class="guide__navigation-item-detail" key="11">
                Của hàng nước hoa
              </a-menu-item>
            </a-menu-item-group>
          </a-sub-menu>
          <a-sub-menu key="sub4" @titleClick="titleClick">
            <span slot="title" class="guide__navigation-item"
              ><span> Thêm hình ảnh </span></span
            >
            <a-menu-item-group class="guide__navigation-item-group" key="g4">
              <template slot="title"> </template>
              <a-menu-item class="guide__navigation-item-detail" key="12">
                Cửa hàng trực tuyến
              </a-menu-item>
              <a-menu-item class="guide__navigation-item-detail" key="13">
                Của hàng mỹ phẩm
              </a-menu-item>
              <a-menu-item class="guide__navigation-item-detail" key="14">
                Của hàng nước hoa
              </a-menu-item>
            </a-menu-item-group>
          </a-sub-menu>
          <a-sub-menu key="sub5" @titleClick="titleClick">
            <span slot="title" class="guide__navigation-item"
              ><span> Chỉnh sửa hình ảnh </span></span
            >
            <a-menu-item-group class="guide__navigation-item-group" key="g5">
              <template slot="title"> </template>
              <a-menu-item class="guide__navigation-item-detail" key="15">
                Cửa hàng trực tuyến
              </a-menu-item>
              <a-menu-item class="guide__navigation-item-detail" key="16">
                Của hàng mỹ phẩm
              </a-menu-item>
              <a-menu-item class="guide__navigation-item-detail" key="17">
                Của hàng nước hoa
              </a-menu-item>
            </a-menu-item-group>
          </a-sub-menu>
          <a-sub-menu key="sub6" @titleClick="titleClick">
            <span slot="title" class="guide__navigation-item"
              ><span> Tinh năng mới </span></span
            >
            <a-menu-item-group class="guide__navigation-item-group" key="g6">
              <template slot="title"> </template>
              <a-menu-item class="guide__navigation-item-detail" key="18">
                Cửa hàng trực tuyến
              </a-menu-item>
              <a-menu-item class="guide__navigation-item-detail" key="19">
                Của hàng mỹ phẩm
              </a-menu-item>
              <a-menu-item class="guide__navigation-item-detail" key="20">
                Của hàng nước hoa
              </a-menu-item>
            </a-menu-item-group>
          </a-sub-menu>
        </a-menu>
      </div>
      <div class="guide__text-guide">
        <div class="guide__text-guide-title">
          <h2>Tạo tài khoản</h2>
        </div>
        <div class="guide__text-guide-desc-1">
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over.
          </p>
        </div>
        <div class="guide__text-guide-picture">
          <img
            src="../assets/img/guide-text-picture.png"
            alt=""
            class="guide__text-guide-img"
          />
          <div class="guide__text-guide-img-name">Hình ảnh 1</div>
        </div>
        <div class="guide__text-guide-desc-2">
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy.
          </p>
        </div>
      </div>
      <div class="guide__video-guide">
        <div class="guide__video-guide-title">
          <h2>Video hướng dẫn</h2>
        </div>
        <div class="guide__video-guide-video">
          <img
            src="../assets/img/play-circle.png"
            alt=""
            class="guide__video-play-circle"
          />
        </div>
      </div>
    </div>
    <Footer />
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

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.guide {
  width: 1440px;
  height: max-content;
  margin: 0 auto;
  background: #f7f8fa;
}
.guide__path > h3 {
  margin-left: 135px;
  font-family: "SVN-Gotham-Light";
  font-size: 13px;
  line-height: 23px;
  color: #8493a8;
}
.guide__content {
  margin-left: 135px;
  margin-right: 135px;
  margin-top: 20px;
  padding-bottom: 20px;
  border-radius: 10px;
  padding-top: 45px;
  background: #ffffff;
  display: flex;

  .guide__navigation {
    .guide__navigation-item {
      font-family: "SVN-Gotham";
      font-size: 16px;
      line-height: 26px;
      color: #374355;
    }
    .guide__navigation-item-group {
    }
    .guide__navigation-item-detail {
      font-family: "SVN-Gotham";
      font-size: 14px;
      line-height: 24px;
      color: #54657e;
    }
  }

  .guide__text-guide {
    margin-left: 40px;
    margin-right: 50px;
    width: 477px;
    .guide__text-guide-title > h2 {
      font-family: "SVN-Gotham";
      font-size: 22px;
      line-height: 32px;
      color: #374355;
    }
    .guide__text-guide-desc-1 {
      font-family: "SVN-Gotham";
      font-size: 14px;
      line-height: 24px;
      color: #54657e;
    }
    .guide__text-guide-desc-2 {
      font-family: "SVN-Gotham";
      font-size: 14px;
      line-height: 24px;
      color: #5b5f6d;
      margin-top: 25px;
    }
    .guide__text-guide-picture {
      .guide__text-guide-img {
      }
      .guide__text-guide-img-name {
        font-family: "SVN-Gotham";
        font-size: 13px;
        line-height: 23px;
        color: #8493a8;
        margin-top: 15px;
        width: 477px;
        text-align: center;
      }
    }
  }

  .guide__video-guide {
    .guide__video-guide-title {
    }
    .guide__video-guide-video {
      background-image: url(../assets/img/guide-video-bg.png);
      width: 270px;
      height: 180px;
      display: flex;
      justify-content: center;
      align-items: center;
      .guide__video-play-circle {
      }
    }
  }
}
</style>
<style>
.ant-menu-item-group-title {
  display: none;
}

.ant-menu-item-selected {
  color: #eb6641 !important;
  background: #ffffff;
}
</style>