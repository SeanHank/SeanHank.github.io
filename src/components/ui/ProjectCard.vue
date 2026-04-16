<template>
  <div class="project-card" @click="$emit('click', project)">
    <div class="card-image">
      <img :src="project.image" :alt="project.title" loading="lazy" />
      <div class="card-overlay">
        <button class="view-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          <span>View Details</span>
        </button>
      </div>
    </div>
    <div class="card-content">
      <div class="card-category">
        <span class="category-badge">{{ categoryLabel }}</span>
      </div>
      <h3 class="card-title">{{ project.title }}</h3>
      <p class="card-description">{{ project.description }}</p>
      <div class="card-technologies">
        <span
          v-for="tech in project.technologies.slice(0, 3)"
          :key="tech"
          class="tech-tag"
        >
          {{ tech }}
        </span>
        <span v-if="project.technologies.length > 3" class="tech-tag more">
          +{{ project.technologies.length - 3 }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  emits: ['click'],
  setup(props) {
    const categoryLabel = computed(() => {
      const labels = {
        web: 'Web Application',
        mobile: 'Mobile App',
        desktop: 'Desktop App',
        other: 'Other'
      }
      return labels[props.project.category] || 'Project'
    })

    return {
      categoryLabel
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/style/variables';
@import '@/style/mixins';

.project-card {
  @include card;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-8px);

    .card-image img {
      transform: scale(1.1);
    }

    .card-overlay {
      opacity: 1;
    }
  }
}

.card-image {
  position: relative;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(15, 23, 42, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.view-btn {
  @include button-primary;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;

  svg {
    width: 20px;
    height: 20px;
  }
}

.card-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-category {
  margin-bottom: 0.75rem;
}

.category-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: rgba(139, 92, 246, 0.1);
  color: $primary-color;
  border-radius: map-get($border-radius, 'full');
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: $text-primary;
}

.card-description {
  font-size: 0.875rem;
  color: $text-secondary;
  margin-bottom: 1rem;
  @include line-clamp(3);
  flex: 1;
}

.card-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  padding: 0.25rem 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  color: $text-secondary;
  border-radius: map-get($border-radius, 'sm');
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &.more {
    background: rgba(139, 92, 246, 0.1);
    color: $primary-color;
    border-color: rgba(139, 92, 246, 0.2);
  }
}
</style>
