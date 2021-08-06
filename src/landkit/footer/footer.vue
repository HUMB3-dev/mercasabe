<template>
  <footer class="pt-9 bg-dark position-relative sunset">
    <div class="diagonal position-absolute" />
    <BContainer>
      <div class="border border-gray-800 mb-8" />
      <BRow>
        <BCol cols="12" md="4" lg="3" class="mr-auto">
          <BNavbarBrand to="/" class="text-primary-desat">
            <span class="font-weight-bold" v-text="title" />
          </BNavbarBrand>

          <p class="text-gray-700 mb-2 small">
            The Progressive E-Commerce Platform
          </p>

          <ul class="list-unstyled list-inline list-social mb-6 mb-md-0 d-print-none">
            <li v-for="social in socials" :key="social.icon" class="list-inline-item list-social-item mr-3">
              <a :href="social.href" class="text-decoration-none text-gray-600">
                <i class="fe" :class="social.icon" />
              </a>
            </li>
          </ul>
        </BCol>
        <BCol cols="6" md="4" lg="2" class="d-print-none">
          <h6 class="fw-bold text-uppercase text-gray-700">
            Products
          </h6>

          <ul class="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
            <li v-for="product in products" :key="product.name" class="mb-3">
              <a href="#" class="text-reset" v-text="product.name" />
            </li>
          </ul>
        </BCol>
        <BCol cols="6" md="4" lg="2" class="d-print-none">
          <!-- Heading -->
          <h6 class="fw-bold text-uppercase text-gray-700">
            Services
          </h6>

          <!-- List -->
          <ul class="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
            <li v-for="service in services" :key="service.name" class="mb-3">
              <a href="#" class="text-reset" v-text="service.name" />
            </li>
          </ul>
        </BCol>
        <BCol cols="6" md="4" lg="2" class="d-print-none">
          <h6 class="fw-bold text-uppercase text-gray-700">
            Connect
          </h6>

          <ul class="list-unstyled text-muted mb-0">
            <li v-for="connect in connects" :key="connect.name" class="mb-3">
              <a href="#" class="text-reset" v-text="connect.name" />
            </li>
          </ul>
        </BCol>
      </BRow>
    </BContainer>
    <div class="copyright" />
    <div class="bg-black d-print-none">
      <BContainer>
        <BRow align-h="between" class="py-5 px-md-4 px-xxl-0">
          <BCol md="10" class="d-inline-flex align-items-center justify-content-center justify-content-md-start">
            <ul class="list-unstyled small d-inline-flex align-items-center mb-0">
              <li v-for="legal in legals" :key="legal.name" class="mx-2">
                <BBtn variant="transparent" :to="legal.to" class="text-gray-600 px-0" v-text="legal.name" />
              </li>
            </ul>
          </BCol>
          <BCol md="1" lg="auto" class="my-3">
            <ul class="list-unstyled list-inline list-social mb-0 d-flex justify-content-around">
              <li v-for="social in socials" :key="social.icon" class="list-inline-item list-social-item mr-3">
                <a :href="social.href" class="text-decoration-none text-gray-600" target="_blank">
                  <i class="fe" :class="social.icon" />
                </a>
              </li>
            </ul>
          </BCol>
        </BRow>
      </BContainer>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class KFooter extends Vue {
  @Prop({ type: String, default: 'Merkaly' }) readonly title!: string;

  get socials () {
    return [
      {
        icon: 'fe-linkedin',
        href: 'https://www.linkedin.com/company/merkaly'
      },
      {
        icon: 'fe-twitter',
        href: 'https://twitter.com/merkaly'
      },
      {
        icon: 'fe-github',
        href: 'https://github.com/sk-merkaly'
      }
    ]
  }

  get products () {
    return [
      { name: 'Page Builder' },
      { name: 'UI Kit' },
      { name: 'Styleguide' },
      { name: 'Documentation' },
      { name: 'Changelog' }
    ]
  }

  get services () {
    return [
      { name: 'Documentation' },
      { name: 'Changelog' },
      { name: 'Page Builder' },
      { name: 'Styleguide' },
      { name: 'Notion' }
    ]
  }

  get connects () {
    return [
      { name: 'Page Builder' },
      { name: 'UI Kit' },
      { name: 'Styleguide' },
      { name: 'Documentation' },
      { name: 'Changelog' },
      { name: 'Readme.IO' }
    ]
  }

  get legals () {
    return [
      { name: 'Privacy policy', to: '/' },
      { name: 'Terms of Services', to: '/' }
    ]
  }
}
</script>

<style lang="scss" scoped>
footer {
  .diagonal {
    top: -15.125rem;
    right: 0;
    left: -50px;
    height: 25rem;
    background: linear-gradient(90deg, #ffffff0d 0%, #ffffff01 100%);
    transform: rotate(7deg);
  }

  .copyright {
    height: 1px;
    background: #fff;
    background: linear-gradient(90deg, #fff0 5%, #b1b5d34d 50%, #fff0 95%);
  }

  .bg-black {
    background-color: #161c2d59 !important;
  }

  ul {
    li {
      a {
        padding-bottom: 0.125rem;
        text-decoration: none;
        text-decoration-style: initial;
        text-decoration-color: initial;
        background-image: linear-gradient(to top, currentColor 1px, transparent 1px);
        background-repeat: no-repeat;
        background-size: 0 100%;
        transition: all ease-in-out 0.2s;

        &:hover {
          background-size: 100% 100%;
        }
      }
    }
  }
}
</style>
