<template>
  <section id="contact" class="contact-section section">
    <div class="container">
      <div class="section-title" data-aos="fade-up">
        <h2><span class="text-gradient">Get In Touch</span></h2>
        <p>Let's work together</p>
      </div>

      <div class="contact-content">
        <div class="contact-info" data-aos="fade-right">
          <h3>Let's connect</h3>
          <p>
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your visions. Feel free to reach out!
          </p>

          <div class="contact-methods">
            <a :href="`mailto:${contact.email}`" class="contact-method">
              <div class="method-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div class="method-content">
                <span class="method-label">Email</span>
                <span class="method-value">{{ contact.email }}</span>
              </div>
            </a>

            <div class="contact-method">
              <div class="method-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12,6 12,12 16,14"></polyline>
                </svg>
              </div>
              <div class="method-content">
                <span class="method-label">Response Time</span>
                <span class="method-value">{{ contact.responseTime }}</span>
              </div>
            </div>
          </div>

          <div class="contact-social">
            <h4>Follow Me</h4>
            <div class="social-links">
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
              </a>
            </div>
          </div>
        </div>

        <div class="contact-form-wrapper" data-aos="fade-left">
          <form class="contact-form" @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                v-model="formData.name"
                placeholder="Your Name"
                required
              />
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                v-model="formData.email"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div class="form-group">
              <label for="subject">Subject</label>
              <input
                type="text"
                id="subject"
                v-model="formData.subject"
                placeholder="Project Inquiry"
                required
              />
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <textarea
                id="message"
                v-model="formData.message"
                placeholder="Your message..."
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" class="btn btn-primary btn-submit" :disabled="isSubmitting">
              <span v-if="!isSubmitting">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22,2 15,22 11,13 2,9"></polygon>
                </svg>
                Send Message
              </span>
              <span v-else class="loading">
                <svg class="spinner" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" fill="none" stroke-dasharray="60 30"></circle>
                </svg>
                Sending...
              </span>
            </button>

            <div v-if="submitMessage" class="submit-message" :class="submitStatus">
              {{ submitMessage }}
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, computed, reactive } from 'vue'
import config from '@/data/config'

export default {
  name: 'ContactSection',
  setup() {
    const contact = computed(() => config.contact)
    const social = computed(() => config.social)

    const socialLinks = computed(() => ({
      github: social.value.github,
      linkedin: social.value.linkedin,
      twitter: social.value.twitter
    }))

    const formData = reactive({
      name: '',
      email: '',
      subject: '',
      message: ''
    })

    const isSubmitting = ref(false)
    const submitMessage = ref('')
    const submitStatus = ref('')

    const handleSubmit = async () => {
      isSubmitting.value = true
      submitMessage.value = ''

      setTimeout(() => {
        isSubmitting.value = false
        submitStatus.value = 'success'
        submitMessage.value = 'Thank you! Your message has been sent successfully.'

        formData.name = ''
        formData.email = ''
        formData.subject = ''
        formData.message = ''

        setTimeout(() => {
          submitMessage.value = ''
        }, 5000)
      }, 1500)
    }

    return {
      contact,
      socialLinks,
      formData,
      isSubmitting,
      submitMessage,
      submitStatus,
      handleSubmit
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/style/variables';
@import '@/style/mixins';

.contact-section {
  background: linear-gradient(180deg, rgba(139, 92, 246, 0.02) 0%, transparent 100%);
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @include respond-to('lg') {
    grid-template-columns: 1fr 1.2fr;
    gap: 4rem;
  }
}

.contact-info {
  h3 {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: $text-primary;
  }

  > p {
    color: $text-secondary;
    line-height: 1.8;
    margin-bottom: 2rem;
  }
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.contact-method {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: $bg-card;
  border-radius: map-get($border-radius, 'lg');
  border: 1px solid $border-color;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    border-color: $primary-color;
    transform: translateX(8px);
  }
}

.method-icon {
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

.method-content {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.method-label {
  font-size: 0.875rem;
  color: $text-muted;
  font-weight: 500;
}

.method-value {
  font-size: 1rem;
  color: $text-primary;
  font-weight: 600;
}

.contact-social {
  h4 {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: $text-primary;
  }
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  width: 48px;
  height: 48px;
  border-radius: map-get($border-radius, 'md');
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: $text-secondary;
  transition: all 0.3s ease;

  svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    background: $primary-color;
    color: white;
    transform: translateY(-4px);
    box-shadow: $shadow-glow;
  }
}

.contact-form-wrapper {
  background: $bg-card;
  padding: 2.5rem;
  border-radius: map-get($border-radius, 'lg');
  border: 1px solid $border-color;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-size: 0.875rem;
    font-weight: 600;
    color: $text-primary;
  }

  input,
  textarea {
    padding: 0.875rem 1rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid $border-color;
    border-radius: map-get($border-radius, 'md');
    color: $text-primary;
    font-size: 1rem;
    transition: all 0.3s ease;
    resize: vertical;

    &::placeholder {
      color: $text-muted;
    }

    &:focus {
      outline: none;
      border-color: $primary-color;
      box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
    }
  }
}

.btn-submit {
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  margin-top: 0.5rem;

  > span:not(.loading) {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  svg {
    width: 20px;
    height: 20px;
  }

  .loading {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .spinner {
    width: 20px;
    height: 20px;
    animation: spin 1s linear infinite;
  }
}

.submit-message {
  padding: 1rem;
  border-radius: map-get($border-radius, 'md');
  text-align: center;
  font-weight: 500;

  &.success {
    background: rgba(16, 185, 129, 0.1);
    color: $success-color;
    border: 1px solid rgba(16, 185, 129, 0.2);
  }

  &.error {
    background: rgba(239, 68, 68, 0.1);
    color: $error-color;
    border: 1px solid rgba(239, 68, 68, 0.2);
  }
}
</style>
