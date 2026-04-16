<template>
  <div class="particle-background">
    <div id="particles-js"></div>
  </div>
</template>

<script>
import { onMounted, onUnmounted } from 'vue'

export default {
  name: 'ParticleBackground',
  props: {
    color: {
      type: String,
      default: '#8B5CF6'
    },
    particleCount: {
      type: Number,
      default: 50
    },
    particleSize: {
      type: Number,
      default: 3
    },
    moveSpeed: {
      type: Number,
      default: 1
    }
  },
  setup(props) {
    let particlesInstance = null

    const initParticles = () => {
      const particlesConfig = {
        particles: {
          number: {
            value: props.particleCount,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: props.color
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: props.color
            }
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: props.particleSize,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: props.color,
            opacity: 0.2,
            width: 1
          },
          move: {
            enable: true,
            speed: props.moveSpeed,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 600
            }
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'grab'
            },
            onclick: {
              enable: true,
              mode: 'push'
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 0.5
              }
            },
            push: {
              particles_nb: 4
            },
            repulse: {
              distance: 200,
              duration: 0.4
            }
          }
        },
        retina_detect: true
      }

      if (typeof window.particlesJS !== 'undefined') {
        particlesInstance = window.particlesJS('particles-js', particlesConfig)
      }
    }

    onMounted(() => {
      initParticles()
    })

    onUnmounted(() => {
      if (particlesInstance && typeof particlesInstance.destroy === 'function') {
        particlesInstance.destroy()
      }
    })

    return {}
  }
}
</script>

<style scoped lang="scss">
.particle-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;

  #particles-js {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      ellipse at center,
      rgba(139, 92, 246, 0.1) 0%,
      transparent 70%
    );
    z-index: 1;
  }
}
</style>
