<!-- 位移倒计时 -->
<template>
  <div class="countdown2">
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

.countdown2 {
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
  animation-iteration-count: infinite;
}

@keyframes count {
  to {
    --t: 0;
  }
}

@keyframes shark {
  0% {
    opacity: 1;
    transform: translateY(0);
  }

  20% {
    opacity: 0;
    transform: translateY(100px);
  }

  21% {
    opacity: 0;
    transform: translateY(-100px);
  }
}</style>