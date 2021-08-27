<template>
  <div :class="{'navbar-vertical-collapsed': collapsed}">
    <BNavbar type="vertical" toggleable="xl" :class="[navbarVariant]">
      <div class="d-flex align-items-center py-3">
        <div class="me-2">
          <BBtn variant="transparent" target="navbarVerticalCollapse"
                class="navbar-toggler-humburger-icon navbar-vertical-toggle">
            <Fontawesome name="bars" />
          </BBtn>
        </div>
        <BNavbarBrand :to="to">
          <div class="d-flex align-items-center">
            <img class="me-2" :src="src" :alt="title" width="40">
            <span class="font-sans-serif" v-text="title" />
          </div>
        </BNavbarBrand>
      </div>
      <BCollapse class="navbar-collapse" id="navbarVerticalCollapse" is-nav>
        <div class="navbar-vertical-content scrollbar">
          <ul class="navbar-nav flex-column mb-3" id="navbarVerticalNav">
            <SidebarMenu v-for="menu in tree" :key="menu.title" v-bind="menu" />
          </ul>
        </div>
      </BCollapse>
    </BNavbar>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Fontawesome from '../../shared/icon/fontawesome/fontawesome.vue'
import SidebarMenu, { ISidebarMenu } from './SidebarMenu/SidebarMenu.vue'

type NavbarVariants = 'transparent' | 'inverted' | 'card' | 'vibrant'

@Component({ components: { SidebarMenu, Fontawesome } })
export default class TheSidebar extends Vue {
  @Prop({ type: [String], required: true }) readonly title!: string
  @Prop({ type: [String], required: true }) readonly src!: string
  @Prop({ type: [Array], required: true }) readonly tree!: ISidebarMenu[]
  @Prop({ type: [String], default: 'card' }) readonly variant!: NavbarVariants
  @Prop({ type: [String, Object], default: null }) readonly to!: string
  @Prop({ type: [Boolean], default: false }) readonly collapsed!: boolean

  get navbarVariant () {
    return `navbar-${this.variant}`
  }
}
</script>

<style scoped>

</style>
