<template>
  <div>
    <el-container style="height: 100vh;">
      <el-aside width="200px">
        <!-- Aside content -->
        <Sidebar></Sidebar>
      </el-aside>
      <el-container>
        <el-header width="100%" style="margin-left:-1px; padding:0;">
          <!-- Header content -->
          <Topbar></Topbar>
        </el-header>
        <el-main height="">
          <!-- Main content -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';

export default {
  name: '',
  data() {
    return {};
  },
  components: {
    Topbar,
    Sidebar
  }
};
</script>
<style scoped></style>
