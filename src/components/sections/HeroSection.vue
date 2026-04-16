<template>
  <section id="hero" class="hero-section">
    <ParticleBackground />
    <div class="hero-content">
      <div class="hero-avatar" data-aos="zoom-in" data-aos-delay="200">
        <div class="avatar-wrapper">
          <div class="avatar-ring"></div>
          <div class="avatar-inner" v-if="!personal.avatar">
            {{ personal.name.charAt(0) }}
          </div>
          <img v-else :src="personal.avatar" :alt="personal.name" />
        </div>
      </div>

      <div class="hero-text">
        <h1 class="hero-title" data-aos="fade-up" data-aos-delay="300">
          Hi, I'm <span class="text-gradient">{{ personal.name }}</span>
        </h1>

        <h2 class="hero-subtitle" data-aos="fade-up" data-aos-delay="400">
          {{ personal.title }}
        </h2>

        <div class="hero-motto" data-aos="fade-up" data-aos-delay="500">
          <span class="motto-prefix">"</span>
          <TypingEffect :text="personal.motto" :speed="80" :delay="1000" />
          <span class="motto-suffix">"</span>
        </div>

        <div class="hero-actions" data-aos="fade-up" data-aos-delay="600">
          <a
            :href="`#contact`"
            class="btn btn-primary"
            @click.prevent="scrollToSection('contact')"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            Get In Touch
          </a>
          <a
            :href="personal.resume"
            class="btn btn-outline"
            download
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7,10 12,15 17,10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download CV
          </a>
        </div>

        <div class="hero-social" data-aos="fade-up" data-aos-delay="700">
          <a
            v-for="(url, platform) in socialLinks"
            :key="platform"
            :href="url"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
            :aria-label="platform"
          >
            <svg v-if="platform === 'github'" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <svg v-else-if="platform === 'linkedin'" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <svg v-else-if="platform === 'twitter'" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            <svg v-else-if="platform === 'email'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <div class="scroll-indicator" data-aos="fade-up" data-aos-delay="800">
      <span>Scroll Down</span>
      <div class="scroll-arrow">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6,9 12,15 18,9"></polyline>
        </svg>
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from 'vue'
import ParticleBackground from '@/components/ui/ParticleBackground.vue'
import TypingEffect from '@/components/ui/TypingEffect.vue'
import config from '@/data/config'

export default {
  name: 'HeroSection',
  components: {
    ParticleBackground,
    TypingEffect
  },
  setup() {
    const personal = computed(() => config.personal)
    const social = computed(() => config.social)

    const socialLinks = computed(() => ({
      github: social.value.github,
      linkedin: social.value.linkedin,
      twitter: social.value.twitter,
      email: `mailto:${social.value.email}`
    }))

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
      socialLinks,
      scrollToSection
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/style/variables';
@import '@/style/mixins';

.hero-section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 6rem 1rem;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%);
  }
}

.hero-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 800px;

  @include respond-to('md') {
    flex-direction: row;
    text-align: left;
    gap: 3rem;
  }
}

.hero-avatar {
  margin-bottom: 2rem;

  @include respond-to('md') {
    margin-bottom: 0;
    flex-shrink: 0;
  }
}

.avatar-wrapper {
  position: relative;
  width: 180px;
  height: 180px;

  @include respond-to('md') {
    width: 200px;
    height: 200px;
  }

  @include respond-to('lg') {
    width: 220px;
    height: 220px;
  }
}

.avatar-ring {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: map-get($border-radius, 'full');
  background: $gradient;
  padding: 4px;
  animation: borderGlow 3s ease-in-out infinite;

  &::before {
    content: '';
    position: absolute;
    top: 4px;
    left: 4px;
    right: 4px;
    bottom: 4px;
    background: $bg-dark;
    border-radius: map-get($border-radius, 'full');
  }
}

.avatar-inner {
  position: absolute;
  top: 8px;
  left: 8px;
  right: 8px;
  bottom: 8px;
  border-radius: map-get($border-radius, 'full');
  background: $gradient;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  font-weight: 800;
  color: white;

  @include respond-to('md') {
    font-size: 5rem;
  }
}

.avatar-wrapper img {
  position: absolute;
  top: 8px;
  left: 8px;
  right: 8px;
  bottom: 8px;
  border-radius: map-get($border-radius, 'full');
  object-fit: cover;
}

.hero-text {
  flex: 1;
}

.hero-title {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  line-height: 1.2;

  @include respond-to('md') {
    font-size: 3rem;
  }

  @include respond-to('lg') {
    font-size: 3.5rem;
  }
}

.hero-subtitle {
  font-size: 1.25rem;
  color: $text-secondary;
  margin-bottom: 1.5rem;
  font-weight: 400;

  @include respond-to('md') {
    font-size: 1.5rem;
  }
}

.hero-motto {
  font-size: 1.125rem;
  color: $text-secondary;
  margin-bottom: 2rem;
  font-style: italic;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding-right: 2px;
  white-space: nowrap;

  @include respond-to('md') {
    font-size: 1.25rem;
  }

  .motto-prefix,
  .motto-suffix {
    color: $primary-color;
    font-size: 1.5rem;

  }
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;

  @include respond-to('md') {
    justify-content: flex-start;
  }

  @include respond-below('md') {
    justify-content: center;
  }

  .btn {
    svg {
      width: 18px;
      height: 18px;
    }
  }
}

.hero-social {
  display: flex;
  gap: 1rem;
  justify-content: center;

  @include respond-to('md') {
    justify-content: flex-start;
  }
}

.social-link {
  width: 44px;
  height: 44px;
  border-radius: map-get($border-radius, 'md');
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: $text-secondary;
  transition: all 0.3s ease;

  svg {
    width: 22px;
    height: 22px;
  }

  &:hover {
    background: $primary-color;
    color: white;
    transform: translateY(-4px);
    box-shadow: $shadow-glow;
  }
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: $text-muted;
  font-size: 0.875rem;
  animation: bounce 2s infinite;

  span {
    display: none;

    @include respond-to('md') {
      display: block;
    }
  }
}

.scroll-arrow {
  svg {
    width: 24px;
    height: 24px;
  }
}
</style>
