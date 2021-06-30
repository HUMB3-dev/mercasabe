<template>
  <button type="button" :class="classes" @click="onClick" :style="style" v-text="label" />
</template>

<script lang="ts">
import './button.css'
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component()
export default class Button extends Vue {
  @Prop({ type: String, required: true }) readonly label!: string
  @Prop({ type: Boolean, default: false }) readonly primary!: boolean
  @Prop({ type: String, default: 'medium' }) readonly size!: string
  @Prop({ type: String }) readonly backgroundColor!: string

  get classes () {
    return {
      'storybook-button': true,
      'storybook-button--primary': this.primary,
      'storybook-button--secondary': !this.primary,
      [`storybook-button--${this.size}`]: true
    }
  }

  get style () {
    return {
      backgroundColor: this.backgroundColor
    }
  }

  onClick () {
    this.$emit('onClick')
  }
}
</script>
