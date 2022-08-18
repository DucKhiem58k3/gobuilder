<template>
  <div class="signuperrror">
    <div class="signuperrror__header-logo">
      <a href="/">
        <img
          src="../assets/img/footer-gobuilder.png"
          alt="Logo Gobuilder"
          class="header__logo-style"
      /></a>
    </div>

    <div class="signuperrror__container">
      <div class="signuperrror__card_register">
        <h1>Đăng ký</h1>
        <p>
          Bạn đã có tài khoản GoBuilder?
          <a href="/signin">Đăng nhập ngay</a>
        </p>
        <h3>Tài khoản hoặc mật khẩu không chính xác</h3>
        <form class="signuperrror__form-group">
          <div class="signuperrror__form-user">
            <img
              src="../assets/icon/user-2.svg"
              alt=""
              class="signuperrror__form-icon-user"
            />
            <input
              v-model="userName"
              type="text"
              class="signuperrror__user-control"
              placeholder="Họ và tên"
              required
            />
          </div>
          <div class="signuperrror__form-email">
            <img
              src="../assets/icon/mail.svg"
              alt=""
              class="signuperrror__form-icon-email"
            />
            <input
              v-model="emailReg"
              type="email"
              class="signuperrror__email-control"
              placeholder="Email"
              required
            />
          </div>
          <div class="signuperrror__form-password">
            <img
              src="../assets/icon/lock.svg"
              alt=""
              class="signuperrror__form-icon-lock"
            />
            <input
              v-model="passwordReg"
              type="password"
              class="signuperrror__password-control"
              placeholder="Mật khẩu"
              required
            />
            <img
              src="../assets/icon/eye.svg"
              alt=""
              class="signuperrror__form-icon-eye"
            />
          </div>

          <!-- <input type="submit" class="btn btn-primary" @click="doRegister" /> -->
          <button
            type="submit"
            class="singup__button-signin"
            @click="doRegister"
          >
            Đăng nhập
          </button>
        </form>
        <div class="signuperrror__orther-register">Hoặc đăng nhập bằng</div>
        <div class="signuperrror__orther-social">
          <button class="signuperrror__facebook">
            <span
              ><img
                src="../assets/icon/fa.svg"
                alt=""
                class="signuperrror__icon-fa" /></span
            >Facebook
          </button>
          <button class="signuperrror__google">
            <span
              ><img
                src="../assets/icon/google.svg"
                alt=""
                class="signuperrror__icon-google"
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
          userName: "",
          emailReg: "",
          passwordReg: "",
          emptyFields: false,
        },
      ],
    };
  },
  methods: {
    doRegister() {
      if (
        this.emailReg === "" ||
        this.passwordReg === "" ||
        this.confirmReg === ""
      ) {
        this.emptyFields = true;
      } else {
        alert("You are now registered");
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
.signuperrror {
  width: 1440px;
  height: 900px;
  margin: 0 auto;

  .signuperrror__header-logo {
    margin-left: 135px;
    margin-top: 30px;
  }
  .signuperrror__card_register > h1 {
    font-family: "SVN-Gotham-Light";
    font-size: 44px;
    line-height: 59px;
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #374355;
    margin-top: 120px;
  }
  .signuperrror__card_register > h3 {
    font-family: "SVN-Gotham";
    font-size: 14px;
    line-height: 19px;
    text-align: center;
    color: #ff0b00;
    margin-top: 18px;
  }
  .signuperrror__card_register > p {
    font-family: "SVN-Gotham";
    font-size: 14px;
    line-height: 19px;
    color: #54657e;
    text-align: center;
    margin-top: 20px;
  }
  .signuperrror__card_register > a {
    font-family: "SVN-Gotham";
    font-size: 14px;
    line-height: 19px;
    text-align: center;
  }
  .signuperrror__form-group {
    margin: auto;
    width: 400px;
    margin-top: 20px;
  }
  .signuperrror__form-user {
    border-bottom: 1px solid #cad3df;
    font-family: "SVN-Gotham";
    font-size: 14px;
    line-height: 19px;
    color: #54657e;
  }
  .signuperrror__form-icon-user {
  }
  .signuperrror__user-control {
    border: none;
    outline: none;
    padding-left: 15px;
  }
  .signuperrror__form-email {
    border-bottom: 1px solid #cad3df;
    font-family: "SVN-Gotham";
    font-size: 14px;
    line-height: 19px;
    color: #54657e;
    margin-top: 40px;
  }
  .signuperrror__form-icon-email {
  }
  .signuperrror__email-control {
    border: none;
    outline: none;
    padding-left: 15px;
  }
  .signuperrror__form-password {
    border-bottom: 1px solid #cad3df;
    font-family: "SVN-Gotham";
    font-size: 14px;
    line-height: 19px;
    color: #54657e;
    margin-top: 40px;
  }
  .signuperrror__form-icon-lock {
  }
  .signuperrror__password-control {
    border: none;
    outline: none;
    padding-left: 15px;
  }
  .signuperrror__form-icon-eye {
    padding-left: 160px;
  }
  .singup__button-signin {
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
  .signuperrror__orther-register {
    font-family: "SVN-Gotham";
    font-size: 13px;
    line-height: 17px;
    text-align: center;
    color: #8493a8;
    margin-top: 50px;
  }
  .signuperrror__orther-social {
    text-align: center;
    margin-top: 35px;
  }
  .signuperrror__facebook {
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
  .signuperrror__google {
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