<template>
  <div>
    <el-menu
      default-active="main"
      class="el-menu-demo"
      router
      mode=" vertical"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      style="min-height: 100vh;"
    >
      <el-menu-item></el-menu-item>
      <el-menu-item index="main">首页</el-menu-item>
      <el-menu-item index="show">展示</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped></style>
