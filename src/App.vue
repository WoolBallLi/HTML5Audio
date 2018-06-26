<template>
  <div id="app">
    <app-header></app-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <audio id="audio"></audio>
  </div>
</template>

<script>
import AppHeader from "./components/commons/Header/Header";
export default {
  name: "App",
  components: {
    AppHeader
  }
};
</script>

<style>
@import "./stylesheets/_reset.scss";
@import "./stylesheets/_common.scss";
</style>
