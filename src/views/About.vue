<template>
  <section class="about">
    <div class="left_nav">
      <ul>
        <router-link tag="li" :to="{name:'Huangfu',query:{name:'huangfu'}}">to huangfu</router-link>
        <router-link tag="li" :to="{name:'Shengkun',params:{name:'huangfu'}}">to shengkun</router-link>
      </ul>
    </div>
    <router-view></router-view>
    <!-- <div class="content">
      <h1>This is an about page</h1>
      <router-link :to="{name:'Login',query:{name:'huangfu'}}">to login</router-link>
    </div> -->
  </section>
</template>
<script>
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "About",
  components: {
    // HelloWorld
  }
})
export default class About extends Vue {
  created() {
    console.log(this.$route.params, "--params");
    console.log(this.$route.query, "---query");
  }
}
</script>
<style lang="scss" scoped>
.about {
  text-align: center;
  display: flex;
  .left_nav {
    width: 200px;
    ul li {
    }
  }
  .content {
    flex: 1;
  }
}
</style>
