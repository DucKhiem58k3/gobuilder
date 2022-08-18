<template>
  <div :style="{ background: bgcolor }" class="header">
    <div class="header__logo-navbar">
      <div class="header__logo">
        <a href="/">
          <img
            src="../assets/img/GoBuilder.png"
            alt="Logo Gobuilder"
            class="header__logo-style"
        /></a>
      </div>

      <div class="header__navbar">
        <ul class="header__navbar-list">
          <li class="header__navbar-item"><a href="function">Tính năng</a></li>
          <li class="header__navbar-item"><a href="/price">Dịch vụ</a></li>
          <li class="header__navbar-item">
            <a href="/template">Kho Template</a>
          </li>
          <li class="header__navbar-item"><a href="/blog">Blog</a></li>
          <li class="header__navbar-item">
            <a href="/guide">Hỗ trợ</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="header__register">
      <div class="header__register-globe">
        <img src="../assets/icon/globe.svg" alt="" />
      </div>
      <button
        :style="{ background: bgcolor }"
        class="header__register-button-sign-in"
      >
        Đăng nhập
      </button>
      <button class="header__register-button-sign-up">Đăng ký</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: String,
    bgcolor: String,
  },
};
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 135px;
}
.header__logo-navbar {
  display: flex;
  justify-content: center;
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
  margin: 0px;
}
.header__navbar-item {
  font-family: "SVN-Gotham-Light";
  font-size: 14px;
  line-height: 19px;
  color: #ffffff;
  padding-right: 35px;
}

.header__navbar-item a {
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
.header__register-button-sign-in {
  font-family: "SVN-Gotham-Light";
  font-size: 14px;
  line-height: 19px;
  color: #ffffff;
  border: none;
  cursor: pointer;
  background: none;
}
.header__register-button-sign-up {
  background: #eb6641;
  box-shadow: 0px 3px 15px rgba(55, 67, 85, 0.1);
  border-radius: 111px;
  border: none;
  font-family: "SVN-Gotham-Light";
  font-size: 14px;
  line-height: 19px;
  color: #ffffff;
  margin-left: 20px;
  padding: 11px 13.24px 13.8px 14px;
  width: 115px;
  height: 40px;
  cursor: pointer;
}
</style>