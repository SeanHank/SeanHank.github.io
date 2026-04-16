<template>
  <div class="progress-bar-container">
    <div class="progress-header">
      <span class="skill-name">{{ name }}</span>
      <span class="skill-percentage">{{ level }}%</span>
    </div>
    <div class="progress-track">
      <div
        class="progress-fill"
        :style="{ width: animatedWidth + '%' }"
        :class="{ animated: isAnimated }"
      ></div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue'

export default {
  name: 'ProgressBar',
  props: {
    name: {
      type: String,
      required: true
    },
    level: {
      type: Number,
      required: true,
      validator: (value) => value >= 0 && value <= 100
    },
    animated: {
      type: Boolean,
      default: true
    },
    animationDelay: {
      type: Number,
      default: 0
    },
    animationDuration: {
      type: Number,
      default: 1500
    }
  },
  setup(props) {
    const animatedWidth = ref(0)
    const isAnimated = ref(false)

    const animateProgress = () => {
      isAnimated.value = false
      setTimeout(() => {
        isAnimated.value = true
        const startTime = Date.now()
        const startValue = 0
        const endValue = props.level
        const duration = props.animationDuration

        const animate = () => {
          const elapsed = Date.now() - startTime
          const progress = Math.min(elapsed / duration, 1)

          const easeOutQuart = 1 - Math.pow(1 - progress, 4)
          animatedWidth.value = Math.floor(startValue + (endValue - startValue) * easeOutQuart)

          if (progress < 1) {
            requestAnimationFrame(animate)
          }
        }

        requestAnimationFrame(animate)
      }, props.animationDelay)
    }

    onMounted(() => {
      if (props.animated) {
        animateProgress()
      } else {
        animatedWidth.value = props.level
      }
    })

    watch(() => props.level, () => {
      animateProgress()
    })

    return {
      animatedWidth,
      isAnimated
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/style/variables';
@import '@/style/mixins';

.progress-bar-container {
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
}

.progress-header {
  @include flex-between;
  margin-bottom: 0.5rem;
}

.skill-name {
  font-weight: 500;
  color: $text-primary;
  font-size: 0.875rem;
}

.skill-percentage {
  font-weight: 600;
  color: $primary-color;
  font-size: 0.875rem;
  font-family: 'JetBrains Mono', monospace;
}

.progress-track {
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: map-get($border-radius, 'full');
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.05) 50%,
      transparent 100%
    );
  }
}

.progress-fill {
  height: 100%;
  background: $gradient;
  border-radius: map-get($border-radius, 'full');
  position: relative;
  width: 0;
  transition: width 0.1s ease;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3)
    );
    border-radius: map-get($border-radius, 'full');
  }
}
</style>
