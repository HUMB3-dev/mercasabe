<template>
  <i :class="classes" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component export default class FontAwesome extends Vue {
  @Prop({ type: String, required: true }) name!: string
  @Prop({ type: String, default: 'duotone' }) variant!: string
  @Prop({ type: String, default: '1x' }) size!: string
  @Prop({ type: [String, Boolean], default: false }) animation!: string | false

  get classes () {
    const name = `fa-${this.name}`
    const variant = `fa-${this.variant}`
    const size = `fa-${this.size}`

    let animation
    if (animation) {
      animation = `fa-${this.animation}`
    }

    return [variant, size, name, animation]
  }
}
</script>
