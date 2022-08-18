<template>
  <div class="wrap-layout">
    <Header bgcolor="#374355" />
    <div class="container">
      <div class="container__title">
        <div class="container__title-main-title">
          <h1>Xây dựng website của bạn chỉ trong nháy mắt!</h1>
        </div>
        <button class="container__title-button-try-free button">
          Dùng thử miễn phí
        </button>
        <img
          src="@/assets/img/Frame.png"
          alt="Frame"
          class="container__title-frame"
        />
      </div>
      <div class="container__responsive">
        <div class="container__responsive-main-title main-title">
          <h2>Responsive Web Design</h2>
        </div>
        <div class="container__responsive-extra-title extra-title">
          <h3>
            Today is super powerful UI kit with hundreds of amazing designed
            components in Adobe Photoshop & Sketch App
          </h3>
        </div>
        <div class="container__responsive-navigation">
          <button class="container__responsive-tablink">Tính năng 1</button>
          <button class="container__responsive-tablink">Tính năng 2</button>
          <button class="container__responsive-tablink">Tính năng 3</button>
          <button class="container__responsive-tablink">Tính năng 4</button>
        </div>
        <div class="container__responsive-slider"></div>
      </div>
      <div class="container__function">
        <div class="container__function-main-title main-title">
          <h2>Tính năng</h2>
        </div>
        <div class="container__function-extra-title extra-title">
          <h3>
            Today is super powerful UI kit with hundreds of amazing designed
            components in Adobe Photoshop & Sketch App.
          </h3>
        </div>
        <div class="container__function-feature">
          <!-- <div class="container__function-feature-item">
            <div class="container__function-item-left">
              <div class="container__function-item-name">
                <h3>Tính năng 1</h3>
              </div>
              <div class="container__function-item-content">
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
              </div>
              <button class="container__function-item-button button">
                Xem thêm
              </button>
            </div>
            <div class="container__function-item-right">
              <img src="../assets/img/picture.png" alt="" />
            </div>
          </div> -->
          <div
            class="container__function-feature-item"
            v-for="(item, index) in fakeData"
            :key="index"
            :class="
              index % 2 == 0
                ? 'container__function-feature-item'
                : 'container__function-feature-item-reverse'
            "
          >
            <div class="container__function-item-left">
              <div
                class="container__function-item-name"
                :class="
                  index % 2 == 0
                    ? 'container__function-item-name'
                    : 'container__function-item-name-reverse'
                "
              >
                {{ item.name }}
              </div>
              <div
                class="container__function-item-content"
                :class="
                  index % 2 == 0
                    ? 'container__function-item-content'
                    : 'container__function-item-content-reverse'
                "
              >
                {{ item.content }}
              </div>
              <button
                class="container__function-item-button button"
                :class="
                  index % 2 == 0
                    ? 'container__function-item-button'
                    : 'container__function-item-button-reverse'
                "
              >
                {{ item.url }}
              </button>
            </div>
            <div class="container__function-item-right">
              <div
                class="container__function-item-right-bg-img"
                :class="
                  index % 2 == 0
                    ? 'container__function-item-right-bg-img'
                    : 'container__function-item-right-bg-img-reverse'
                "
              >
                <img
                  :src="require(`../assets/img/${item.img}.png`)"
                  :alt="item.img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container__service">
        <div class="container__service-left">
          <div class="container__service-left-idea">
            <img
              src="@/assets/img/Idea.png"
              alt="Idea"
              height="54px"
              width="50px"
            />
          </div>
          <div class="container__service-left-title">
            <h2>Giải pháp tạo website bán hàng với chi phí thấp</h2>
          </div>
          <button class="container__service-left-button-see-more button">
            Xem thêm
          </button>
        </div>
        <div class="container__service-right">
          <img src="../assets/img/picture.png" alt="Picture" />
        </div>
      </div>
      <div class="container__warehouse-template">
        <div class="container__warehouse-template-main-title main-title">
          <h2>Kho giao diện</h2>
        </div>
        <div class="container__warehouse-template-extra-title extra-title">
          <h3>
            Today is super powerful UI kit with hundreds of amazing designed
            components in Adobe Photoshop & Sketch App.
          </h3>
        </div>
        <div class="container__warehouse-template-block-list">
          <div class="container__warehouse-template-block-list-top">
            <div class="container__warehose-template-block-list-item">
              <div class="container__warehouse-template-block-item-img">
                <img
                  src="../assets/img/picture.png"
                  alt="Warehouse template item picture"
                  width="56.93px"
                  height="48px"
                />
              </div>
              <div class="container__warehouse-template-block-item-footer">
                <p>Page Design Company profi...</p>
              </div>
            </div>
            <div class="container__warehose-template-block-list-item">
              <div class="container__warehouse-template-block-item-img">
                <img
                  src="../assets/img/picture.png"
                  alt="Warehouse template item picture"
                  width="56.93px"
                  height="48px"
                />
              </div>
              <div class="container__warehouse-template-block-item-footer">
                <p>Page Design Company profi...</p>
              </div>
            </div>
            <div class="container__warehose-template-block-list-item">
              <div class="container__warehouse-template-block-item-img">
                <img
                  src="../assets/img/picture.png"
                  alt="Warehouse template item picture"
                  width="56.93px"
                  height="48px"
                />
              </div>
              <div class="container__warehouse-template-block-item-footer">
                <p>Page Design Company profi...</p>
              </div>
            </div>
            <div class="container__warehose-template-block-list-item">
              <div class="container__warehouse-template-block-item-img">
                <img
                  src="../assets/img/picture.png"
                  alt="Warehouse template item picture"
                  width="56.93px"
                  height="48px"
                />
              </div>
              <div class="container__warehouse-template-block-item-footer">
                <p>Page Design Company profi...</p>
              </div>
            </div>
          </div>
          <div class="container__warhouse-template-block-list-bottom">
            <div class="container__warehose-template-block-list-item">
              <div class="container__warehouse-template-block-item-img">
                <img
                  src="../assets/img/picture.png"
                  alt="Warehouse template item picture"
                  width="56.93px"
                  height="48px"
                />
              </div>
              <div class="container__warehouse-template-block-item-footer">
                <p>Page Design Company profi...</p>
              </div>
            </div>
            <div class="container__warehose-template-block-list-item">
              <div class="container__warehouse-template-block-item-img">
                <img
                  src="../assets/img/picture.png"
                  alt="Warehouse template item picture"
                  width="56.93px"
                  height="48px"
                />
              </div>
              <div class="container__warehouse-template-block-item-footer">
                <p>Page Design Company profi...</p>
              </div>
            </div>
            <div class="container__warehose-template-block-list-item">
              <div class="container__warehouse-template-block-item-img">
                <img
                  src="../assets/img/picture.png"
                  alt="Warehouse template item picture"
                  width="56.93px"
                  height="48px"
                />
              </div>
              <div class="container__warehouse-template-block-item-footer">
                <p>Page Design Company profi...</p>
              </div>
            </div>
            <div class="container__warehose-template-block-list-item">
              <div class="container__warehouse-template-block-item-img">
                <img
                  src="../assets/img/picture.png"
                  alt="Warehouse template item picture"
                  width="56.93px"
                  height="48px"
                />
              </div>
              <div class="container__warehouse-template-block-item-footer">
                <p>Page Design Company profi...</p>
              </div>
            </div>
          </div>
        </div>
        <button class="container__warehouse-template-button-see-more button">
          Xem thêm
        </button>
      </div>
      <div class="container__blog">
        <div class="container__blog-title">
          <h3 class="container__blog-title-desc">
            It is a long established fact that a reader will be distracted
          </h3>
        </div>
        <button class="container__blog-button-use-now">Sử dụng ngay</button>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  data() {
    return {
      fakeData: [
        {
          id: 1,
          name: "Tính năng 1",
          content:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
          img: "picture",
          url: "Xem thêm",
        },
        {
          id: 2,
          name: "Tính năng 2",
          content:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
          img: "picture",
          url: "Xem thêm",
        },
        {
          id: 3,
          name: "Tính năng 3",
          content:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
          img: "picture",
          url: "Xem thêm",
        },
      ],
    };
  },
  methods: {
    // getUrlImg(img) {
    //   console.log("get img ---", img);
    //   return `../assets/img/${img}.png`;
    //   //   assets/img/picture.png
    // },
  },
  components: [Header, Footer],
  components: { Header, Footer },
};
</script>

