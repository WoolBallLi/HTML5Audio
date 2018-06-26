<!-- new-song -->
<template>
  <div class="new-song">
    <header-nav></header-nav>
    <new-song-banner :banners="banners"></new-song-banner>
    <new-song-list @havehash="getsonghash" :listData="listData"></new-song-list>
    <small-player v-if="playerShow" :songHash="songHash"></small-player>
  </div>
</template>

<script>
import HeaderNav from "../../commons/Header/HeaderNav";
import NewSongBanner from "../../commons/NewSongBanner/Banner";
import NewSongList from "./NewSongList";
import SmallPlayer from "../../commons/SmallPlayer/SmallPlayer";

export default {
  name: "new-song",
  components: { HeaderNav, NewSongBanner, NewSongList, SmallPlayer },
  data() {
    return {
      songData: [],
      banners: [],
      listData: [],
      songHash: "",
      playerShow: false
    };
  },
  //axios请求示例
  methods: {
    getData() {
      this.$axios
        .get("/kg/?json=true", {
          page: JSON
        })
        .then(res => {
          this.songData = res.data;
          this.banners = this.songData.banner;
          this.listData = this.songData.data;
          this.songHash = this.songData.data.hash;
          // console.log(this.songHash);
        });
    },
    getsonghash: function(hash) {
      this.songHash = hash;
      // console.log(this.songHash);
      this.isPlayerShow();
    },
    isPlayerShow() {
      if (this.playerShow !== true) {
        this.playerShow = !this.playerShow;
      }
    }
  },
  created() {
    this.getData();
  }
};
</script>
<style lang='scss' scoped>

</style>