<template>
  <div class="skill-card" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
    <div class="skill-icon">
      <div class="icon-wrapper" :class="{ hovered: isHovered }">
        <svg v-if="iconType === 'code'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="16,18 22,12 16,6"></polyline>
          <polyline points="8,6 2,12 8,18"></polyline>
        </svg>
        <svg v-else-if="iconType === 'server'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
        <svg v-else-if="iconType === 'tool'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      </div>
    </div>
    <h3 class="skill-category">{{ category }}</h3>
    <div class="skill-tags">
      <span
        v-for="(skill, index) in items.slice(0, 6)"
        :key="index"
        class="skill-tag"
        :style="{ animationDelay: `${index * 50}ms` }"
      >
        {{ skill.name }}
      </span>
      <span v-if="items.length > 6" class="skill-tag more">
        +{{ items.length - 6 }}
      </span>
    </div>
    <div class="view-details" @click="$emit('viewDetails')">
      <span>View Details</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12,5 19,12 12,19"></polyline>
      </svg>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'SkillCard',
  emits: ['viewDetails'],
  props: {
    category: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: 'code'
    },
    items: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const isHovered = ref(false)
    const iconType = computed(() => props.icon)

    const handleMouseEnter = () => {
      isHovered.value = true
    }

    const handleMouseLeave = () => {
      isHovered.value = false
    }

    return {
      isHovered,
      iconType,
      handleMouseEnter,
      handleMouseLeave
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/style/variables';
@import '@/style/mixins';

.skill-card {
  @include card;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: $gradient;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }
}

.skill-icon {
  margin-bottom: 1.5rem;
}

.icon-wrapper {
  width: 60px;
  height: 60px;
  border-radius: map-get($border-radius, 'lg');
  background: rgba(139, 92, 246, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  svg {
    width: 30px;
    height: 30px;
    color: $primary-color;
    transition: transform 0.3s ease;
  }

  &.hovered {
    background: rgba(139, 92, 246, 0.2);
    transform: scale(1.05);

    svg {
      transform: scale(1.1);
    }
  }
}

.skill-category {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: $text-primary;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.skill-tag {
  padding: 0.375rem 0.75rem;
  background: rgba(139, 92, 246, 0.1);
  color: $text-primary;
  border-radius: map-get($border-radius, 'md');
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid rgba(139, 92, 246, 0.2);
  transition: all 0.3s ease;
  animation: fadeInUp 0.5s ease forwards;
  opacity: 0;

  &:hover {
    background: rgba(139, 92, 246, 0.2);
    transform: translateY(-2px);
  }

  &.more {
    background: $primary-color;
    color: white;
    border-color: $primary-color;
  }
}

.skill-card:hover .skill-tag {
  opacity: 1;
}

.view-details {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: $primary-color;
  font-weight: 500;
  font-size: 0.875rem;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;

  svg {
    width: 16px;
    height: 16px;
    transition: transform 0.3s ease;
  }
}

.skill-card:hover .view-details {
  opacity: 1;
  transform: translateY(0);

  svg {
    transform: translateX(4px);
  }
}
</style>
