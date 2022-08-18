<template>
  <div class="signin">
    <div class="signin__header-logo">
      <a href="/">
        <img
          src="../assets/img/footer-gobuilder.png"
          alt="Logo Gobuilder"
          class="header__logo-style"
      /></a>
    </div>
    <div class="signup__container">
      <div
        class="sign__card_login"
      >
        <h1>Đăng nhập</h1>
        <p>
          Bạn chưa có tài khoản GoBuilder?
          <a
            href="/signup"
            >Đăng ký ngay</a
          >
        </p>
        <form class="signin__form-group">
          <div class="signin__form-email">
            <img
              src="../assets/icon/mail.svg"
              alt=""
              class="signin__form-icon-email"
            />
            <input
              v-model="emailLogin"
              type="email"
              class="signin__email-control"
              placeholder="Email"
              required
            />
          </div>
          <div class="signin__form-password">
            <img
              src="../assets/icon/lock.svg"
              alt=""
              class="signin__form-icon-lock"
            />
            <input
              v-model="passwordLogin"
              type="password"
              class="signin__password-control"
              placeholder="Mật khẩu"
              required
            />
            <img
              src="../assets/icon/eye.svg"
              alt=""
              class="signin__form-icon-eye"
            />
          </div>     
          <div class="signin__forgot-password">
            <a href="#">Bạn quên mật khẩu</a>
          </div>
          <button type="submit" class="singin__button-signin" @click="doLogin">
            Đăng nhập
          </button>
        </form>
        <div class="signin__orther-register">Hoặc đăng nhập bằng</div>
        <div class="signin__orther-social">
          <button class="signin__facebook">
            <span
              ><img
                src="../assets/icon/fa.svg"
                alt=""
                class="signin__icon-fa" /></span
            >Facebook
          </button>
          <button class="signin__google">
            <span
              ><img
                src="../assets/icon/google.svg"
                alt=""
                class="signin__icon-google"
            /></span>
            Google
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataInput: [
        {
          emailLogin: "",
          passwordLogin: "",
          emptyFields: false,
        },
      ],
    };
  },
  methods: {
    doLogin() {
      if (this.emailLogin === "" || this.passwordLogin === "") {
        this.emptyFields = true;
      } else {
        alert("You are now logged in");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.signin {
  width: 1440px;
  height: 900px;
  margin: 0 auto;

  .signin__header-logo {
    margin-left: 135px;
    margin-top: 30px;
  }
  .sign__card_login > h1 {
    font-family: "SVN-Gotham-Light";
    font-size: 44px;
    line-height: 59px;
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #374355;
    margin-top: 120px;
  }
  .sign__card_login > p {
    font-family: "SVN-Gotham";
    font-size: 14px;
    line-height: 19px;
    color: #54657e;
    text-align: center;
    margin-top: 20px;
  }
  .sign__card_login > a {
    font-family: "SVN-Gotham";
    font-size: 14px;
    line-height: 19px;
    text-align: center;
  }
  .signin__form-group {
    margin: auto;
    width: 400px;
    margin-top: 60px;
  }
  .signin__form-email {
    border-bottom: 1px solid #cad3df;
    font-family: "SVN-Gotham";
    font-size: 14px;
    line-height: 19px;
    color: #54657e;
  }
  .signin__form-icon-email {
  }
  .signin__email-control {
    border: none;
    outline: none;
    padding-left: 15px;
  }
  .signin__form-password {
    border-bottom: 1px solid #cad3df;
    font-family: "SVN-Gotham";
    font-size: 14px;
    line-height: 19px;
    color: #54657e;
    margin-top: 40px;
  }
  .signin__password-control {
    border: none;
    outline: none;
    padding-left: 15px;
  }
  .signin__form-icon-eye {
    padding-left: 160px;
  }
  .signin__forgot-password > a {
    font-family: "SVN-Gotham";
    font-size: 13px;
    line-height: 17px;
    color: #8493a8;
  }
  .signin__forgot-password {
    text-align: right;
    margin-top: 10px;
  }
  .singin__button-signin {
    width: 400px;
    height: 50px;
    background: #eb6641;
    box-shadow: 0px 3px 15px rgba(55, 67, 85, 0.1);
    border-radius: 25px;
    border: none;
    margin-top: 30px;
    font-family: "SVN-Gotham";
    font-size: 15px;
    line-height: 20px;
    color: #ffffff;
    cursor: pointer;
  }
  .signin__orther-register {
    font-family: "SVN-Gotham";
    font-size: 13px;
    line-height: 17px;
    text-align: center;
    color: #8493a8;
    margin-top: 50px;
  }
  .signin__orther-social {
    text-align: center;
    margin-top: 35px;
  }
  .signin__facebook {
    width: 190px;
    height: 50px;
    background: #ffffff;
    box-shadow: 0px 3px 15px rgba(55, 67, 85, 0.1);
    border-radius: 25px;
    font-family: "SVN-Gotham";
    font-size: 13px;
    line-height: 17px;
    color: #4460a0;
    border: none;
    cursor: pointer;
    margin-right: 20px;
  }
  .signin__google {
    width: 190px;
    height: 50px;
    background: #ffffff;
    box-shadow: 0px 3px 15px rgba(55, 67, 85, 0.1);
    border-radius: 25px;
    border: none;
    cursor: pointer;
    font-family: "SVN-Gotham";
    font-size: 13px;
    line-height: 17px;
    color: #f93f2d;
  }
}
</style>