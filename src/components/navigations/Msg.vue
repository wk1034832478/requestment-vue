<template>
  <div class='items'>
      adsdasdasd
    <div class='msg'>ssssssssssssssssssss
        <p> {{ msg }} </p>cssssssssssssssssssssssssssss
    </div>
    <div>
        <p align='center'>
            <button>确定</button>
        </p>
    </div>
  </div>
</template>

<script>
/**
 * 消息对话框组件
 */
export default {
  name: "Msg",
  mounted() {

  },
  props: {
    msg: String
  },
  methods: {},
  data() {
    return {
     
    }
  }
};
</script>

<style scoped lang='less'>

</style>
