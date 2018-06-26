<template>
<div class="app-header">
<div class="app-header-mask"></div>
  <header class="app-header-box">
    <div class="header-title">
      <img src="../../../assets/logo.png" alt="kogo">
      <span>下载酷狗</span>
      <a href="" class="fa fa-search"></a>
    </div>
  </header>
</div>
</template>

<script type="text/javascript">
export default {
  name: "app-header",
  
};
</script>
<style lang="scss" scoped>
.app-header-mask{
  width: 100%;
  height: 50px;
}
.app-header-box {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 3;
  .header-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    line-height: 50px;
    background: #2ca2f9;
    position: relative;
    img {
      width: 1.3rem;
      height: 30px;
      margin-left: 0.12rem;
    }
    span {
      width: 1rem;
      height: 30px;
      line-height: 30px;
      margin-right: 0.4rem;
      border: 1px solid #fff;
      border-radius: 0.1rem;
      display: block;
      text-align: center;
      color: #fff;
      font-size: 14px;
    }
    a {
      color: #fff;
      font-size: 24px;
      margin-right: 0.1rem;
    }
  }
  
}
</style>