<template>
    <section class="wrapper">
        <!-- <menu-component
           :fLogoutBtnClick="fLogoutBtnClick"
        />
        <router-view/> -->
        菜单栏
    </section>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
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
}
</script>
<style lang="scss" scoped>
  .wrapper{
      .container{
        background-color: #dfe0e5;
        border-radius: 50px 0px 0px 0px;
        overflow: auto;
      }
  }
</style>
