<template>
  <li class="nav-item">
    <template v-if="title">
      <BRow class="navbar-vertical-label-wrapper mb-2">
        <BCol cols="auto" class="navbar-vertical-label" v-text="title" />
        <BCol class="ps-0">
          <hr class="mb-0 navbar-vertical-divider">
        </BCol>
      </BRow>
    </template>
    <template v-for="item in items">
      <SidebarMenuItem :key="item.title" v-bind="item" />
    </template>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Fontawesome from '../../../shared/icon/FontAwesome/FontAwesome.vue'
import SidebarMenuItem, { ISidebarMenuItem } from '../SidebarMenuItem/SidebarMenuItem.vue'

export interface ISidebarMenu {
  title?: string
  items: ISidebarMenuItem[]
}

@Component({ components: { SidebarMenuItem, Fontawesome } })
export default class SidebarMenu extends Vue implements ISidebarMenu {
  @Prop({ type: String, default: null }) readonly title!: string
  @Prop({ type: Array, required: true }) readonly items!: ISidebarMenuItem[]
}
</script>

<style scoped />
