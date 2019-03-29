<template>
  <div>
    <div class="items">
      <div class="item left">
        <img style=' width: 20vw;' src='../../assets/logo.png' />
        <p align="center">&copy;2019 超人网站版权所有</p>
      </div>
      <div class="item left">
        <h3>联系我们</h3>
        <!--
          名称：烟台荣华软件科技有限公司

地址：烟台市高新区航天路101号C栋5楼516

座机：0535-3458081

邮箱：001@rongsoft.com

Q Q：327195471
          -->
        <p>名称：超人网站</p>
        <p>地址：山东省烟台市烟台大学北校区</p>
        <p>电话：15605459957</p>
        <p>邮箱：15605459957@163.com</p>
        <p>QQ: 1034832478</p>
      </div>
      <div class="item right qrcodes">
        <div class="wechat icon">
          <img v-bind:src="wechatQrcode" class='qrcode' />
          <img v-bind:src="wechat" ref="wechatItem">
          <p>官方微信</p>
        </div>
        <div class="qq icon">
          <img v-bind:src="qqQrcode" class='qrcode' />
          <img v-bind:src="qq" ref="qqItem">
          <p>官方qq</p>
        </div>
      </div>
      <div class='clear'></div>
    </div>
  </div>
</template>

<script>
import WeChatDark from "../../../static/images/wechat_dark.png";
import WeChatColor from "../../../static/images/wechat_color.png";
import QQDark from "../../../static/images/qq_dark.png";
import QQColor from "../../../static/images/qq_color.png";
import qqQrcode from "../../../static/images/qq.jpg";
import wechatQrcode from "../../../static/images/wechat.jpg";
export default {
  name: "Footer",
  mounted() {
    this.$refs.wechatItem.onmouseenter = () => {
      this.wechat = WeChatColor;
    };
    this.$refs.wechatItem.onmouseout = () => {
      this.wechat = WeChatDark;
    };
    this.$refs.qqItem.onmouseenter = () => {
      this.qq = QQColor;
    };
    this.$refs.qqItem.onmouseout = () => {
      this.qq = QQDark;
    };
  },
  props: {
    msg: String
  },
  methods: {},
  data() {
    return {
      WeChatColor: WeChatColor,
      WeChatDark: WeChatDark,
      QQDark: QQDark,
      QQColor: QQColor,
      wechat: WeChatDark,
      qq: QQDark,
      qqQrcode: qqQrcode,
      wechatQrcode: wechatQrcode
    };
  }
};
</script>

<style scoped lang='less'>
.items { background: black; color: white; font-size: 14px; padding: 20px 0px; width: 100%; display: flex; flex-direction: row; justify-content: space-evenly; }
.item {text-align: left; line-height: 30px;}
.qrcodes { display: flex; flex-direction: row; justify-content: center;
  .icon { padding: 0 20px; width: fit-content;  display: inline-block;  position: relative;
    .qrcode { opacity: 0; position: absolute; width: 150px; height: 150px; top: -160px; left: -30px; }
  }
  .icon:hover .qrcode { transition: opacity 1s 0.3s; opacity: 1;}
  
}
@media screen and (max-width:1000px){
  .items {  display: block; } 
  .items .item { clear: both !important; display: block; width: 100%; text-align: center; }
}
</style>
