<template>
  <div class="mysite">
    <HeaderMySite />
    <div class="mysite__title-function">
      <div class="mysite__title">
        <h1>Website của bạn!</h1>
        <h3>Thêm mới, quản lý và chỉnh sửa website củ bạn ngay bây giờ</h3>
      </div>
      <div class="mysite__function">
        <button class="mysite__function-button-search">
          <img src="../assets/icon/Search2.svg" alt="" />
        </button>
        <button class="mysite__function-button-update">
          Năng cấp tài khoản
        </button>
        <button class="mysite__function-button-delete">
          <img
            src="../assets/icon/delete-trash-dust-bin-remove-recycle-bin.svg"
            alt=""
          />
        </button>
      </div>
    </div>
    <div class="mysite__website-list">
        <div class="mysite__website-list-item">
            <div class="mysite__website-list-item-img"></div>
        </div>
    </div>
  </div>
</template>

<script>
import HeaderMySiteVue from "@/components/HeaderMySite.vue";
import HeaderMySite from "@/components/HeaderMySite.vue";
export default {
  components: [HeaderMySiteVue],
  components: { HeaderMySite },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.mysite {
  width: 1440px;
  height: max-content;
  margin: 0 auto;

  .mysite__title-function {
    background: #f7f8fa;
    height: 180px;
    display: flex;
    padding-left: 135px;
    padding-right: 135px;
    justify-content: space-between;
    .mysite__title > h1 {
      font-family: "SVN-Gotham";
      font-size: 36px;
      line-height: 48px;
      color: #374355;
      margin-top: 40px;
    }
    .mysite__title > h3 {
      font-family: "SVN-Gotham";
      font-size: 14px;
      line-height: 19px;
      color: #8493a8;
      margin-top: 15px;
    }
    .mysite__function {
      display: flex;
      align-items: center;
      .mysite__function-button-search {
        height: 50px;
        width: 50px;
        background: #ffffff;
        border: 1px solid #cad3df;
        border-radius: 111px;
        margin-right: 15px;
      }
      .mysite__function-button-update {
        height: 50px;
        width: 190px;
        background: #eb6641;
        border-radius: 111px;
        border: none;
        margin-right: 15px;
        font-family: "SVN-Gotham";
        font-size: 14px;
        line-height: 19px;
        text-align: center;
        color: #ffffff;
      }
      .mysite__function-button-delete {
        height: 50px;
        width: 50px;
        background: #ffffff;
        border: 1px solid #cad3df;
        border-radius: 111px;
      }
    }
  }
}
</style>