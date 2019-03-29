<template>
  <div id="app">
    <MainNavigation></MainNavigation>
    <Banner v-bind:adMsgs="['强大的网站引擎, 助商业快速发展',
          '便捷、安全、稳定',
          '认真对待每一位顾客，服务客户，精进自己',
          '客户更放心，用户更青睐'
        ]"></Banner>
    <Requirement></Requirement>
    <Footer></Footer>
  </div>
</template>

<script>
import MainNavigation from './components/navigations/MainNavigation.vue'
import Banner from './components/navigations/Banner.vue'
import Footer from './components/navigations/Footer.vue'
// import Drawer from './components/navigations/Drawer.vue'
import Requirement from './components/navigations/Requirement.vue'

export default {
  name: 'app',
  components: {
    MainNavigation,
    Banner,
    Requirement,
    Footer,
  }
}
</script>

<style lang='less'>
*{ padding: 0; margin: 0; }
html,body{ margin:0;padding:0;border:0; width: 100%; overflow-x: hidden;}
img { border: 0; }
a { text-decoration: none; color: #4d555d; }
li { list-style: none; }
.right { float: right; }
.left { float: left; }
.clear { clear: both; }
a:hover{ font-weight: bolder; }
input {  outline: none; }



/*************标准表单样式****************/
.standard_form { padding:40px 0px; margin: 0 auto; min-height: 400px; display: flex; flex-direction: column; justify-content: left;
  .title { color: gray; font-size: 16px; }
  .item { margin: 5px 0; }
  .item input{ width: 260px; height: 40px; padding: 0 5px; border: none; margin-right: 10px; background: #f4f7f9; }
  .item textarea{ max-width: 70vw; min-width: 50vw; max-height: 30vw; min-height: 25vw; border-radius: 3px; padding: 0 5px; background: white; }
  .item button{ cursor: pointer; padding:10px 90px; height: 40px; border: none; background: orange; color: white; line-height: 24px; }
  .item button[disabled] { cursor: not-allowed;  background: gray; }
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  width: 100%;
}
</style>
