<template>
  <div>
    <BLink class="nav-link" v-bind="bindItemsAttrs" exact-active-class="active" @click.prevent="toggleExpanded">
      <div class="d-flex align-items-center">
        <span class="nav-link-icon">
          <FontAwesome v-show="icon" :name="icon" />
        </span>
        <span class="nav-link-text ps-1" v-text="title" />
      </div>
    </BLink>
    <BCollapse v-if="hasChildren" v-model="expanded" tag="ul" class="ps-3">
      <SidebarMenuItem v-for="child in children" :key="child.title" v-bind="child" />
    </BCollapse>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import FontAwesome from '../../../shared/Icon/FontAwesome/FontAwesome.vue'

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
      'to': this.hasChildren ? null : this.to,
      'aria-expanded': this.expanded,
      'class': {
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
