<template>
  <BCard class="overflow-hidden" style="min-width: 12rem" no-body>
    <div class="bg-holder bg-card" :style="{ 'background-image': 'url('+corner+')' }" />
    <BCardBody class="position-relative">
      <h6>
        <span v-text="title" />
        <BBadge v-if="hint" :variant="'soft-' + variant" class="ms-2" pill v-text="hint" />
      </h6>
      <div class="display-4 fs-4 mb-2 fw-normal font-sans-serif" :class="'text-' + variant" v-text="value">58.39k</div>
      <slot name="footer" />
    </BCardBody>

  </BCard>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class Button extends Vue {
  @Prop({ type: String, required: true }) readonly title!: string
  @Prop({ type: String, required: true }) readonly value!: string
  @Prop({ type: String, required: false }) readonly hint!: string
  @Prop({ type: String, default: 'primary' }) readonly variant!: string

  get corner () {
    return require(`../../assets/img/icons/spot-illustrations/${this.variant}.png`)
  }

  onClick () {
    this.$emit('onClick')
  }
}
</script>
<style scoped />
