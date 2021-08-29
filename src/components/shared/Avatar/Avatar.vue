<template>
  <BAvatar :variant="badgeVariant" rounded="" :size="size" class="d-flex" :class="{ 'flex-center': !src }">
    <BImgLazy v-show="src" :src="src" class="h-100 w-100 fit-cover p-0 rounded" />
    <FontAwesome v-show="!src" size="2x" :name="icon" />
  </BAvatar>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import FontAwesome from '../icon/FontAwesome/FontAwesome'

@Component({ components: { FontAwesome } })
export default class Avatar extends Vue {
  @Prop({ type: String, required: false }) readonly src!: string
  @Prop({ type: String, default: () => 'image-slash' }) readonly icon!: string
  @Prop({ type: String, default: () => 'primary' }) readonly variant!: string
  @Prop({ type: String, default: () => '60px' }) readonly size!: string

  get badgeVariant () {
    return `soft-${this.variant}`
  }

}
</script>

