<template>
  <div class="circle-chart-container" ref="chartContainer">
    <svg class="circle-chart" :width="size" :height="size" :viewBox="`0 0 ${size} ${size}`">
      <circle
        class="circle-bg"
        :cx="center"
        :cy="center"
        :r="radius"
        fill="none"
        :stroke-width="strokeWidth"
      />
      <circle
        class="circle-progress"
        :cx="center"
        :cy="center"
        :r="radius"
        fill="none"
        :stroke-width="strokeWidth"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="animatedOffset"
        :style="{ stroke: color }"
      />
      <text
        class="percentage-text"
        :x="center"
        :y="center"
        text-anchor="middle"
        :dy="textDy"
        fill="#F8FAFC"
      >
        {{ animatedPercentage }}%
      </text>
    </svg>
    <div class="skill-name">{{ name }}</div>
  </div>
</template>

<script>
import { ref, computed, onMounted, watch } from 'vue'

export default {
  name: 'CircleChart',
  props: {
    name: {
      type: String,
      required: true
    },
    percentage: {
      type: Number,
      required: true,
      validator: (value) => value >= 0 && value <= 100
    },
    size: {
      type: Number,
      default: 120
    },
    strokeWidth: {
      type: Number,
      default: 10
    },
    color: {
      type: String,
      default: '#8B5CF6'
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
      default: 2000
    }
  },
  setup(props) {
    const animatedPercentage = ref(0)

    const center = computed(() => props.size / 2)
    const radius = computed(() => (props.size - props.strokeWidth) / 2)
    const circumference = computed(() => 2 * Math.PI * radius.value)
    const textDy = computed(() => '0.35em')

    const animatedOffset = computed(() => {
      const offset = circumference.value - (animatedPercentage.value / 100) * circumference.value
      return offset
    })

    const animatePercentage = () => {
      animatedPercentage.value = 0
      setTimeout(() => {
        const startTime = Date.now()
        const startValue = 0
        const endValue = props.percentage
        const duration = props.animationDuration

        const animate = () => {
          const elapsed = Date.now() - startTime
          const progress = Math.min(elapsed / duration, 1)

          const easeOutQuart = 1 - Math.pow(1 - progress, 4)
          animatedPercentage.value = Math.floor(startValue + (endValue - startValue) * easeOutQuart)

          if (progress < 1) {
            requestAnimationFrame(animate)
          } else {
            animatedPercentage.value = endValue
          }
        }

        requestAnimationFrame(animate)
      }, props.animationDelay)
    }

    onMounted(() => {
      if (props.animated) {
        animatePercentage()
      } else {
        animatedPercentage.value = props.percentage
      }
    })

    watch(() => props.percentage, () => {
      if (props.animated) {
        animatePercentage()
      } else {
        animatedPercentage.value = props.percentage
      }
    })

    return {
      animatedPercentage,
      center,
      radius,
      circumference,
      animatedOffset,
      textDy
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/style/variables';
@import '@/style/mixins';

.circle-chart-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.circle-chart {
  transform: rotate(-90deg);
  filter: drop-shadow(0 0 10px rgba(139, 92, 246, 0.3));
}

.circle-bg {
  stroke: rgba(255, 255, 255, 0.1);
}

.circle-progress {
  stroke-linecap: round;
  transition: stroke-dashoffset 0.1s ease;
}

.percentage-text {
  font-size: 1.25rem;
  font-weight: 700;
  font-family: 'JetBrains Mono', monospace;
  transform: rotate(90deg);
  transform-origin: center;
}

.skill-name {
  font-size: 0.875rem;
  font-weight: 500;
  color: $text-primary;
  text-align: center;
}
</style>
