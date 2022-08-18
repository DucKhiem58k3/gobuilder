<template>
  <div class="footer">
    <div class="footer__logo">
      <img
        src="../assets/img/footer-gobuilder.png"
        alt="logo footer gobuider"
      />
    </div>
    <div class="footer__description">
      <div class="footer__desc-company">
        <h3 class="footer__desc-company-header">Company</h3>
        <ul class="footer__desc-company-list">
          <li class="footer__desc-company-item">Home</li>
          <li class="footer__desc-company-item">Team</li>
          <li class="footer__desc-company-item">About us</li>
          <li class="footer__desc-company-item">Picture</li>
        </ul>
      </div>
      <div class="footer__desc-society">
        <h3 class="footer__desc-society-header">Society</h3>
        <ul class="footer__desc-society-list">
          <li class="footer__desc-society-item">Facebook</li>
          <li class="footer__desc-society-item">Youtube</li>
          <li class="footer__desc-society-item">Skype</li>
        </ul>
      </div>
      <div class="footer__desc-about-us">
        <h3 class="footer-desc-about-us-header">About us</h3>
        <p class="footer-desc-about-us-desc">
          GoStream was founded with a mission to bring differentiation to your
          social media channels (Facebook fanpage, Youtube channel ,...). This
          is a tool that make it easy to convert any video and any camere source
          to livestream. Let us help you bring quality content to your
          customers.
        </p>
      </div>
    </div>
    <div class="footer__copyright">
      <p class="footer-copyright-desc">
        © Copyright 2019 - GoDream JSC. Designed & developed by GoDream.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  background-color: #ffffff;
  padding-top: 80px;
}
.footer__logo {
  /* margin-top: 80px; */
  margin-left: 135px;
}
.footer__description {
  display: flex;
}
.footer__desc-company {
  flex: 1;
  margin-top: 60px;
  margin-left: 135px;
}
.footer__desc-company-header {
  font-family: "SVN-Gotham-Light";
  font-size: 22px;
  line-height: 32px;
  color: #374355;
}
.footer__desc-company-list {
  list-style: none;
}
.footer__desc-company-item {
  font-family: "SVN-Gotham-Light";
  font-size: 14px;
  line-height: 34px;
  color: #54657e;
}
.footer__desc-company-list > .footer__desc-company-item:first-child {
  margin-top: 35px;
}
.footer__desc-society {
  flex: 1;
  align-items: center;
  margin-top: 60px;
}
.footer__desc-society-header {
  font-family: "SVN-Gotham-Light";
  font-size: 22px;
  line-height: 32px;
  color: #374355;
}
.footer__desc-society-list {
  list-style: none;
}
.footer__desc-society-item {
  font-family: "SVN-Gotham-Light";
  color: #54657e;
  font-size: 14px;
  line-height: 34px;
}
.footer__desc-society-list > .footer__desc-society-item:first-child {
  margin-top: 43px;
}
.footer__desc-about-us {
  flex: 3;
  align-items: center;
  margin-top: 60px;
}
.footer-desc-about-us-header {
  font-family: "SVN-Gotham-Light";
  font-size: 22px;
  line-height: 32px;
  color: #374355;
}
.footer-desc-about-us-desc {
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
.footer-copyright-desc {
  text-align: center;
  font-family: "SVN-Gotham-Light";
  font-size: 14px;
  line-height: 24px;
  color: #8493a8;
  margin-top: 31px;
  margin-bottom: 35px;
}
</style>