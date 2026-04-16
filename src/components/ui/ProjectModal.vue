<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="isOpen" class="modal-backdrop" @click.self="closeModal">
        <div class="modal-container" role="dialog" aria-modal="true">
          <button class="modal-close" @click="closeModal" aria-label="Close modal">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <div class="modal-content">
            <div class="modal-image">
              <img :src="project.image" :alt="project.title" />
            </div>

            <div class="modal-body">
              <div class="modal-header">
                <span class="modal-category">{{ categoryLabel }}</span>
                <h2 class="modal-title">{{ project.title }}</h2>
                <p class="modal-description">{{ project.description }}</p>
              </div>

              <div class="modal-section">
                <h3>Key Features</h3>
                <ul class="features-list">
                  <li v-for="(feature, index) in project.features" :key="index">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polyline points="20,6 9,17 4,12"></polyline>
                    </svg>
                    {{ feature }}
                  </li>
                </ul>
              </div>

              <div class="modal-section">
                <h3>Technologies</h3>
                <div class="tech-tags">
                  <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
                    {{ tech }}
                  </span>
                </div>
              </div>

              <div class="modal-actions">
                <a
                  v-if="project.github"
                  :href="project.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-outline"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View on GitHub
                </a>
                <a
                  v-if="project.demo"
                  :href="project.demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-primary"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15,3 21,3 21,9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script>
import { computed, watch, onMounted, onUnmounted } from 'vue'

export default {
  name: 'ProjectModal',
  props: {
    isOpen: {
      type: Boolean,
      required: true
    },
    project: {
      type: Object,
      default: null
    }
  },
  emits: ['close'],
  setup(props, { emit }) {
    const categoryLabel = computed(() => {
      if (!props.project) return ''
      const labels = {
        web: 'Web Application',
        mobile: 'Mobile App',
        desktop: 'Desktop App',
        other: 'Other'
      }
      return labels[props.project.category] || 'Project'
    })

    const closeModal = () => {
      emit('close')
    }

    const handleEscape = (e) => {
      if (e.key === 'Escape' && props.isOpen) {
        closeModal()
      }
    }

    const handleEscapeWrapper = (e) => handleEscape(e)

    watch(() => props.isOpen, (newVal) => {
      if (newVal) {
        document.body.style.overflow = 'hidden'
        document.addEventListener('keydown', handleEscapeWrapper)
      } else {
        document.body.style.overflow = ''
        document.removeEventListener('keydown', handleEscapeWrapper)
      }
    })

    onMounted(() => {
      if (props.isOpen) {
        document.body.style.overflow = 'hidden'
      }
    })

    onUnmounted(() => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleEscapeWrapper)
    })

    return {
      categoryLabel,
      closeModal
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/style/variables';
@import '@/style/mixins';

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  overflow-y: auto;
}

.modal-container {
  background: $bg-card;
  border-radius: map-get($border-radius, 'lg');
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow: hidden;
  position: relative;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: map-get($border-radius, 'full');
  color: white;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background: $primary-color;
    transform: rotate(90deg);
  }
}

.modal-content {
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  overflow-y: auto;
}

.modal-image {
  height: 250px;
  overflow: hidden;

  @include respond-to('md') {
    height: 300px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.modal-body {
  padding: 2rem;
}

.modal-header {
  margin-bottom: 2rem;
}

.modal-category {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: rgba(139, 92, 246, 0.1);
  color: $primary-color;
  border-radius: map-get($border-radius, 'full');
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.75rem;
}

.modal-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: $text-primary;
}

.modal-description {
  font-size: 1rem;
  color: $text-secondary;
  line-height: 1.6;
}

.modal-section {
  margin-bottom: 2rem;

  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: $text-primary;
  }
}

.features-list {
  list-style: none;

  li {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
    color: $text-secondary;

    svg {
      width: 20px;
      height: 20px;
      color: $success-color;
      flex-shrink: 0;
      margin-top: 2px;
    }
  }
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  padding: 0.5rem 1rem;
  background: rgba(139, 92, 246, 0.1);
  color: $primary-color;
  border-radius: map-get($border-radius, 'md');
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid rgba(139, 92, 246, 0.2);
}

.modal-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  .btn {
    flex: 1;
    min-width: 200px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
}

.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;

  .modal-container {
    transition: all 0.3s ease;
  }
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;

  .modal-container {
    transform: scale(0.95) translateY(-20px);
  }
}
</style>
