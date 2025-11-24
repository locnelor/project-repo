<template>
  <div class="w-screen h-screen bg">
    <slot/>
  </div>
</template>

<style scoped lang="scss">
.bg{
  background-image: url("/assets/background.png");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
