<template>
  <div class='items'>
    <div class='item'>
        <img v-bind:src='WeChatDark' class='icon' />
        <p></p>
    </div>
  </div>
</template>

<script>
import WeChatDark from "../../../static/images/wechat_dark.png";

export default {
  name: "Drawer",
  mounted() {
    
  },
  props: {
    msg: String
  },
  methods: {},
  data() {
    return {
      WeChatDark: WeChatDark
    };
  }
};
</script>

<style scoped lang='less'>
.items {
    position: fixed;
    right: 0px;
    width: 40px;
    top: 0px;
    display: flex;
    box-shadow: -1px 0px 1px 1px gray;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    .item {
        .icon { width: 40px; height: 40px; }
    }
}
</style>
