<template>
  <div class="like">
    <h1>This is an like page</h1>
    <router-link :to="{name:'Login',query:{name:'huangfu'}}">to login</router-link>
  </div>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'Like',
  components: {
    // HelloWorld
  }
})
export default class Like extends Vue {
  created() {
    console.log(this.$route.params,'--params');
    console.log(this.$route.query, '---query');
  }

}
</script>
<style lang="scss" scoped>
.like {
  text-align :center
}
</style>
