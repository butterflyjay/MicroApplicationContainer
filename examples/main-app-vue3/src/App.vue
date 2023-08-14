<template>
  <el-container class="common-layout">
    <el-header class="title">
      <router-link to="/" active-class="" exact-active-class="">
        <h1 title="<Main-app>">&lt; Main-app &gt;</h1>
      </router-link>
      <Switch/>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu :router="true">
          <el-menu-item v-for="(item, i) in appList" :key="i" :index="item.route">
            <el-icon><component :is="item.icon"></component></el-icon> {{ item.name }}
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup lang="ts">
import Switch from "./components/Switch.vue";
import { reactive, markRaw } from "vue";
import { Pear, Watermelon } from "@element-plus/icons-vue";
const appList = reactive([
  {
    name: "Micro App React",
    icon: markRaw(Pear),
    route: "/react",
    entry: "",
  },
  {
    name: "Micro App Vue3",
    icon: markRaw(Watermelon),
    route: "/vue3",
    entry: "",
  },
]);
</script>
<style scoped>
.common-layout {
  height: 100vh;
}
.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(48, 65, 86);
}

.el-header > a {
  text-decoration: none;
}

.el-header h1 {
  position: relative;
  color: white;
  font-weight: bolder;
  text-shadow: -2px -1px 0 #ff0050;
}

.el-header h1::after {
  content: attr(title);
  display: block;
  position: absolute;
  z-index: 9;
  top: 0;
  left: 0;
  text-shadow: none;
  background-image: linear-gradient(
    -45deg,
    rgba(0, 250, 240, 0),
    rgba(0, 250, 240, 0) 45%,
    rgb(0, 250, 240) 50%,
    rgba(0, 250, 240, 0) 55%,
    rgba(0, 250, 240, 0)
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: title 2s linear infinite;
}

@keyframes title {
  0% {
    background-position-x: 0;
  }
  100% {
    background-position-x: 160px;
  }
}
.el-menu {
  height: 100%;
}
</style>
