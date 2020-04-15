<template>
    <section class="wrapper">
        <!-- <menu-component
           :fLogoutBtnClick="fLogoutBtnClick"
        /> -->
        <h2>首页title栏 组件  a b v </h2>
        <router-link :to="{name:'About'}">about</router-link>
        <div style="width:5px;height:20px;background-color: #ff6700;display:inline-block;margin:0 20px;"></div>
        <router-link :to="{name:'Like'}">like</router-link>
        <div style="height:1px;width:100%;background-color: #ff6700;"></div>
        <router-view/>
    </section>
</template>
<script lang="ts">
// import Vue from 'vue';
// import Component from 'vue-class-component';
import { Component, Prop, Vue } from 'vue-property-decorator';
// import MenuComponent from "@/components/menuComponent.vue";
@Component({
    name: 'layoutI',
    components: {
        // MenuComponent
    },
})
export default class LayoutIComponent extends Vue {
    /*
     * 退出登录
     * */
    public fLogoutBtnClick() {
        (this as any).$confirm('确认退出？').then((_: any) => {
            // console.log("logout");
          })
          .catch((_: any) => {
            //
          });
    }
    public created() {
      // console.log(this.$router.options.routes);

    }
}
</script>
<style lang="scss" scoped>
  .wrapper{
    text-align: center;
      .container{
        background-color: #dfe0e5;
        border-radius: 50px 0px 0px 0px;
        overflow: auto;
      }
  }
</style>
