<template>
  <section id="skills" class="skills-section section">
    <div class="container">
      <div class="section-title" data-aos="fade-up">
        <h2><span class="text-gradient">My Skills</span></h2>
        <p>Technologies and tools I work with</p>
      </div>

      <div class="skills-tabs" data-aos="fade-up">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          class="tab-btn"
          :class="{ active: activeTab === tab.id }"
          @click="activeTab = tab.id"
        >
          {{ tab.label }}
        </button>
      </div>

      <div class="skills-content">
        <Transition name="tab-fade" mode="out-in">
          <div 
            v-if="activeTab === 'cards'" 
            key="cards" 
            class="skills-cards"
          >
            <SkillCard
              v-for="(skillGroup, index) in skills"
              :key="skillGroup.category"
              :category="skillGroup.category"
              :icon="skillGroup.icon"
              :items="skillGroup.items"
              @viewDetails="scrollToProjects"
              data-aos="fade-up"
              :data-aos-delay="index * 100"
            />
          </div>

          <div 
            v-else-if="activeTab === 'progress'" 
            key="progress" 
            class="skills-progress"
          >
            <div class="progress-grid">
              <div
                v-for="(skillGroup, groupIndex) in skills"
                :key="skillGroup.category"
                class="progress-category"
                data-aos="fade-up"
                :data-aos-delay="groupIndex * 100"
              >
                <h3 class="category-title">{{ skillGroup.category }}</h3>
                <ProgressBar
                  v-for="(skill, skillIndex) in skillGroup.items"
                  :key="skill.name"
                  :name="skill.name"
                  :level="skill.level"
                  :animation-delay="(groupIndex * skillGroup.items.length + skillIndex) * 100"
                />
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, computed, watch, nextTick } from 'vue'
import AOS from 'aos'
import SkillCard from '@/components/ui/SkillCard.vue'
import ProgressBar from '@/components/ui/ProgressBar.vue'
import config from '@/data/config'

export default {
  name: 'SkillsSection',
  components: {
    SkillCard,
    ProgressBar
  },
  setup() {
    const activeTab = ref('cards')
    const skills = computed(() => config.skills)
    const circularSkills = computed(() => config.circularSkills)

    const tabs = [
      { id: 'cards', label: 'Skill Cards' },
      { id: 'progress', label: 'Skill Levels' },
    ]

    watch(activeTab, async () => {
      await nextTick()
      AOS.refreshHard()
    })

    const scrollToProjects = () => {
      const projectsSection = document.getElementById('projects')
      if (projectsSection) {
        const offset = 80
        const elementPosition = projectsSection.getBoundingClientRect().top + window.pageYOffset
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        })
        
        setTimeout(() => {
          projectsSection.classList.add('highlight')
          setTimeout(() => {
            projectsSection.classList.remove('highlight')
          }, 2000)
        }, 150)
      }
    }

    return {
      activeTab,
      skills,
      circularSkills,
      tabs,
      scrollToProjects
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/style/variables';
@import '@/style/mixins';

.skills-section {
  background: linear-gradient(180deg, rgba(139, 92, 246, 0.02) 0%, transparent 100%);
}

.skills-tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.tab-btn {
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

.skills-content {
  min-height: 400px;
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

.skills-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @include respond-to('lg') {
    grid-template-columns: repeat(3, 1fr);
  }
}

.skills-progress {
  max-width: 1000px;
  margin: 0 auto;
}

.progress-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @include respond-to('md') {
    grid-template-columns: repeat(2, 1fr);
  }

  @include respond-to('lg') {
    grid-template-columns: repeat(3, 1fr);
  }
}

.progress-category {
  padding: 2rem;
  background: $bg-card;
  border-radius: map-get($border-radius, 'lg');
  border: 1px solid $border-color;
}

.category-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: $text-primary;
  padding-bottom: 1rem;
  border-bottom: 2px solid $primary-color;
}

.skills-circular {
  max-width: 800px;
  margin: 0 auto;
}

//.circular-grid {
//  display: grid;
//  grid-template-columns: repeat(2, 1fr);
//  gap: 3rem;
//
//  @include respond-to('md') {
//    grid-template-columns: repeat(3, 1fr);
//  }
//
//  @include respond-to('lg') {
//    grid-template-columns: repeat(6, 1fr);
//  }
//}
</style>
