<script setup lang="ts">
import BasicLayout from "#/layout/BasicLayout.vue";

</script>

<template>
  <BasicLayout>
    <div class="w-full h-full flex items-center justify-center">
      <div class="w-1/2"></div>
      <div class="w-1/2 flex items-center justify-center">
        <div class="loginCard px-14 py-10 rounded">
          <RouterView/>
        </div>
      </div>
    </div>
  </BasicLayout>
</template>

<style scoped lang="scss">
.bg {
  background-image: url("/assets/loginSideBg.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.loginCard{
  background: rgba(255, 255, 255, 0.7);
  width: 500px;
}
</style>
