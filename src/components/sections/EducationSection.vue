<template>
  <section id="education" class="education-section section">
    <div class="container">
      <div class="section-title" data-aos="fade-up">
        <h2><span class="text-gradient">Education & Certifications</span></h2>
        <p>My academic background</p>
      </div>

      <div class="education-grid">
        <div
          v-for="(edu, index) in education"
          :key="edu.id"
          class="education-card"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div class="education-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
            </svg>
          </div>

          <div class="education-content">
            <div class="education-header">
              <span class="education-period">{{ edu.period }}</span>
            </div>
            <h3 class="education-degree">{{ edu.degree }}</h3>
            <h4 class="education-institution">{{ edu.institution }}</h4>
            <p class="education-description">{{ edu.description }}</p>

            <div v-if="edu.achievements" class="education-achievements">
              <h5>Achievements</h5>
              <ul>
                <li v-for="(achievement, i) in edu.achievements" :key="i">
                  {{ achievement }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from 'vue'
import config from '@/data/config'

export default {
  name: 'EducationSection',
  setup() {
    const education = computed(() => config.education)

    return {
      education
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/style/variables';
@import '@/style/mixins';

.education-section {
  background: linear-gradient(180deg, transparent 0%, rgba(139, 92, 246, 0.02) 100%);
}

.education-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;

  @include respond-to('lg') {
    grid-template-columns: repeat(2, 1fr);
  }
}

.education-card {
  @include card;
  padding: 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: $gradient;
  }
}

.education-icon {
  width: 56px;
  height: 56px;
  border-radius: map-get($border-radius, 'lg');
  background: rgba(139, 92, 246, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;

  svg {
    width: 28px;
    height: 28px;
    color: $primary-color;
  }
}

.education-content {
  flex: 1;
}

.education-header {
  margin-bottom: 0.5rem;
}

.education-period {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: rgba(139, 92, 246, 0.1);
  color: $primary-color;
  border-radius: map-get($border-radius, 'full');
  font-size: 0.875rem;
  font-weight: 600;
  font-family: 'JetBrains Mono', monospace;
}

.education-degree {
  font-size: 1.25rem;
  font-weight: 700;
  color: $text-primary;
  margin-bottom: 0.5rem;
}

.education-institution {
  font-size: 1rem;
  font-weight: 500;
  color: $primary-color;
  margin-bottom: 1rem;
}

.education-description {
  color: $text-secondary;
  font-size: 0.9375rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.education-achievements {
  padding-top: 1rem;
  border-top: 1px solid $border-color;

  h5 {
    font-size: 0.875rem;
    font-weight: 600;
    color: $text-primary;
    margin-bottom: 0.75rem;
  }

  ul {
    list-style: none;

    li {
      display: flex;
      align-items: flex-start;
      gap: 0.5rem;
      margin-bottom: 0.5rem;
      color: $text-secondary;
      font-size: 0.875rem;

      &::before {
        content: '→';
        color: $primary-color;
        font-weight: 600;
      }
    }
  }
}
</style>
