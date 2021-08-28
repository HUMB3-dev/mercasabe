<template>
  <BNavItem @click.prevent="toggleExpanded" v-bind="bindItemsAttrs" exact-active-class="active">
    <div class="d-flex align-items-center">
      <span v-if="!isChild" class="nav-link-icon">
        <FontAwesome v-if="icon" :name="icon" />
      </span>
      <span class="nav-link-text ps-1">
        <span v-text="title" />
      </span>
    </div>
    <BNavbarNav v-if="hasChildren">
      <BCollapse v-model="expanded" class="mt-2">
        <SidebarMenuItem v-for="child in children" :key="child.title" v-bind="child" />
      </BCollapse>
    </BNavbarNav>
  </BNavItem>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import FontAwesome from '../../../shared/icon/fontawesome/fontawesome.vue'

export interface ISidebarMenuItem {
  title: string
  icon?: string
  to?: string | Record<string, any>
  children?: ISidebarMenuItem[]
}

@Component({ components: { FontAwesome, SidebarMenuItem } })
export default class SidebarMenuItem extends Vue implements ISidebarMenuItem {
  @Prop({ type: [String, Object] }) readonly to!: string
  @Prop({ type: String }) readonly icon!: string
  @Prop({ type: String, required: true }) readonly title!: string
  @Prop({ type: Array, default: () => [] }) readonly children!: ISidebarMenuItem[]
  protected expanded = false

  get hasChildren () {
    return !!this.children.length
  }

  get bindItemsAttrs () {
    return {
      to: this.hasChildren ? null : this.to,
      'link-attrs': {
        'aria-expanded': this.expanded,
      },
      'link-classes': {
        'ps-0': !this.isChild,
        'dropdown-indicator': this.hasChildren
      }
    }
  }

  get isChild () {
    return this.$options.name === this.$parent.$parent.$options.name
  }

  protected toggleExpanded () {
    return this.expanded = !this.expanded
  }
}
</script>

<style scoped>

</style>
