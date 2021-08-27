<template>
  <div :class="{'ms-3': isChild}">
    <BNavItem @click.prevent="toggleExpanded" v-bind="bindItemsAttrs">
      <div class="d-flex align-items-center">
      <span v-if="!isChild" class="nav-link-icon">
        <FontAwesome v-if="icon" :name="icon" />
      </span>
        <span class="nav-link-text ps-1">
        <span v-text="title" />
      </span>
      </div>
    </BNavItem>

    <BCollapse v-if="hasChildren" v-model="expanded" class="mt-2">
      <SidebarMenuItem v-for="child in children" :key="child.title" v-bind="child" />
    </BCollapse>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import FontAwesome from '../../../shared/icon/fontawesome/fontawesome.vue'

export interface ISidebarMenuItem {
  title: string
  icon?: string
  to?: string | Record<string, unknown>
  children: ISidebarMenuItem[]
}

@Component({ components: { FontAwesome, SidebarMenuItem } })
export default class SidebarMenuItem extends Vue implements ISidebarMenuItem {
  @Prop({ type: [String, Object] }) readonly to!: string
  @Prop({ type: String }) readonly icon!: string
  @Prop({ type: String, required: true }) readonly title!: boolean
  @Prop({ type: Array, default: () => [] }) readonly children!: ISidebarMenuItem[]
  protected expanded = false

  get hasChildren () {
    return !!this.children.length
  }

  get bindItemsAttrs () {
    return {
      to: this.hasChildren ? null : this.to,
      'link-attrs': {
        'aria-expanded': this.expanded
      },
      'link-classes': {
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
