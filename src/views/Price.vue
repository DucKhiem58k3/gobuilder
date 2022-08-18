<template>
  <div class="price">
    <HeaderDetail />
    <div class="price__path">
      <h3>Trang chủ>Gói cước</h3>
    </div>
    <div class="price__title">
      <h2>Gói cước của chúng tôi</h2>
    </div>
    <div class="price__pre-title">
      <h3>
        Nâng cấp gói cước để trả nghiệm thêm nhiều dịch vụ của chúng tôi ngay
        bây giời
      </h3>
    </div>
    <div class="price__list">
      <div class="price__item-beginner">
        <div class="price__item-price">
          <h3>It’s Free</h3>
        </div>
        <div class="price__item-name">
          <h4>Beginner</h4>
        </div>
        <ul class="price__item-benefit-list">
          <li class="price__item-benefit-detail">
            500 MB of Space
            <span
              ><img
                src="../assets/icon/check-1.svg"
                alt=""
                class="price__item-icon-check"
            /></span>
          </li>
          <li class="price__item-benefit-detail">
            1 Project<span
              ><img
                src="../assets/icon/check-1.svg"
                alt=""
                class="price__item-icon-check"
            /></span>
          </li>
          <li class="price__item-benefit-detail">
            10 Users<span
              ><img
                src="../assets/icon/check-1.svg"
                alt=""
                class="price__item-icon-check"
            /></span>
          </li>
        </ul>
        <button class="price__item-button">
          Nâng cấp<span
            ><img
              src="../assets/icon/angle-right-white.svg"
              alt=""
              class="price__item-button-angle-right"
          /></span>
        </button>
      </div>
      <div class="price__item-starter">
        <div class="price__item-hot">
          <img src="../assets/img/price-hot.png" alt="" />
          <span class="price__item-hot-title">HOT</span>
        </div>
        <div class="price__item-price">
          <h3>$ 17.95</h3>
        </div>
        <div class="price__item-name">
          <h4>Starter</h4>
        </div>
        <ul class="price__item-benefit-list">
          <li class="price__item-benefit-detail">
            10 GB of Space
            <span
              ><img
                src="../assets/icon/check-1.svg"
                alt=""
                class="price__item-icon-check"
            /></span>
          </li>
          <li class="price__item-benefit-detail">
            3 Projects<span
              ><img
                src="../assets/icon/check-1.svg"
                alt=""
                class="price__item-icon-check"
            /></span>
          </li>
          <li class="price__item-benefit-detail">
            95 Users<span
              ><img
                src="../assets/icon/check-1.svg"
                alt=""
                class="price__item-icon-check"
            /></span>
          </li>
        </ul>
        <button class="price__item-button">
          Nâng cấp<span
            ><img
              src="../assets/icon/angle-right-white.svg"
              alt=""
              class="price__item-button-angle-right"
          /></span>
        </button>
      </div>
      <div class="price__item-premium">
        <div class="price__item-price">
          <h3>$ 29.95</h3>
        </div>
        <div class="price__item-name">
          <h4>Premium</h4>
        </div>
        <ul class="price__item-benefit-list">
          <li class="price__item-benefit-detail">
            Unlimited Space
            <span
              ><img
                src="../assets/icon/check-1.svg"
                alt=""
                class="price__item-icon-check"
            /></span>
          </li>
          <li class="price__item-benefit-detail">
            Unlimited Projects<span
              ><img
                src="../assets/icon/check-1.svg"
                alt=""
                class="price__item-icon-check"
            /></span>
          </li>
          <li class="price__item-benefit-detail">
            Unlimited Users<span
              ><img
                src="../assets/icon/check-1.svg"
                alt=""
                class="price__item-icon-check"
            /></span>
          </li>
        </ul>
        <button class="price__item-button">
          Nâng cấp<span
            ><img
              src="../assets/icon/angle-right-white.svg"
              alt=""
              class="price__item-button-angle-right"
          /></span>
        </button>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import HeaderDetail from "../components/HeaderDetail.vue";
import Footer from "../components/Footer.vue";
export default {
  components: [HeaderDetail, Footer],
  components: { HeaderDetail, Footer },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.price {
  width: 1440px;
  height: max-content;
  margin: 0 auto;
  background: #f7f8fa;
}
.price__path > h3 {
  margin-left: 135px;
  font-family: "SVN-Gotham-Light";
  font-size: 13px;
  line-height: 23px;
  color: #8493a8;
}
.price__title > h2 {
  text-align: center;
  width: 750px;
  margin: auto;
  color: #374355;
  font-family: "SVN-Gotham-Light";
  font-size: 28px;
  line-height: 64px;
  margin-top: 50px;
}
.price__pre-title > h3 {
  text-align: center;
  width: 555px;
  margin: auto;
  color: #54657e;
  font-family: "SVN-Gotham-Light";
  font-size: 16px;
  line-height: 28px;
}
.price__list {
  margin-left: 135px;
  margin-right: 135px;
  margin-top: 80px;
  margin-bottom: 145px;
  height: 477px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price__item-beginner {
  width: 370px;
  height: 437px;
  background: #ffffff;
  border-radius: 10px;
  border: 1px solid #ebedf3;
}
.price__item-starter {
  width: 370px;
  height: 477px;
  background: #ffffff;
  box-shadow: 0px 3px 20px rgba(55, 67, 85, 0.15);
  border-radius: 10px;

  .price__item-hot {
    margin-left: 20px;
    position: relative;

    .price__item-hot-title {
      font-family: "SVN-Gotham";
      font-size: 14px;
      line-height: 26px;
      display: flex;
      align-items: center;
      text-align: center;
      text-transform: uppercase;
      color: #ffffff;
      position: absolute;
      top:11px;
      left: 11px;
    }
  }
}
.price__item-premium {
  width: 370px;
  height: 437px;
  background: #ffffff;
  border: 1px solid #ebedf3;
  border-radius: 10px;
}
.price__item-price > h3 {
  font-family: "SVN-Gotham-Light";
  font-size: 52px;
  line-height: 70px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #eb6641;
  display: flex;
  justify-content: center;
  margin-top: 33px;
}
.price__item-name {
  margin-top: 20px;
}
.price__item-name > h4 {
  font-family: "SVN-Gotham";
  font-size: 16px;
  line-height: 26px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #8493a8;
}
.price__item-benefit-list {
  list-style: none;
}
.price__item-benefit-detail {
  font-family: "SVN-Gotham";
  font-size: 14px;
  line-height: 24px;
  color: #54657e;
  margin-left: 40px;
  margin-right: 44px;
  display: flex;
  justify-content: space-between;
}
.price__item-benefit-list > .price__item-benefit-detail:first-child {
  margin-top: 42px;
}
.price__item-icon-check {
}
.price__item-button {
  background: #eb6641;
  border-radius: 22.5px;
  font-family: "SVN-Gotham";
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  width: 144px;
  height: 45px;
  border: none;
  margin: 0 auto;
  margin-top: 50px;
}
.price__item-button-angle-right {
  color: #ffffff;
  padding-left: 30px;
}
</style>