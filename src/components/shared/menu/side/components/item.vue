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
      <slot />
    </BCollapse>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import FontAwesome from '../../../icon/fontawesome/fontawesome.vue'

@Component({ components: { FontAwesome } })
export default class SideMenuItem extends Vue {
  @Prop({ type: String }) to!: string
  @Prop({ type: String }) icon!: string
  @Prop({ type: String, required: true }) title!: string
  protected expanded = false

  get hasChildren () {
    return !!this.$slots['default']
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
