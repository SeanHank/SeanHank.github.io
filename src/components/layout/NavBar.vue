<template>
  <nav class="navbar" :class="{ scrolled: isScrolled, 'mobile-open': isMobileMenuOpen }">
    <div class="navbar-container">
      <div class="navbar-brand">
        <a href="#" class="brand-link" @click.prevent="scrollToTop">
          <div class="brand-avatar" v-if="!personal.avatar">
            {{ personal.name.charAt(0) }}
          </div>
          <img v-else :src="personal.avatar" :alt="personal.name" class="brand-image" />
          <span class="brand-name">{{ personal.name }}</span>
        </a>
      </div>

      <div class="navbar-menu" :class="{ active: isMobileMenuOpen }">
        <a
          v-for="link in navLinks"
          :key="link.id"
          :href="`#${link.id}`"
          class="nav-link"
          :class="{ active: activeSection === link.id }"
          @click.prevent="scrollToSection(link.id)"
        >
          {{ link.label }}
        </a>
        <a
          :href="personal.resume"
          class="nav-link resume-btn hide-mobile"
          download
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7,10 12,15 17,10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Resume
        </a>
      </div>

      <button
        class="navbar-toggle"
        :class="{ active: isMobileMenuOpen }"
        @click="toggleMobileMenu"
        aria-label="Toggle navigation menu"
      >
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import config from '@/data/config'

export default {
  name: 'NavBar',
  setup() {
    const isScrolled = ref(false)
    const isMobileMenuOpen = ref(false)
    const activeSection = ref('hero')
    const personal = ref(config.personal)

    const navLinks = [
      { id: 'about', label: 'About' },
      { id: 'skills', label: 'Skills' },
      { id: 'projects', label: 'Projects' },
      { id: 'experience', label: 'Experience' },
      { id: 'education', label: 'Education' },
      { id: 'contact', label: 'Contact' }
    ]

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 50

      const sections = navLinks.map(link => link.id)
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          activeSection.value = sections[i]
          break
        }
      }

      if (window.scrollY < 100) {
        activeSection.value = 'hero'
      }
    }

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
      isMobileMenuOpen.value = false
    }

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      isMobileMenuOpen.value = false
    }

    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
      handleScroll()
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      isScrolled,
      isMobileMenuOpen,
      activeSection,
      navLinks,
      personal,
      scrollToSection,
      scrollToTop,
      toggleMobileMenu
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/style/variables';
@import '@/style/mixins';

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1030;
  padding: 1rem 0;
  transition: all 0.3s ease;

  &.scrolled {
    @include glassmorphism;
    padding: 0.75rem 0;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }

  @include respond-below('md') {
    &.scrolled {
      padding: 0.5rem 0;
    }
  }
}

.navbar-container {
  @include container;
  @include flex-between;
}

.navbar-brand {
  z-index: 10;
}

.brand-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: $text-primary;
}

.brand-avatar {
  width: 40px;
  height: 40px;
  border-radius: map-get($border-radius, 'full');
  background: $gradient;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.25rem;
  color: white;
}

.brand-image {
  width: 40px;
  height: 40px;
  border-radius: map-get($border-radius, 'full');
  object-fit: cover;
}

.brand-name {
  font-weight: 600;
  font-size: 1.25rem;

  @include respond-below('md') {
    display: none;
  }
}

.navbar-menu {
  display: flex;
  align-items: center;
  gap: 2rem;

  @include respond-below('md') {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: $bg-dark;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;

    &.active {
      opacity: 1;
      visibility: visible;

      .nav-link {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
}

.nav-link {
  position: relative;
  color: $text-secondary;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9375rem;
  transition: color 0.3s ease;
  padding: 0.5rem 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: $gradient;
    transition: width 0.3s ease;
  }

  &:hover,
  &.active {
    color: $primary-color;

    &::after {
      width: 100%;
    }
  }

  @include respond-below('md') {
    font-size: 1.5rem;
    transform: translateY(20px);
    opacity: 0;
    transition: all 0.3s ease;

    &:nth-child(1) { transition-delay: 0.1s; }
    &:nth-child(2) { transition-delay: 0.15s; }
    &:nth-child(3) { transition-delay: 0.2s; }
    &:nth-child(4) { transition-delay: 0.25s; }
    &:nth-child(5) { transition-delay: 0.3s; }
    &:nth-child(6) { transition-delay: 0.35s; }

    &.active::after {
      width: 0;
    }
  }
}

.resume-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.25rem;
  background: $gradient;
  color: white !important;
  border-radius: map-get($border-radius, 'md');
  font-weight: 600;
  transition: all 0.3s ease;

  svg {
    width: 18px;
    height: 18px;
  }

  &::after {
    display: none;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: $shadow-glow;
  }

  @include respond-below('md') {
    display: none;
  }
}

.navbar-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 10;

  @include respond-below('md') {
    display: flex;
  }
}

.hamburger-line {
  width: 100%;
  height: 3px;
  background: $text-primary;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.navbar-toggle.active {
  .hamburger-line {
    &:nth-child(1) {
      transform: rotate(45deg) translate(6px, 6px);
    }

    &:nth-child(2) {
      opacity: 0;
    }

    &:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -7px);
    }
  }
}
</style>
