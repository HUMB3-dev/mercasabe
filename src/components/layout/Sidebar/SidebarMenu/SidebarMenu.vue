<template>
  <BNavItem>
    <BRow class="navbar-vertical-label-wrapper mt-3 mb-2">
      <BCol cols="auto" class="navbar-vertical-label" v-text="title" />
      <BCol class="ps-0">
        <hr class="mb-0 navbar-vertical-divider">
      </BCol>
    </BRow>
    <template v-for="item in items">
      <SidebarMenuItem :key="item.title" v-bind="item" />
    </template>
  </BNavItem>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Fontawesome from '../../../shared/icon/fontawesome/fontawesome.vue'
import SidebarMenuItem, { ISidebarMenuItem } from '../SidebarMenuItem/SidebarMenuItem.vue'

export interface ISidebarMenu {
  title: string
  items: ISidebarMenuItem[]
}

@Component({ components: { SidebarMenuItem, Fontawesome } })
export default class SidebarMenu extends Vue implements ISidebarMenu {
  @Prop({ type: String, required: true }) readonly title!: string
  @Prop({ type: Array, required: true }) readonly items!: ISidebarMenuItem[]
}
</script>

<style scoped />
