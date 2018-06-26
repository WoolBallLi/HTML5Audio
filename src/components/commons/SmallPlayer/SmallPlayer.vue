<!-- small-player -->
<template>
  <div class="small-player">
    <div class="small-player-mask"></div>
    <div class="player-box">
      <div class="box-left">
        <img :src="imgUrl" alt="">
      </div>
      <div class="box-center">
        <p>{{songInfo.songName}}</p>
        <i>{{songInfo.singerName}}</i>
      </div>
      <div class="box-right">
        <u @click="btnClick()" class="fa" :class="changeBtn"></u>
        <em class="fa fa-step-forward"></em>
        <b class="fa fa-download"></b>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "small-player",
  props: ["songHash"],
  data() {
    return {
      songInfo: [],
      imgUrl: [],
      myAudio: null,
      btnStyle: true
    };
  },
  methods: {
    getAudio() {
      this.$nextTick(function() {
        this.myAudio = document.getElementById("audio");
        // console.log(this.myAudio);
      });
    },
    getSongInfo(hash) {
      this.$axios
        .get("/kg/app/i/getSongInfo.php", {
          params: {
            cmd: "playInfo",
            hash,
            from: "mkugou"
          }
        })
        .then(res => {
          this.songInfo = res.data;
          this.imgUrl = this.songInfo.imgUrl.replace("{size}", "200");
          this.myAudio.src = this.songInfo.url;
          this.myAudio.play();
          this.btnStyle = true;
        });
    },
    btnClick() {
      this.btnStyle = !this.btnStyle;
      if (this.btnStyle) {
        this.myAudio.play();
      } else {
        this.myAudio.pause();
      }
    }
  },
  computed: {
    changeBtn() {
      return this.btnStyle ? "fa-play" : "fa-pause";
    }
  },
  watch: {
    songHash: function(newHash, oldHash) {
      if (newHash !== oldHash) {
        this.getSongInfo(newHash);
      }
    }
  },
  created() {
    this.getAudio();
    this.getSongInfo(this.songHash);
  }
};
</script>
<style lang='scss' scoped>
.small-player-mask{
    width: 100%;
  height: 0.7rem;
}
.player-box {
  width: 100%;
  height: 0.7rem;
  position: fixed;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4px;
  .box-left {
    width: 0.65rem;
    height: 0.65rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .box-center {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    p {
      width: 100%;
      font-size: 16px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      height: 26px;
    }
    i {
      font-size: 12px;
      color: #888;
    }
  }
  .box-right {
    width: 40%;
    font-size: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
</style>