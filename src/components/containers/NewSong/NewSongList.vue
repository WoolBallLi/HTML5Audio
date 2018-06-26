<!-- new-song-list -->
<template>
  <div class="new-song-list">
    <ul class="new-song-list-ul">
      <li @click="gethash(list.hash)" class="new-song-list-li" v-for="list in listData" :key="list.audio_id">
        <span>{{list.filename}}</span>
        <i class="fa fa-download"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "new-song-list",
  props: ["listData"],
  methods: {
    gethash:function(hash){
      this.$emit('havehash',hash)
      // console.log(this.$emit)
      // console.log(this.$emit.haveHash)           
      // console.log(hash)
    }
  }
};
</script>
<style lang='scss' scoped>
.new-song-list {
  .new-song-list-ul {
    padding-left: 12px;
    .new-song-list-li {
      width: 100%;
      height: 0.7rem;
      border-bottom: 2px solid #e5e5e5;
        font-size: 18px;
        color: #333;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span{
          width: 80%;
        }
        i{
          font-size: 20px;
          color: #999;
          margin-right: 14px;
        }
    }
  }
}
</style>