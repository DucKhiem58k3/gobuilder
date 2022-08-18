<template>
  <div class="headerDetail">
    <div class="headerDetail__logo-navbar">
      <div class="headerDetail__logo">
        <a href="/">
          <img
            src="../assets/img/footer-gobuilder.png"
            alt="headerDetail logo"
            class="headerDetail__logo-style"
        /></a>
      </div>
      <div class="headerDetail__navbar">
        <ul class="headerDetail__navbar-list">
          <li class="headerDetail__navbar-item">
            <a href="/function">Tính năng</a>
          </li>
          <li class="headerDetail__navbar-item">
            <a href="/price">Dịch vụ</a>
          </li>
          <li class="headerDetail__navbar-item">
            <a href="/template">Kho Template</a>
          </li>
          <li class="headerDetail__navbar-item"><a href="/blog">Blog</a></li>
          <li class="headerDetail__navbar-item"><a href="/guide">Hỗ trợ</a></li>
        </ul>
      </div>
    </div>
    <div class="headerDetail__register">
      <div class="headerDetail__register-globe">
        <img src="../assets/icon/globe2.svg" alt="" />
      </div>
      <button class="headerDetail__register-button-sign-in">Đăng nhập</button>
      <button class="headerDetail__register-button-sign-up">Đăng ký</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.headerDetail {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 135px;
}
.headerDetail__logo-navbar {
  display: flex;
  justify-content: center;
  align-items: center;
}
.headerDetail__logo {
  display: flex;
  align-items: center;
}
.headerDetail__logo-style {
  width: 147px;
  height: 25px;
}
.headerDetail__navbar {
  display: flex;
  justify-content: center;
  align-items: center;
}
.headerDetail__navbar-list {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding-left: 60px;
  padding-right: 225px;
  margin: 0px;
}
.headerDetail__navbar-item {
  font-family: "SVN-Gotham-Light";
  font-size: 14px;
  line-height: 19px;
  color: #374355;
  padding-right: 35px;
}
.headerDetail__navbar-item a {
  color: #374355;
  text-decoration: none;
}
.headerDetail__register {
  display: flex;
  align-items: center;
}
.headerDetail__register-globe {
  border-right: 1px solid #cad3df;
  height: 18px;
  padding-right: 14px;
  margin-right: 11px;
  display: flex;
  align-items: center;
}
.headerDetail__register-button-sign-in {
  font-family: "SVN-Gotham-Light";
  font-size: 14px;
  line-height: 19px;
  color: #374355;
  border: none;
  cursor: pointer;
  background: none;
}
.headerDetail__register-button-sign-up {
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
</style>>
