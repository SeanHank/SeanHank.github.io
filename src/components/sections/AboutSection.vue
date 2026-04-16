<template>
  <section id="about" class="about-section section">
    <div class="container">
      <div class="section-title" data-aos="fade-up">
        <h2><span class="text-gradient">About Me</span></h2>
        <p>Get to know me better</p>
      </div>

      <div class="about-content">
        <div class="about-image" data-aos="fade-right">
          <div class="image-wrapper">
            <div class="image-decoration"></div>
            <div class="image-main" v-if="!personal.avatar">
              <div class="placeholder-avatar">
                {{ personal.name.charAt(0) }}
              </div>
            </div>
            <img v-else :src="personal.avatar" :alt="personal.name" />
            <div class="image-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
              </svg>
              Available for work
            </div>
          </div>
        </div>

        <div class="about-info">
          <div class="about-text" data-aos="fade-left">
            <h3>{{ personal.title }}</h3>
            <p>{{ personal.bio }}</p>
          </div>

          <div class="about-details" data-aos="fade-left" data-aos-delay="100">
            <div class="detail-item">
              <div class="detail-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div class="detail-content">
                <span class="detail-label">Location</span>
                <span class="detail-value">{{ personal.location }}</span>
              </div>
            </div>

            <div class="detail-item">
              <div class="detail-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div class="detail-content">
                <span class="detail-label">Email</span>
                <a :href="`mailto:${personal.email}`" class="detail-value">{{ personal.email }}</a>
              </div>
            </div>
          </div>

          <div class="about-stats" data-aos="fade-left" data-aos-delay="200">
            <div class="stat-item">
              <span class="stat-number">4+</span>
              <span class="stat-label">Projects</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">30+</span>
              <span class="stat-label">Happy Clients</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">7+</span>
              <span class="stat-label">Years Experience</span>
            </div>
          </div>

          <div class="about-actions" data-aos="fade-left" data-aos-delay="300">
            <a
              :href="personal.resume"
              class="btn btn-primary"
              download
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7,10 12,15 17,10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download Resume
            </a>
            <a
              href="#contact"
              class="btn btn-outline"
              @click.prevent="scrollToSection('contact')"
            >
              Contact Me
            </a>
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
  name: 'AboutSection',
  setup() {
    const personal = computed(() => config.personal)

    const scrollToSection = (id) => {
      const element = document.getElementById(id)
      if (element) {
        const offset = 80
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        })
      }
    }

    return {
      personal,
      scrollToSection
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/style/variables';
@import '@/style/mixins';

.about-section {
  background: linear-gradient(180deg, transparent 0%, rgba(139, 92, 246, 0.02) 100%);
}

.about-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @include respond-to('lg') {
    grid-template-columns: 1fr 1.2fr;
    gap: 4rem;
  }
}

.about-image {
  display: flex;
  justify-content: center;
}

.image-wrapper {
  position: relative;
  width: 100%;
  max-width: 400px;

  @include respond-to('lg') {
    max-width: none;
  }
}

.image-decoration {
  position: absolute;
  top: -20px;
  left: -20px;
  right: 20px;
  bottom: 20px;
  border: 2px solid $primary-color;
  border-radius: map-get($border-radius, 'lg');
  opacity: 0.3;
}

.image-main {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  border-radius: map-get($border-radius, 'lg');
  background: $gradient;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @include respond-to('lg') {
    max-width: 400px;
  }
}

.placeholder-avatar {
  font-size: 8rem;
  font-weight: 800;
  color: white;

  @include respond-to('md') {
    font-size: 10rem;
  }
}

.image-main img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: map-get($border-radius, 'lg');
}

.image-badge {
  position: absolute;
  bottom: -2px;
  right: -20px;
  background: $bg-card;
  padding: 1rem 1.5rem;
  border-radius: map-get($border-radius, 'lg');
  display: flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: $shadow-lg;
  border: 1px solid $border-color;
  font-size: 0.875rem;
  font-weight: 600;
  color: $success-color;

  svg {
    width: 20px;
    height: 20px;
  }

  @include respond-to('lg') {
    right: -30px;
  }
}

.about-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.about-text {
  h3 {
    font-size: 1.75rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: $text-primary;
  }

  p {
    color: $text-secondary;
    line-height: 1.8;
    font-size: 1.0625rem;
  }
}

.about-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.detail-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.detail-icon {
  width: 48px;
  height: 48px;
  border-radius: map-get($border-radius, 'md');
  background: rgba(139, 92, 246, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 24px;
    height: 24px;
    color: $primary-color;
  }
}

.detail-content {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.detail-label {
  font-size: 0.875rem;
  color: $text-muted;
  font-weight: 500;
}

.detail-value {
  font-size: 1rem;
  color: $text-primary;
  font-weight: 600;

  &:hover {
    color: $primary-color;
  }
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding: 2rem;
  background: rgba(139, 92, 246, 0.05);
  border-radius: map-get($border-radius, 'lg');
  border: 1px solid rgba(139, 92, 246, 0.1);
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  @include gradient-text;
  font-family: 'JetBrains Mono', monospace;
}

.stat-label {
  display: block;
  font-size: 0.875rem;
  color: $text-secondary;
  margin-top: 0.25rem;
}

.about-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  .btn {
    svg {
      width: 18px;
      height: 18px;
    }
  }
}
</style>
