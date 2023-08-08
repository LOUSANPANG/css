<template>
  <div class="progress1">
    <div class="progress"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .progress1 {
    width: 300px;
  }

  .progress {
    z-index: 10;
    height: 7px;
    background: #7C66F5;
    border-radius: 8px;
    animation: ProgressRise 2s ease, moveScaleRight 2s 4.6s alternate ease-out infinite;
    transform-origin: left center;
  }
  @keyframes ProgressRise {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
  @keyframes moveScaleRight {
    from {
      transform: translate3d(0, 0, 0) scale3d(1, 1, 1) skewX(0deg);
    }
    to {
      transform: translate3d(0, 0, 0) scale3d(1.04, 1, 1) skewX(0deg);
    }
  }
</style>