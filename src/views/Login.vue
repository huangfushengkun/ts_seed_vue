<template>
  <div class="login">
    <h1>this is a Login page</h1>
    <img alt="Vue logo" src="../assets/logo.png" />
    <router-link tag="p" :to="{name:'About',params:{ userId:1245}}">clack to about</router-link>
  </div>
</template>

<script>
// import Component from "vue-class-component";
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "Login",
  components: {
    // HelloWorld
  }
})
export default class Login extends Vue {
  created() {
    console.log(this.$route.params, "--params");
    console.log(this.$route.query, "---query");
  }
}
</script>
<style lang="scss" scoped>
.login {
  text-align: center;
}
</style>
