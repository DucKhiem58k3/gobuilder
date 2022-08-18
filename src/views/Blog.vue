<template>
  <div class="blog">
    <div class="blog__header-title">
      <div class="blog__header-title-bg">
        <div class="blog__header-title-wrap">
          <Header />
          <div class="blog__header-title-caption">Caption2</div>
          <div class="blog__header-title-main-title">
            HOW TO BROADCAST A GUESS THE SONG WEB BY GOBUILDER
          </div>
          <div class="blog__header-title-time">Dec 31, 2018</div>
        </div>
      </div>
    </div>
    <div class="blog__content">
      <div class="blog__desc-top">
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
      </div>
      <div class="blog__desc-bot">
        <p>
          Sed nec rutrum purus. Cras ipsum nibh, finibus euismod pulvinar sit
          amet, congue id augue. Nunc lectus justo, gravida at risus sit amet,
          viverra pulvinar ante. Quisque non aliquet eros. Praesent nec
          consequat ipsum. Curabitur id nunc libero. Proin vehicula erat ligula,
          nec dignissim lectus auctor nec. Morbi non turpis non augue blandit
          egestas.
        </p>
        <p>
          Sed nec rutrum purus. Cras ipsum nibh, finibus euismod pulvinar sit
          amet, congue id augue. Nunc lectus justo, gravida at risus sit amet,
          viverra pulvinar ante. Quisque non aliquet eros. Praesent nec
          consequat ipsum. Curabitur id nunc libero. Proin vehicula erat ligula,
          nec dignissim lectus auctor nec. Morbi non turpis non augue blandit
          egestas.
        </p>
      </div>
      <div class="blog__share-author">
        <button class="blog__share">
          Share
          <span><img src="../assets/icon/icon-share.svg" alt="" /></span>
        </button>
        <div class="blog__author">BY: EMILY STEVENS</div>
      </div>
      <br />
      <ul class="blog__related-articles">
        Related Articles
        <li class="blog__relared-articles-item">
          Nam iaculis eu arcu sed luctus
        </li>
        <li class="blog__relared-articles-item">
          Vivamus ut lacus malesuada, cursus erat ac
        </li>
        <li class="blog__relared-articles-item">
          Cras ipsum nibh, finibus euismod pulvinar sit amet
        </li>
      </ul>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  components: [Header, Footer],
  components: { Header, Footer },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.blog {
  width: 1440px;
  height: max-content;
  margin: 0 auto;

  .blog__header-title {
    .blog__header-title-bg {
      background-image: url(../assets/img/blog-header-bg.png);
      width: 1440px;
      height: 480px;

      .blog__header-title-wrap {
        width: 100%;
        height: 100%;
        background: #374355;
        opacity: 0.9;

        .blog__header-title-caption {
          font-family: "SVN-Gotham";
          font-size: 13px;
          line-height: 17px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #eb6641;
          text-align: center;
          margin-top: 112px;
        }
        .blog__header-title-main-title {
          width: 830px;
          height: 113px;
          font-family: "SVN-Gotham";
          font-size: 40px;
          line-height: 56px;
          display: flex;
          text-align: center;
          color: #ffffff;
          margin: 0 auto;
        }
        .blog__header-title-time {
          font-family: "SVN-Gotham";
          font-size: 14px;
          line-height: 24px;
          text-align: center;
          color: #cad3df;
          margin-top: 30px;
        }
      }
    }
  }
}
</style>