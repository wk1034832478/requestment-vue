<template>
  <div class="banners">
    <div class="items">
      <div class="item">
        <img class="banner-img" v-bind:src=" mybanner ">
      </div>
      <div class='advertisement' ref="adDiv">
            <section>
                <h3> {{ adMsg }} </h3>
            </section>
      </div>
      <div class='dots' ref='dots'>
        <div v-on:mouseenter='updateIndex(0)' class='dot light'></div>
        <div v-on:mouseenter='updateIndex(1)' class='dot'></div>
        <div v-on:mouseenter='updateIndex(2)' class='dot'></div>
        <div v-on:mouseenter='updateIndex(3)' class='dot'></div>
    </div>
    </div>
    <div class='clear'></div>
    <div class='ads'>
        <img v-bind:src='ad1' />
        <img v-bind:src='ad2' />
    </div>
    <div class='clear'></div>
  </div>
</template>

<script>
import ad1 from "../../../static/images/ad1.jpg";
import ad2 from "../../../static/images/ad2.jpg";
import n1 from "../../../static/images/n1.jpg";
import n2 from "../../../static/images/n2.jpg";
import n3 from "../../../static/images/n3.jpg";
import n4 from "../../../static/images/n4.jpg";
import { setInterval } from 'timers';


export default {
  name: "Banner",
  mounted() {
        this.dotList = this.$refs.dots.children;
        if ( !this.adMsgs || this.adMsgs.length != this.dotList.length ) {
            this.adMsgs = [];
            for (let i = 0; i < this.dotList.length; i++ ) {
              this.adMsgs[i] = this.defaultADMsg[i];
            }
        } 
        this.adMsg = this.adMsgs[ this.index ];
        setInterval( () => {
            this.updateIndex( this.index + 1 );
        }, 4000 )
  },
  methods: {
      updateIndex(i) {
        if ( i == this.index ) {
            return;
        } else if ( i >= this.banners.length ) {
            i = 0;
        }
        this.rebackDots()
        this.index = i;
        this.adMsg = this.adMsgs[this.index];
        this.mybanner = this.banners[this.index];
        this.dotList[i].classList =  'dot light';

      },
      rebackDots() {
          for (let i = 0; i < this.dotList.length; i++ ) {
              this.dotList[i].classList = 'dot';
          }
      }
  },
  props: {
    msg: String,
    adMsgs: Array,
  },
  data() {
    return {
        mybanner: n1,
        banners: [ n1, n2, n3, n4 ],
        ad1: ad1,
        ad2: ad2,
        index: 0,
        dotIndex: 0,
        dotList: [],
        adMsg: '',
        defaultADMsg: [
          '强大的网站引擎, 助商业快速发展',
          '便捷、安全、稳定',
          '认真对待每一位顾客，服务客户，精进自己',
          '客户更放心，用户更青睐'
        ],
    };
  }
};


</script>

<style scoped lang='less'>
.banners { width: 100%; }
.items:hover { box-shadow: gray 0px -2px 1px 1px;}
.items {
    position: relative;
    .item {
        .banner-img { width: 100%; transition: opacity 0.5 linear;}
    }
    .advertisement {
        position: absolute;
        text-align: center;
        color: whitesmoke;
        font-size: 2vw;
        left: 2vw;
        top: 70%;
        opacity: 1;
    }
    .dots { 
        width: 100%;
        position: absolute;
        bottom: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
     .dot { cursor: pointer; opacity: 1; width: 15px; height: 15px; background: whitesmoke; transition: opacity 0.2s, background-color 0.3s linear; border-radius: 10px; margin: 0 10px;  }
     .dot.light {  opacity: 0.5; background: yellowgreen; }    
}   
}

.ads {
  width: 100%; display: flex;  justify-content: space-evenly; 
  img {  width: 45%; height: 20vw; }
  img:hover {transition: transform .3s; transform: scale(1.05);}
}

</style>
