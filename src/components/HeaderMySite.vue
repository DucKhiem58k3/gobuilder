<template>
  <div class="headerSite">
    <div class="headerSite__logo-navbar">
      <div class="headerSite__logo">
        <img
          src="../assets/img/footer-gobuilder.png"
          alt=""
          class="headerSite__logo-style"
        />
      </div>
      <div class="headerSite__navbar">
        <ul class="headerSite__navbar-list">
          <li class="headerSite__navbar-item"><a href="">Web của bạn</a></li>
          <li class="headerSite__navbar-item">
            <a href="">Thư viện Templates</a>
          </li>
          <li class="headerSite__navbar-item"><a href="">Trợ giúp</a></li>
        </ul>
      </div>
    </div>
    <div class="headerSite__notification-account">
      <div class="headerSite__notification">
        <div class="headerSite__notification-message">
          <img src="../assets/icon/Message.svg" alt="" />
        </div>
        <div class="headerSite__notification-bell">
          <img src="../assets/icon/Bell.svg" alt="" />
        </div>
        <div class="headerSite__notification-globe">
          <img src="../assets/icon/globe2.svg" alt="" />
        </div>
      </div>
      <div class="headerSite__account">
        <div class="headerSite__account-avatar">
          <img src="../assets/img/Avarta.png" alt="" />
        </div>
        <div class="headerSite__account-name">
          <h3>Admintest123</h3>
        </div>
        <div class="headerSite__account-setting">
          <img src="../assets/img/Vector.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.headerSite {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 30px;
}
.headerSite__logo-navbar {
  display: flex;
  justify-content: center;
  align-items: center;
}
.headerSite__logo {
  display: flex;
  align-items: center;
}

.headerSite__logo-style {
  width: 147px;
  height: 25px;
}
.headerSite__navbar {
  display: flex;
  justify-content: center;
  align-items: center;
}
.headerSite__navbar-list {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding-left: 138px;
  padding-right: 405px;
  margin: 0px;
}
.headerSite__navbar-item {
  font-family: "SVN-Gotham-Light";
  font-size: 14px;
  line-height: 19px;
  color: #374355;
  padding-right: 30px;
}

.headerSite__navbar-item a {
  color: #374355;
  text-decoration: none;
}
.headerSite__notification-account {
  display: flex;
  justify-content: center;
  align-items: center;
}
.headerSite__notification {
  display: flex;
  justify-content: center;
  align-items: center;
}
.headerSite__notification-message {
    padding-right: 14px;
}
.headerSite__notification-bell {
    padding-right: 14px;
}
.headerSite__notification-globe {
  border-right: 1px solid #CAD3DF;
  height: 18px;
  padding-right: 14px;
  margin-right: 11px;
  display: flex;
  align-items: center;
}
.headerSite__account {
    display: flex;
    justify-content: center;
    align-items: center;
}
.headerSite__account-avatar {
    padding-right: 15px;
}
.headerSite__account-name {
    font-family: "SVN-Gotham-Light";
    font-size: 14px;
    line-height: 19px;
    color: #54657E;
    padding-right: 15px;
}
.headerSite__account-setting {
}
</style>      