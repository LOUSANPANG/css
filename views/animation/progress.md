<script setup>
  import Progress1 from '../../components/animation/progress1.vue'
</script>




## 平滑进度条 + 无限向右弹动


<!-- Demo -->
<Progress1 />

<!-- 事例代码 -->
```html
<div class="progress"></div>
```
```css
.progress {
  z-index: 10;
  height: 7px;
  background-image: #7C66F5;
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
```


## 