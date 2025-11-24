<script setup lang="ts">
import BasicLayout from "#/layout/BasicLayout.vue";
import LayoutContent from "./unit/LayoutContent.vue";
import LayoutHeader from "./unit/LayoutHeader.vue";
import LayoutMenu from "./unit/LayoutMenu.vue";

</script>

<template>
  <BasicLayout>
    <div class="h-full layout-container flex flex-col">
      <LayoutHeader />
      <div class="flex flex-1  overflow-hidden">
        <LayoutMenu />
        <LayoutContent>
          <slot />
        </LayoutContent>
      </div>
    </div>
  </BasicLayout>
</template>
<style scoped lang="scss">
.layout-container {
  background: linear-gradient(128deg, #042a92, #9bb4ff 72.12%);
}
</style>