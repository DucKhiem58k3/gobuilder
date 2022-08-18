<template>
  <div class="about">
    <HeaderMySite /> 
    <h1>This is an about page</h1>
    <Footer />
  </div>
</template>

<script>
import HeaderMySite from '../components/HeaderMySite.vue'
import Footer from "../components/Footer.vue";
export default {
  components: [HeaderMySite, Footer],
  components: { HeaderMySite, Footer },
};
</script>
<style scoped>
.about {
  width: 1440px;
  height: max-content;
  margin: 0 auto;
}
</style>