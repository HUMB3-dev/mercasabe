<template>
  <BNavbar type="glass" class="navbar-top navbar-expand">
    <BNavbarToggle class="btn navbar-toggler-humburger-icon navbar-toggler me-1 me-sm-3" target="navbarVerticalCollapse">
      <FontAwesome name="bars" />
    </BNavbarToggle>
    <BNavbarBrand class="me-1 me-sm-3" :to="to">
      <div class="d-flex align-items-center">
        <BImg class="me-2" :src="src" :alt="title" width="40" />
        <span class="font-sans-serif" v-text="title" />
      </div>
    </BNavbarBrand>
    <ul class="navbar-nav align-items-center d-none d-lg-block">
      <BNavItem link-classes="p-1">
        <div class="search-box">
          <BForm>
            <BFormInput v-model="search" class="px-4 ms-1 rounded-pill" type="search" placeholder="Search..." />
            <FontAwesome name="search" class="search-box-icon" />
          </BForm>
        </div>
      </BNavItem>
    </ul>
    <BNavbarNav class="ms-auto align-items-center">
      <slot />
    </BNavbarNav>
  </BNavbar>
</template>

<script lang="ts">
import { Component, Prop, VModel, Vue } from 'vue-property-decorator'
import FontAwesome from '../../shared/icon/FontAwesome/FontAwesome.vue'
import UserDropdown from './UserDropdown/UserDropdown.vue'

@Component({ components: { UserDropdown, FontAwesome } })
export default class TheHeader extends Vue {
  @VModel({ type: [String], default: null }) readonly search!: string
  @Prop({ type: [String], required: true }) readonly title!: string
  @Prop({ type: [String], required: true }) readonly src!: string
  @Prop({ type: [String, Object], default: null }) readonly to!: string

}
</script>

<style lang="scss" scoped />
