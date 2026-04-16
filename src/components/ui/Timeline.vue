<template>
  <div class="timeline">
    <div
      v-for="(item, index) in items"
      :key="item.id"
      class="timeline-item"
      :class="{ 'reverse': index % 2 === 1 }"
      data-aos="fade-up"
      :data-aos-delay="index * 100"
    >
      <div class="timeline-content">
        <div class="timeline-header">
          <span class="timeline-period">{{ item.period }}</span>
        </div>
        <h3 class="timeline-title">{{ item.title }}</h3>
        <h4 v-if="item.subtitle" class="timeline-subtitle">{{ item.subtitle }}</h4>
        <p v-if="item.description" class="timeline-description">{{ item.description }}</p>
        <ul v-if="item.responsibilities" class="timeline-responsibilities">
          <li v-for="(resp, i) in item.responsibilities" :key="i">
            {{ resp }}
          </li>
        </ul>
        <div v-if="item.technologies" class="timeline-technologies">
          <span v-for="tech in item.technologies" :key="tech" class="tech-tag">
            {{ tech }}
          </span>
        </div>
      </div>
      <div class="timeline-marker">
        <div class="marker-dot"></div>
      </div>
      <div class="timeline-date">
        <span>{{ item.period }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExperienceTimeline',
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/style/variables';
@import '@/style/mixins';

.timeline {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    background: $border-color;
    transform: translateX(-50%);

    @include respond-below('md') {
      left: 20px;
    }
  }
}

.timeline-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 3rem;
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }

  @include respond-below('md') {
    padding-left: 60px;

    .timeline-date {
      display: none;
    }
  }

  @include respond-to('md') {
    &:nth-child(odd) {
      flex-direction: row-reverse;

      .timeline-content {
        text-align: right;
        padding-right: 3rem;
        padding-left: 0;

        .timeline-technologies {
          justify-content: flex-end;
        }
      }

      .timeline-responsibilities {
        li {
          flex-direction: row-reverse;
          text-align: right;
        }
      }
    }

    &:nth-child(even) {
      .timeline-content {
        text-align: left;
        padding-left: 3rem;
      }
    }
  }
}

.timeline-content {
  flex: 1;
  max-width: calc(50% - 40px);
}

.timeline-header {
  margin-bottom: 0.5rem;
}

.timeline-period {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: rgba(139, 92, 246, 0.1);
  color: $primary-color;
  border-radius: map-get($border-radius, 'full');
  font-size: 0.875rem;
  font-weight: 600;
  font-family: 'JetBrains Mono', monospace;
}

.timeline-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: $text-primary;
  margin-bottom: 0.25rem;
}

.timeline-subtitle {
  font-size: 1rem;
  font-weight: 500;
  color: $primary-color;
  margin-bottom: 0.75rem;
}

.timeline-description {
  color: $text-secondary;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.timeline-responsibilities {
  margin-bottom: 1rem;

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

.timeline-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  @include respond-below('md') {
    justify-content: flex-start;
  }
}

.tech-tag {
  padding: 0.25rem 0.75rem;
  background: rgba(255, 255, 255, 0.05);
  color: $text-secondary;
  border-radius: map-get($border-radius, 'md');
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.timeline-marker {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  @include respond-below('md') {
    left: 20px;
  }
}

.marker-dot {
  width: 16px;
  height: 16px;
  background: $primary-color;
  border-radius: map-get($border-radius, 'full');
  border: 3px solid $bg-dark;
  box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.2);
  animation: pulse 2s infinite;
}

.timeline-date {
  position: absolute;
  top: 0;
  left: calc(50% + 40px);
  width: calc(50% - 80px);
  text-align: left;

  span {
    font-size: 0.875rem;
    color: $text-muted;
    font-family: 'JetBrains Mono', monospace;
  }
}
</style>
