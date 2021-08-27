<template>
  <BNavbar type="glass" class="navbar-top navbar-expand">
    <button class="btn navbar-toggler-humburger-icon navbar-toggler me-1 me-sm-3" type="button">
      <Fontawesome name="bars" />
      <span class="navbar-toggle-icon">
        <span class="toggle-line"></span>
      </span>
    </button>
    <BNavbarBrand class="me-1 me-sm-3">
      <div class="d-flex align-items-center">
        <BImg class="me-2" :src="src" :alt="title" width="40" />
        <span class="font-sans-serif" v-text="title" />
      </div>
    </BNavbarBrand>
    <ul class="navbar-nav align-items-center d-none d-lg-block">
      <BNavItem link-classes="p-1">
        <div class="search-box">
          <BForm>
            <BFormInput v-model="search" class="px-4 ms-1 rounded-pill" type="search" placeholder="Search..."
                        @input="$emit('search', search)" />
            <Fontawesome name="search" class="search-box-icon" />
          </BForm>
        </div>
      </BNavItem>
    </ul>
    <BNavbarNav class="ms-auto align-items-center">
      <BNavItem link-classes="fs-1">
        <Fontawesome name="shopping-cart" />
      </BNavItem>

      <slot />
    </BNavbarNav>
  </BNavbar>
</template>

<script lang="ts">
import { Component, Prop, VModel, Vue } from 'vue-property-decorator'
import Fontawesome from '../../shared/icon/fontawesome/fontawesome.vue'
import UserDropdown from './UserDropdown/UserDropdown.vue'

@Component({ components: { UserDropdown, Fontawesome } })
export default class TheHeader extends Vue {
  @VModel({ type: [String], default: null }) readonly search!: string
  @Prop({ type: [String], required: true }) readonly title!: string
  @Prop({ type: [String], required: true }) readonly src!: string
}
</script>

<style scoped>

</style>
