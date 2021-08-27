<template>
  <i :class="classes" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component export default class FontAwesome extends Vue {
  @Prop({ type: String }) name!: string
  @Prop({ type: String, default: 'duotone' }) variant!: string
  @Prop({ type: String, default: '1x' }) size!: string
  @Prop({ type: String, default: false }) animation!: string

  // eslint-disable-next-line getter-return
  get classes () {
    const name = `fa-${this.name}`
    const variant = `fa-${this.variant}`
    const size = `fa-${this.size}`
    const animation = `fa-${this.animation}`

    return [variant, size, name, animation]
  }
}
</script>

<style scoped />
