<template>
  <button class="theme" @click="themeClick">
    <div :class="theme">
      <el-icon>
        <Sunny v-if="themeStatus" />
        <Moon v-else />
      </el-icon>
    </div>
  </button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Sunny, Moon } from "@element-plus/icons-vue";
const localTheme = localStorage.getItem("theme");
const themeStatus = ref(localTheme ? JSON.parse(localTheme) : true);
const theme = ref(themeStatus.value ? "icon light": "icon dark");
const themeClick = () => {
  themeStatus.value = !themeStatus.value;
  localStorage.setItem("theme", JSON.stringify(themeStatus.value));
  theme.value = themeStatus.value ? "icon light" : "icon dark";
};
</script>

<style>
.theme {
  width: 60px;
  height: 30px;
  border-radius: 15px;
  padding: 2px;
  box-sizing: border-box;
  padding: 2px;
  background-color: var(--vt-c-text-dark-2);
}

.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 50%;
  height: 100%;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
}
.icon.light {
  left: 0;
  background-color: aliceblue;
}
.icon.dark {
  left: 50%;
  background-color: black;
  color: white;
}
</style>
