<template>
  <Transition name="fade">
    <button
      v-if="isVisible"
      class="back-to-top"
      @click="scrollToTop"
      aria-label="Back to top"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="18,15 12,9 6,15"></polyline>
      </svg>
    </button>
  </Transition>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'BackToTop',
  setup() {
    const isVisible = ref(false)

    const handleScroll = () => {
      isVisible.value = window.scrollY > 500
    }

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
      handleScroll()
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      isVisible,
      scrollToTop
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/style/variables';
@import '@/style/mixins';

.back-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border-radius: map-get($border-radius, 'full');
  background: $gradient;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: $shadow-lg;
  transition: all 0.3s ease;
  z-index: 1020;

  svg {
    width: 24px;
    height: 24px;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: $shadow-glow;

    svg {
      transform: translateY(-2px);
    }
  }

  &:active {
    transform: translateY(0);
  }

  @include respond-below('md') {
    bottom: 1.5rem;
    right: 1.5rem;
    width: 45px;
    height: 45px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
