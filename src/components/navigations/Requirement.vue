<template>
  <div>
    <div class="introduction" ref="introduction">
      <div class="text">
        <h3>在线提交需求</h3>
        <p>在这里，您可以询问我们的产品设备，也可以留下生产运营所遇到的困惑，我们都将一一为您解答。留言墙，记录您较真实的感受，解答您较关心的问题……。</p>
      </div>
    </div>
    <div class="clear"></div>
    <form ref='requestForm' onsubmit='return false' class="standard_form">
      <div class="title">
        <p>描述一下您的问题/建议</p>
      </div>
      <div class="item">
        <input ref="name" name="name" type="text" placeholder="如何称呼您？">
        <input ref="telephone" name="telephone" type="text" placeholder="电话">
      </div>
      <div class="item">
        <input ref="email" name="email" type="text" placeholder="邮箱">
        <input ref="corporation" name="corporation" type="text" placeholder="公司名称">
      </div>
      <div class="item">
        <input ref="touse" name="touse" type="text" placeholder="用途">
        <input ref="corporation_range" name="corporation_range" type="text" placeholder="经营范围">
      </div>
      <div class="item">
        <textarea ref="request" name="request" placeholder="请留下您的需求，我们将尽快回复你"></textarea>
      </div>
      <div class="item">
        <button v-bind:disabled='isDisabled' ref='submitBtn'>提交</button>
      </div>
    </form>
    <div class="clear"></div>
  </div>
</template>

<script>
import business1 from "../../../static/images/business1.jpg";
export default {
  name: "Requirement",
  components: {},
  mounted() {
    this.$refs.introduction.style =
      " background: url(" + business1 + ") no-repeat; background-size: 100% 100%;";
    this.$refs.submitBtn.onclick = this.checkForm;
  },
  props: {
    msg: String
  },
  methods: {
    // 检查表单填写情况
    checkForm() {
      if ( this.$refs.name.value.trim() == '' ) {
        this.warn( '姓名' )
      }else if ( this.$refs.telephone.value.trim() == '' ) {
        this.warn( '电话' )
      }else if ( this.$refs.email.value.trim() == '' || !this.$refs.email.value.match( '^[0-9a-zA-Z]+@{1}([0-9a-zA-Z]+\\.{1}[0-9a-zA-Z]+)+$' ) ) {
        this.warn( '邮箱或格式不正确,格式为： xxx@xxx.xxx' )
      }else if ( this.$refs.corporation.value.trim() == '' ) {
        this.warn( '公司名称' )
      }else if ( this.$refs.corporation_range.value.trim() == '' ) {
        this.warn( '经营范围' )
      }else if ( this.$refs.request.value.trim() == '' ) {
        this.warn( '需求' )
      } else if ( this.$refs.touse.value.trim() == '' ) {
        this.warn( '用途' )
      } else {
        this.canSend = true;
        this.sendRequest();
      } 
    },
    warn( field ) {
      this.canSend = false;
      alert( field + '未填写!' );
    },
    // 提交需求
    sendRequest() {
      this.$refs.requestForm
      this.xmlhttp;
        this.xmlhttp = null;
        if (window.XMLHttpRequest) {
          // code for all new browsers
          this.xmlhttp = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
          // code for IE5 and IE6
          this.xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        if (this.xmlhttp != null) {
          this.isDisabled = true;
          this.xmlhttp.onreadystatechange = this.state_Change;
          this.xmlhttp.open("POST", '/api/request', true);
          this.xmlhttp.setRequestHeader("Content-Type","application/json");
          this.xmlhttp.send( this.getFormData() ); //  发送所有的必须字段       
        } else {
          alert("Your browser does not support XMLHTTP.");
        }
    },
    state_Change() {
        if (this.xmlhttp.readyState == 4) {
          this.isDisabled = false;
          // 4 = "loaded"
          if (this.xmlhttp.status == 200) {
            // 200 = OK
            // ...our code here...
            let result = JSON.parse( this.xmlhttp.responseText )
            if ( result.code == 201 ) {
              this.$refs.requestForm.reset(); // 重置表格
              alert( '提交成功！感谢您的提交，我们将尽快和您取得联系！' );
            } else {
              alert( result.msg  );
            }
          } else {
            alert("发送失败，请检查网络问题！");
          }
        }
    },
    getFormData() {
      let obj = {
        'name': this.$refs.name.value,
        'telephone': this.$refs.telephone.value,
        'email': this.$refs.email.value,
        'corporation': this.$refs.corporation.value,
        'corporationRange': this.$refs.corporation_range.value,
        'touse': this.$refs.touse.value,
        'request': this.$refs.request.value
      };
      return JSON.stringify( obj );
    }
  },
  data() {
    return {
      business1: business1,
      xmlhttp: null,
      canSend: false,
      isDisabled: false
    };
  }
};
</script>

<style scoped lang='less'>
.introduction {
  min-height: 100px;
  max-height: 60vw;
  position: relative;
  min-height: 30vw;
  width: 100%;
  margin: 20px 0px;
  color: white;
  overflow: hidden;
  .text {
    position: absolute;
    left: 4vw;
    bottom: 4vw;
    min-width: 40vw;
    max-width: 80vw;
  }
  h3 {
    font-size: 2vw;
  }
  p {
    font-size: 1.5vw;
  }
}
.standard_form {
  margin: 0 auto;
  width: calc(100% - 100px);
  max-width: 580px;
  padding: 10px 50px;
}
</style>