<style scoped>
/* --------------------------------------------------DÙNG CHUNG CLASS---------------------------------------------------------------- */
.button {
  background: #eb6641;
  box-shadow: 0px 3px 15px rgba(55, 67, 85, 0.1);
  border-radius: 111px;
  border: none;
}

.main-title {
  text-align: center;
  width: 750px;
  margin: auto;
  color: #374355;
  font-family: "SVN-Gotham-Light";
  font-size: 28px;
  line-height: 62px;
}

.extra-title {
  text-align: center;
  width: 555px;
  margin: auto;
  color: #54657e;
  font-family: "SVN-Gotham-Light";
  font-size: 14px;
  line-height: 28px;
}

/* ---------------------------------------------------------------------------------------------------------------------------------- */

.wrap-layout {
  width: 1440px;
  height: max-content;
  background: #ffffff;
  margin: 0 auto;
}

.container {
}

/* ------------------------------------------------------HEADER---------------------------------------------------------------------- */
/* .header {
  background-color: #374355;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 135px;
}

.header__logo-navbar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.header__logo {
  display: flex;
  align-items: center;
}

.header__logo-style {
  width: 147px;
  height: 25px;
}

.header__navbar {
  display: flex;
  justify-content: center;
  align-items: center;
}

.header__navbar-list {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding-left: 60px;
  padding-right: 225px;
}

.header__navbar-item {
  font-family: "SVN-Gotham-Light";
  font-size: 14px;
  line-height: 19px;
  color: #ffffff;
  padding-right: 35px;
}

.header__navbar-item a{
  color: #ffffff;
  text-decoration: none;
}

.header__register {
  display: flex;
  align-items: center;
}

.header__register-globe {
  border-right: 1px solid #ffffff;
  height: 18px;
  padding-right: 14px;
  margin-right: 11px;
  display: flex;
  align-items: center;
}

.header__register-button {
}

.header__register-button-sign-in {
  font-family: "SVN-Gotham-Light";
  font-size: 14px;
  line-height: 19px;
  color: #ffffff;
  background-color: #374355;
  border: none;
  cursor: pointer;
}

.header__register-button-sign-up {
  font-family: "SVN-Gotham-Light";
  font-size: 14px;
  line-height: 19px;
  color: #ffffff;
  margin-left: 20px;
  padding: 11px 13.24px 13.8px 14px;
  width: 115px;
  height: 40px;
  cursor: pointer;
} */

