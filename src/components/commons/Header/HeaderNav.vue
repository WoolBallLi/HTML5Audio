<!-- header-nav -->
<template>
  <div class="header-nav">
    <nav class="header-nav-box">
      <ul class="nav-list">
        <li v-for="nav in navs" :key="nav.id">
          <router-link :to="nav.path">{{nav.title}}</router-link>
        </li>
      </ul>
    </nav>
    <div class="header-nav-mask"></div>
  </div>
</template>

<script>
export default {
  name: "header-nav",
  data() {
    return {
      navs: [
        { id: 1, title: "新歌", path: "/newSong" },
        { id: 2, title: "排行", path: "/rank" },
        { id: 3, title: "歌单", path: "/singer" },
        { id: 4, title: "歌手", path: "/songSheet" }
      ]
    };
  }
};
</script>
<style lang='scss' scoped>
.header-nav-mask {
  width: 100%;
  height: 56px;
}
.header-nav-box {
  position: fixed;
  z-index: 500;
  width: 100%;
  background: #fff;
  height: 50px;
  line-height: 50px;
  margin-bottom: 4px;
  box-shadow: 0 4px 4px 0 #f4f4f4;
  .nav-list {
    display: flex;
    justify-content: space-around;
    align-content: center;
    font-size: 20px;
    li {
      width: 20%;
      text-align: center;
      a {
        display: block;
        width: 100%;
        height: 46px;
        color: #333;
      }
      .router-link-exact-active {
        border-bottom: 4px solid #33a3f5;
      }
    }
  }
}
</style>