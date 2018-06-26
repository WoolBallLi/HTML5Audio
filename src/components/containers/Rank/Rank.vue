<!-- rank -->
<template>
  <div class="toptop">
    <header-nav></header-nav>
    <div class="rank-list pad-top">
      <ul>
          <li v-for="rank in ranks" :key="rank.rankid">
            <a>
            <div class="panel-left">
              <img :src="rank.imgurl.replace(/{size}/g,400)" >
            </div>
            <div class="panel-conent">
              <p>{{rank.rankname}}</p>
            </div>
            <div class="fa fa-chevron-right"></div>
             </a>
          </li>
     </ul>
    </div>
  </div>
</template>

<script>
import HeaderNav from "../../commons/Header/HeaderNav";
 
export default {
  name: "rank",
  data (){
    return {
      ranks:[]
    }
  },
  components: { HeaderNav },
  methods:{
    getranks(){
      this.$axios.get('/kg/rank/list&json=true').then(res=>{
       this.ranks= res.data.rank.list;     
 
      })
    }
  },beforeMount(){
   this.getranks()
  }
};
</script>

<style lang='scss' scoped>
.rank-list{
  width:100%;
  ul li a{
    height:0.9rem;
    display:flex;
    justify-content:space-around;
    align-items:center;
    border-bottom:1px solid #ccc;
    margin-left:0.05rem;
    .panel-left{
      width:0.7rem;
      height:0.7rem;
      img{
        width:100%;
        height:100%;
      }
    }
    .panel-conent{
      p{
        width:2.49rem;
        height:0.7rem;
        line-height:0.7rem;
      }
    }
    .fa{
      width:0.28rem;
      height:0.7rem;
       line-height:0.7rem;
       text-align:center;
       
    }
  }
}
</style>