<template>
  <nav class="navbar navbar-light navbar-vertical navbar-expand-xl navbar-card">
    <div class="d-flex align-items-center">
      <div class="toggle-icon-wrapper">
        <BBtn variant="transparent" target="navbarVerticalCollapse"
              class="navbar-toggler-humburger-icon navbar-vertical-toggle">
          <Fontawesome name="bars" />
        </BBtn>
      </div>
      <BNavbarBrand :to="to">
        <div class="d-flex align-items-center py-3">
          <img class="me-2" src="https://prium.github.io/falcon/v3.3.0/assets/img/icons/spot-illustrations/falcon.png"
               :alt="title" width="40">
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
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Fontawesome from '../../shared/icon/fontawesome/fontawesome.vue'
import SidebarMenu, { ISidebarMenu } from './SidebarMenu/SidebarMenu.vue'

@Component({ components: { SidebarMenu, Fontawesome } })
export default class TheSidebar extends Vue {
  @Prop({ type: String, required: true }) readonly title!: string
  @Prop({ type: [String, Object], default: null }) readonly to!: string
  @Prop({ type: Array, required: true }) readonly tree!: ISidebarMenu[]
}
</script>

<style scoped>

</style>
