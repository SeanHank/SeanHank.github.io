<template>
  <div id="app">
    <NavBar />
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
    </main>
    <FooterSection />
    <BackToTop />
  </div>
</template>

<script>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

import NavBar from '@/components/layout/NavBar.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import EducationSection from '@/components/sections/EducationSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import FooterSection from '@/components/sections/FooterSection.vue'
import BackToTop from '@/components/layout/BackToTop.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    HeroSection,
    AboutSection,
    SkillsSection,
    ProjectsSection,
    ExperienceSection,
    EducationSection,
    ContactSection,
    FooterSection,
    BackToTop
  },
  setup() {
    onMounted(() => {
      AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50,
        delay: 100,
        mirror: false,
        anchorPlacement: 'top-bottom'
      })
    })

    return {}
  }
}
</script>

<style lang="scss">
@import '@/style/main.scss';
</style>