/* ----------------------------------------------------END HEADER--------------------------------------------------------------------- */

/* ----------------------------------------Container__Title---------------------------------------------- */

.container__title {
  height: 827px;
  width: 1440px;
  background-color: #374355;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container__title-main-title {
  text-align: center;
  width: 774px;
  margin: 0 auto;
  margin-top: 49px;
  margin-bottom: 0px;
}

.container__title-main-title h1 {
  color: #ffffff;
  font-family: "SVN-Gotham-Light";
  font-size: 58px;
  line-height: 84px;
  margin-bottom: 0px;
}

.container__title-button-try-free {
  font-family: "SVN-Gotham-Light";
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  text-transform: uppercase;
  width: 205px;
  height: 50px;
  padding: 16px 20px 19px 16px;
  display: flex;
  margin-top: 38px;
  margin-bottom: 27px;
  margin-left: auto;
  margin-right: auto;
  color: #ffffff;
  cursor: pointer;
}

.container__title-frame {
  height: 392px;
  width: 852px;
  border-color: #374355;
  margin-top: 27px;
  margin-bottom: 72px;
  margin-left: auto;
  margin-right: auto;
}

/* --------------------------------------------------- End Container__Title ------------------------------------------------------ */

/* -------------------------------------------------- CONTAINER__RESPONSIVE -----------------------------------------------------  */

.container__responsive {
}

.container__responsive-main-title {
}

.container__responsive-extra-title {
}

