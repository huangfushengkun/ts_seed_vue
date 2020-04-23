<template>
  <router-view/>

  <!-- <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <button @click="login">登录</button>
  </div> -->
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import userService from './service/userService';
@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {
  public login() {
    userService.fLoginService().then((res) => {
      console.log(res);

    });
  }
  public mounted() {

  }

}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.hf-active{
  color: #ff6700;
}
</style>
