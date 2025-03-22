<template>
  <!-- 外层容器 -->
  <el-container>

    <!-- 左边侧边栏 -->
    <el-aside :width='menuStore.menuWidth' class="transition-all">
      <AdminMenu></AdminMenu>
    </el-aside>

    <!-- 主容器 -->
    <el-container>
      <!-- 顶栏容器 -->
      <el-header>
        <AdminHeader></AdminHeader>
      </el-header>

      <el-main>
        <!-- 标签导航栏 -->
        <AdminTagList></AdminTagList>

        <!-- 主内容（根据路由动态展示不同页面） -->
        <router-view v-slot="{ Component }">
          <!-- max 指定最多缓存 10 个组件 -->
          <KeepAlive :max="10">
            <component :is="Component"></component>
          </KeepAlive>
        </router-view>
      </el-main>

      <!-- 底栏容器 -->
      <el-footer>
        <AdminFooter></AdminFooter>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script setup>
// 引入组件
import AdminFooter from './components/AdminFooter.vue';
import AdminHeader from './components/AdminHeader.vue';
import AdminMenu from './components/AdminMenu.vue';
import AdminTagList from './components/AdminTagList.vue';

import { useMenuStore } from '@/stores/menu'

const menuStore = useMenuStore()
</script>




<style scoped>
.el-header {
  padding: 0!important;
}

.el-footer {
  padding: 0!important;
}
</style>