.container__responsive-navigation {
}

.container__responsive-tablink {
}

/* ------------------------------------------------- END CONTAINER__RESPONSIVE ----------------------------------------------------- */

/* -------------------------------------------------- CONTAINER__FUCTION --------------------------------------------------------- */

.container__function {
  margin-top: 120px;
  margin-left: 135px;
  margin-right: 135px;
}

.container__function-main-title {
}

.container__function-extra-title {
  margin-top: 30px;
}

.container__function-feature {
  margin-top: 90px;
}

.container__function-feature-item {
  display: flex;
  margin-top: 90px;
}
.container__function-feature-item-reverse {
  display: flex;
  flex-direction: row-reverse;
}

.container__function-item-left {
  width: 50%;
  margin-right: 15px;
}

.container__function-item-right {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container__function-item-name {
  font-family: "SVN-Gotham-Light";
  font-size: 40px;
  line-height: 62px;
  color: #374355;
  margin-top: 15px;
}
.container__function-item-name-reverse{
  margin-left: 48px;
}

.container__function-item-content {
  font-family: "SVN-Gotham-Light";
  font-size: 16px;
  line-height: 26px;
  color: #54657e;
  margin-top: 10px;
  margin-right: 70px;
}
.container__function-item-content-reverse{
margin-left: 48px;
}
.container__function-item-button {
  text-align: center;
  font-family: "SVN-Gotham-Light";
  font-size: 14px;
  line-height: 19px;
  color: #ffffff;
  margin: 13.2px 17.66px 16.8px 18.64px;
  width: 150px;
  height: 48px;
  margin-top: 50px;
  margin-bottom: 31px;
  margin-left: 0;
}
.container__function-item-button-reverse{
margin-left: 48px;
}

.container__function-item-img {
  background: #ebedf3;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container__function-item-right {
}
.container__function-item-right-bg-img{
  width: 570px;
  height: 355px;
  background: #EBEDF3;
  border-radius: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container__function-item-right-bg-img-reverse{}
/* ------------------------------------------------END CONTAINER__FUNCTION -------------------------------------------------------


/* -------------------------------------------------- CONTAINER__SERVICE --------------------------------------------------------- */

.container__service {
  height: 730px;
  display: flex;
  margin-top: 120px;
}

.container__service-left {
  width: 735px;
  background: #eceff4;
}

.container__service-left-idea {
  margin-top: 170px;
  margin-left: 135px;
}

.container__service-left-title {
  width: 360px;
  height: 162px;
  font-family: "SVN-Gotham-Light";
  font-size: 25px;
  line-height: 58px;
  color: #374355;
  margin-top: 50px;
  margin-left: 135px;
}

.container__service-left-button-see-more {
  text-align: center;
  font-family: "SVN-Gotham-Light";
  font-size: 14px;
  line-height: 19px;
  color: #ffffff;
  margin: 13.2px 17.66px 16.8px 18.64px;
  width: 156px;
  height: 48px;
  margin-top: 40px;
  margin-left: 138px;
  margin-bottom: 206px;
}

.container__service-right {
  width: 705px;
  background: #ebedf3;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* ----------------------------------------------- END CONTAINER__SERVICE -------------------------------------------------------- */

/* ----------------------------------------- CONTAINER__WAREHOSE-TEMPLATE -------------------------------------------------------- */

.container__warehouse-template {
  margin-top: 120px;
}

.container__warehouse-template-main-title {
  margin-top: 120px;
}

.container__warehouse-template-extra-title {
  margin-top: 20px;
}

.container__warehouse-template-block-list {
  margin-top: 64px;
  margin-left: 135px;
  margin-right: 135px;
}

.container__warehouse-template-block-list-top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}

.container__warhouse-template-block-list-bottom {
  display: flex;
  justify-content: space-between;
}

.container__warehose-template-block-list-item {
  height: 316px;
  width: 270px;
  display: flex;
  flex-direction: column;
  border: 5px solid #ffffff;
  border-radius: 15px;
  box-shadow: 0px 3px 15px rgba(55, 67, 85, 0.2);
}

.container__warehouse-template-block-item-img {
  background: #eceff4;
  height: 270px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px 15px 0 0;
}

.container__warehouse-template-block-item-footer {
  height: 45px;
  background: #ffffff;
  border-radius: 0 0 15px 15px;
  font-family: "SVG-Gotham-Light";
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container__warehouse-template-button-see-more {
  text-align: center;
  font-family: "SVN-Gotham-Light";
  font-size: 14px;
  line-height: 19px;
  color: #ffffff;
  margin: 13.2px 17.66px 16.8px 18.64px;
  width: 156px;
  height: 48px;
  margin-top: 60px;
  margin-right: 642px;
  margin-left: 642px;
  margin-bottom: 171px;
}

/* --------------------------------------- END CONTAINER__WAREHOSE-TEMPLATE ----------------------------------------------------- */

/* -------------------------------------------- CONTAINER__BLOG --------------------------------------------------------------*/

.container__blog {
  background-image: url(../assets/img/Blog-bg.png);
  height: 464px;
}

.container__blog-title {
  text-align: center;
  width: 887px;
  margin: 0 auto !important;
  padding-top: 111px;
}

.container__blog-title-desc {
  font-family: "SVG-Gotham-Light";
  font-size: 52px;
  line-height: 70px;
  color: #ffffff;
  margin: 0px;
}

.container__blog-button-use-now {
  background-color: #ffffff;
  font-family: "SVG-Gotham-Light";
  font-size: 16px;
  line-height: 22px;
  color: #eb6641;
  box-shadow: 20px 20px 60px rgba(2, 8, 22, 0.4);
  border-radius: 25px;
  border: none;
  padding: 12px 44px 16px 44px;
  width: 200px;
  height: 50px;
  text-align: center;
  margin-top: 45px;
  margin-bottom: 120px;
  margin-right: 621px;
  margin-left: 619px;
}

/* -------------------------------------------- END CONTAINER__blog --------------------------------------------------------- */

/* ------------------------------------------- FOOTER ---------------------------------------------------------------------------*/

.footer {
  background-color: #ffffff;
}

.footer__logo {
  margin-top: 80px;
  margin-left: 135px;
}

.footer__description {
  display: flex;
}

.footer__description-company {
  flex: 1;
  margin-top: 60px;
  margin-left: 135px;
}

.footer__description-company-header {
  font-family: "SVN-Gotham-Light";
  font-size: 22px;
  line-height: 32px;
  color: #374355;
}

.footer__description-company-list {
  list-style: none;
}

.footer__description-company-item {
  font-family: "SVN-Gotham-Light";
  font-size: 14px;
  line-height: 34px;
  color: #54657e;
}

.footer__description-company-list
  > .footer__description-company-item:first-child {
  margin-top: 35px;
}

.footer__description-society {
  flex: 1;
  align-items: center;
  margin-top: 60px;
}

.footer__description-society-header {
  font-family: "SVN-Gotham-Light";
  font-size: 22px;
  line-height: 32px;
  color: #374355;
}

.footer__description-society-list {
  list-style: none;
}

.footer__description-society-item {
  font-family: "SVN-Gotham-Light";
  color: #54657e;
  font-size: 14px;
  line-height: 34px;
}

.footer__description-society-list
  > .footer__description-society-item:first-child {
  margin-top: 43px;
}

.footer__description-about-us {
  flex: 3;
  align-items: center;
  margin-top: 60px;
}

.footer__description-about-us-header {
  font-family: "SVN-Gotham-Light";
  font-size: 22px;
  line-height: 32px;
  color: #374355;
}

.footer__description-about-us-desc {
  font-family: "SVN-Gotham-Light";
  color: #54657e;
  font-size: 14px;
  line-height: 24px;
  margin-top: 44px;
  width: 469px;
}

.footer__copyright {
  padding-top: 70px;
}

.footer__copyright-desc {
  text-align: center;
  font-family: "SVN-Gotham-Light";
  font-size: 14px;
  line-height: 24px;
  color: #8493a8;
  margin-top: 31px;
  margin-bottom: 35px;
}

/* --------------------------------------- - END FOOTER ------------------------------------------------------------------------ */
</style>