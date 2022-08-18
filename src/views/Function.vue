<template>
  <div class="function">
    <HeaderDetail />
    <div class="function__path">
      <h3>Trang chủ>Tính năng</h3>
    </div>
    <div class="function__title">
      <div class="function__title-main-title">
        <h2>Tính năng</h2>
      </div>
      <div class="function__title-extra-title">
        <h3>
          Today is super powerful UI kit with hundreds of amazing designed
          components in Adobe Photoshop & Sketch App.
        </h3>
      </div>
    </div>
    <div class="function__list">
      <div
        class="function__list-item"
        v-for="(item, index) in fakeData"
        :key="index"
        :class="
          index % 2 == 0 ? 'function__list-item' : 'function__list-item-reverse'
        "
      >
        <div class="function__function-item-left">
          <div
            class="function__list-item-name"
            :class="
              index % 2 == 0
                ? 'function__list-item-name'
                : 'function__list-item-name-reverse'
            "
          >
            {{ item.name }}
          </div>
          <div
            class="function__list-item-content"
            :class="
              index % 2 == 0
                ? 'function__list-item-content'
                : 'function__list-item-content-reverse'
            "
          >
            {{ item.content }}
          </div>
        </div>
        <div class="function__list-item-right">
          <div
            class="function__list-item-right-bg-img"
            :class="
              index % 2 == 0
                ? 'function__list-item-right-bg-img'
                : 'function__list-item-right-bg-img-reverse'
            "
          >
            <div class="function__list-item-image">
              <img
                :src="require(`../assets/img/${item.img}.png`)"
                :alt="item.img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import HeaderDetail from "../components/HeaderDetail.vue";
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
        },
        {
          id: 2,
          name: "Tính năng 2",
          content:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
          img: "picture",
        },
        {
          id: 3,
          name: "Tính năng 3",
          content:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
          img: "picture",
        },
        {
          id: 4,
          name: "Tính năng 4",
          content:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
          img: "picture",
        },
      ],
    };
  },
  components: [HeaderDetail, Footer],
  components: { HeaderDetail, Footer },
};
</script>

<style scoped>
.function {
  width: 1440px;
  height: max-content;
  margin: 0 auto;
}
.function__path {
  margin-left: 135px;
  font-family: "SVN-Gotham-Light";
  font-size: 13px;
  line-height: 23px;
  color: #8493a8;
}
.function__title {
  background-image: url(../assets/img/Function-bg.png);
  height: 320px;
  margin-top: 30px;
}
.function__title-main-title {
  text-align: center;
  width: 750px;
  margin: 0 auto;
  padding-top: 96px;
  font-family: "SVN-Gotham-Light";
  font-size: 48px;
  line-height: 62px;
  color: #ffffff;
}
.function__title-extra-title {
  text-align: center;
  width: 555px;
  margin: 0 auto;
  font-family: "SVN-Gotham-Light";
  font-size: 16px;
  line-height: 26px;
  color: #cad3df;
  padding-top: 30px;
}
.function__list {
}
.function__list-item {
  display: flex;
  height: 535px;
}
.function__list-item-reverse {
  background: #eceff4;
  display: flex;
  flex-direction: row-reverse;
}
.function__function-item-left {
  width: 50%;
}
.function__list-item-name {
  font-family: "SVN-Gotham-Light";
  font-size: 40px;
  line-height: 62px;
  color: #374355;
  margin-top: 15px;
  margin-left: 135px;
  padding-top: 136px;
}
.function__list-item-name-reverse{
margin-left: 48px;
}
.function__list-item-content {
  font-family: "SVN-Gotham-Light";
  font-size: 16px;
  line-height: 26px;
  color: #54657e;
  margin-top: 10px;
  margin-right: 70px;
  margin-left: 135px;
  width: 500px;
}
.function__list-item-content-reverse{
margin-left: 48px;
}
.function__list-item-right {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
}
.function__list-item-right-bg-img {
  width: 570px;
  height: 355px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  background: #ebedf3;
  margin-right: 135px;
}
.function__list-item-right-bg-img-reverse {
  background: #ffffff;
  margin-left: 135px;
}

.function__list-item-image {
}
</style>