<template>
  <div class='navigation' ref="navigation">
    <div class='logo item'>
      <img width='226' height="72px" src='../../assets/logo.png' />  
    </div>
    <div class='menu' ref="menuTri">
      <span class='left'>导航</span>
      <img class='right' v-bind:src='menu' />
      <div class='clear'></div>
    </div>
    <div class='navg item'>
      <nav ref="navs">
        <a href='/'>首页</a>
        <a href='#'>关于超人网站</a>
        <a href='#'>主营项目</a>
        <a href='#'>云产品</a>
        <a href='#'>案例中心</a>
        <a href='#'>新闻动态</a>
        <a href='#'>联系我们</a>
        <div class='clear'></div>
      </nav>
    </div>
    <!-- 搜索框 -->
    <div class='item search'>
      <form action='${searchUrl}'>
        <input type='text' placeholder="搜索" />
        <input type='image' v-bind:src='si' />
      </form>
    </div>
    <!-- 登录注册 -->
    <div class='item right'>
        <a href='#'>加入我们</a>
        |
        <a href='#'>登录</a>
        |
        <a href='#'>注册</a>
    </div>
    <div class='clear'></div>
  </div>
</template>

<script>
import SearchImage from '../../../static/images/1.png'
import menu from '../../../static/images/menu.png'
export default {
  name: 'MainNavigation',
  mounted() {
    // 设置滑动监听事件
    window.addEventListener( 'scroll', this.fixTop);
    this.$refs.menuTri.onclick = () => {
        this.open = !this.open;
        this.showNavigation( this.open );
    }
  },
  props: {
    msg: String,
    searchUrl: String
  },
  methods: {
    fixTop() {
      // 获取滑动数量
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if ( this.scrollTop > 150 ) {
        this.$refs.navigation.classList = 'navigation fixed';
      } else {
        this.$refs.navigation.classList = 'navigation';
      }
    },
    showNavigation(isOpen) {
      let nodes = this.$refs.navs.childNodes;
      if ( isOpen ) {
        for ( let node of nodes ) {
          node.style.display = 'block';
          node.style.opacity = '1';
        }
      } else {
        for ( let node of nodes ) {
          node.style.display = 'none';
          node.style.opacity = '0';
        }
      }
    }
  },
  data() {
    return {
      'si': SearchImage,
      'scrollTop': 0,
      menu: menu,
      open: false,
    }
  }
}

</script>

<style scoped lang='less'>
  .navigation {
    position: relative;
    padding: 10px 20px;
    transition: top 1s linear;
    z-index: 999;
    -webkit-transition: top 1s linear;
    .menu { display: none;}
    .item {
      height: 72px;
      position: relative;
      float: left;
      line-height: 72px;
        nav a{
          line-height: 72px;
          display: inline-block;
          padding: 0px 20px;
          img {  display: inline-block; vertical-align: middle;}
        }
      /* 搜索表单样式 */
      form {
            height: 72px;
            line-height: 72px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            input[type='text'] { min-width: 80px; height: 30px; border: none; outline: none;border-bottom: gray 1px solid;}
            input[type='text']:focus { border-bottom: greenyellow 1px solid; }
            input[type='image'] { position: absolute; right: 0px; }
      }
    }
    .item.right { float: right ;}
  }
  .navigation.fixed { padding: 0px 0px; position: fixed;  top: 0px; z-index: 999; width: calc(100% - 0px); background: white; }

  @media screen and (max-width: 1000px){
    .logo { text-align: center; }
    .navigation .navg * { clear: both; }
    .navigation .item.right {  clear: both;  } 
    .navigation .menu { display: block; padding: 5px 20px; }
    .navigation .menu img {  display: inline-block;}
    .navigation, .navg.item nav, .navg.item nav a{ padding: 0; }
    .navigation .navg.item { width: 100%; height: auto; }
    .navigation .search { display: none; }
    .navg.item nav a { transition: opacity 0.3s;  opacity: 0; }
    .navg.item nav a, .item{ float: left; width: calc(100% - 20px); padding: 0 10px; display: block;}
    .navg.item nav a, .right{ display: none;}
  }
</style>
