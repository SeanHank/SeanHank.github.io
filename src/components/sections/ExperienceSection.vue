<template>
  <section id="experience" class="experience-section section">
    <div class="container">
      <div class="section-title" data-aos="fade-up">
        <h2><span class="text-gradient">Work Experience</span></h2>
        <p>My professional journey</p>
      </div>

      <Timeline :items="timelineItems" />
    </div>
  </section>
</template>

<script>
import { computed } from 'vue'
import Timeline from '@/components/ui/Timeline.vue'
import config from '@/data/config'

export default {
  name: 'ExperienceSection',
  components: {
    Timeline
  },
  setup() {
    const experience = computed(() => config.experience)

    const timelineItems = computed(() => {
      return experience.value.map(item => ({
        id: item.id,
        title: item.position,
        subtitle: item.company,
        period: item.period,
        description: item.description,
        responsibilities: item.responsibilities,
        technologies: item.technologies
      }))
    })

    return {
      timelineItems
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/style/variables';
@import '@/style/mixins';

.experience-section {
  background: linear-gradient(180deg, rgba(139, 92, 246, 0.02) 0%, transparent 100%);
}
</style>
