<template>
  <section id="projects" class="projects-section section">
    <div class="container">
      <div class="section-title" data-aos="fade-up">
        <h2><span class="text-gradient">Featured Projects</span></h2>
        <p>Some of my recent work</p>
      </div>

      <div class="projects-filters" data-aos="fade-up">
        <button
          v-for="filter in filters"
          :key="filter.id"
          class="filter-btn"
          :class="{ active: activeFilter === filter.id }"
          @click="activeFilter = filter.id"
        >
          {{ filter.label }}
        </button>
      </div>

      <Transition name="tab-fade" mode="out-in">
        <div class="projects-grid" :key="activeFilter">
          <ProjectCard
            v-for="(project, index) in filteredProjects"
            :key="project.id"
            :project="project"
            @click="openModal(project)"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          />
        </div>
      </Transition>

      <div v-if="filteredProjects.length === 0" class="projects-empty" data-aos="fade-up">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        <p>No projects found in this category.</p>
      </div>
    </div>

    <ProjectModal
      :is-open="isModalOpen"
      :project="selectedProject"
      @close="closeModal"
    />
  </section>
</template>

<script>
import { ref, computed, watch, nextTick } from 'vue'
import AOS from 'aos'
import ProjectCard from '@/components/ui/ProjectCard.vue'
import ProjectModal from '@/components/ui/ProjectModal.vue'
import config from '@/data/config'

export default {
  name: 'ProjectsSection',
  components: {
    ProjectCard,
    ProjectModal
  },
  setup() {
    const activeFilter = ref('all')
    const isModalOpen = ref(false)
    const selectedProject = ref(null)

    const projects = computed(() => config.projects)

    const filters = [
      { id: 'all', label: 'All Projects' },
      { id: 'web', label: 'Web Apps' },
      { id: 'mobile', label: 'Mobile Apps' },
      { id: 'desktop', label: 'Desktop Apps' },
      { id: 'other', label: 'Other' }
    ]

    const filteredProjects = computed(() => {
      if (activeFilter.value === 'all') {
        return projects.value
      }
      return projects.value.filter(project => project.category === activeFilter.value)
    })

    watch(activeFilter, async () => {
      await nextTick()
      AOS.refreshHard()
    })

    const openModal = (project) => {
      selectedProject.value = project
      isModalOpen.value = true
    }

    const closeModal = () => {
      isModalOpen.value = false
      selectedProject.value = null
    }

    return {
      activeFilter,
      filters,
      filteredProjects,
      isModalOpen,
      selectedProject,
      openModal,
      closeModal
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/style/variables';
@import '@/style/mixins';

.projects-section {
  background: linear-gradient(180deg, transparent 0%, rgba(139, 92, 246, 0.02) 100%);
  transition: box-shadow 0.3s ease;

  &.highlight {
    animation: sectionHighlight 2s ease;
  }
}

@keyframes sectionHighlight {
  0%, 100% {
    box-shadow: none;
  }
  50% {
    box-shadow: 0 0 40px rgba(139, 92, 246, 0.4);
  }
}

.projects-filters {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: map-get($border-radius, 'md');
  color: $text-secondary;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(139, 92, 246, 0.1);
    color: $primary-color;
  }

  &.active {
    background: $gradient;
    color: white;
    border-color: transparent;
    box-shadow: $shadow-glow;
  }
}

.tab-fade-enter-active,
.tab-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.tab-fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.tab-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @include respond-to('md') {
    grid-template-columns: repeat(2, 1fr);
  }

  @include respond-to('lg') {
    grid-template-columns: repeat(2, 1fr);
  }
}

.projects-empty {
  text-align: center;
  padding: 4rem 2rem;
  color: $text-muted;

  svg {
    width: 64px;
    height: 64px;
    margin-bottom: 1rem;
    opacity: 0.5;
  }

  p {
    font-size: 1.125rem;
  }
}
</style>
