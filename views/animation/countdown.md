<script setup>
  import Countdown1 from '../../components/animation/countdown1.vue'
  import Countdown2 from '../../components/animation/countdown2.vue'
  import Countdown3 from '../../components/animation/countdown3.vue'
</script>




### 渐隐渐显倒计时

<!-- Demo -->
<Countdown1 />

<!-- 事例代码 -->
```html
<count-down style="--t: 5"></count-down>
```
```css
<style>
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
    animation: count calc( var(--t) * var(--dur) * 1s ) steps(var(--t)) forwards,
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
```




### 自上而下位移倒计时

<!-- Demo -->
<Countdown2 />

<!-- 事例代码 -->
```css
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
}
```




### 超大缩放倒计时

<!-- Demo -->
<Countdown3 />

<!-- 事例代码 -->
```css
@keyframes shark {
  0% {
    opacity: 1;
    transform: scale(1);
  }

  20% {
    opacity: 0;
    transform: scale(.4);
  }

  21% {
    opacity: 0;
    transform: scale(5);
  }
}
```