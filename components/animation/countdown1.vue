<!-- 渐隐渐显倒计时 -->
<template>
  <div class="countdown1">
    <count-down style="--t: 5"></count-down>
  </div>
</template>

<style scoped>
  @property --t {
    syntax: '<integer>';
    inherits: false;
    initial-value: 0;
  }
  @counter-style stop {
    system: cyclic;
    symbols: "Go~";
    range: infinite 0;
  }

  .countdown1 {
    display: flex;
    justify-content: center;
    align-content: center;
    height: 100px;
  }

  count-down {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Consolas, Monaco, monospace;
    font-size: 120px;
  }
  count-down::after {
    --t: 5;
    --dur: 1;
    counter-reset: time var(--t);
    content: counter(time, stop);
    animation: count calc(var(--t) * var(--dur) * 1s) steps(var(--t)) forwards,
      shark calc(var(--dur) * 1s) calc(var(--dur) * .8s) calc(var(--t));
  }

  @keyframes count {
    to {
      --t: 0;
    }
  }
  @keyframes shark {
    0% {
      opacity: 1;
      transform: scale(1);
    }
    20% {
      opacity: 0;
      transform: scale(0.4);
    }
  }
</style>