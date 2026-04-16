<template>
  <div class="typing-effect">
    <span class="typed-text">{{ displayedText }}</span>
    <span class="cursor" :class="{ blinking: isBlinking }">|</span>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'TypingEffect',
  props: {
    text: {
      type: String,
      required: true
    },
    speed: {
      type: Number,
      default: 100
    },
    delay: {
      type: Number,
      default: 0
    },
  },
  setup(props) {
    const displayedText = ref('')
    const isBlinking = ref(true)
    let timeoutId = null
    let currentIndex = 0

    const type = () => {
      displayedText.value = props.text.substring(0, currentIndex + 1)
      currentIndex++

      if (currentIndex === props.text.length) {
        isBlinking.value = true
        return
      }

      timeoutId = setTimeout(type, props.speed)
    }

    const startTyping = () => {
      setTimeout(() => {
        type()
      }, props.delay)
    }

    onMounted(() => {
      startTyping()
    })

    onUnmounted(() => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    })

    return {
      displayedText,
      isBlinking
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/style/variables';
@import '@/style/mixins';

.typing-effect {
  display: inline-flex;
  align-items: center;
  font-size: inherit;
  font-family: inherit;
}

.typed-text {
  color: $text-primary;
}

.cursor {
  color: $primary-color;
  font-weight: 300;
  margin-left: 2px;
  padding-right: 2px;

  &.blinking {
    animation: blink 1s infinite;
  }
}

@keyframes blink {
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
}
</style>