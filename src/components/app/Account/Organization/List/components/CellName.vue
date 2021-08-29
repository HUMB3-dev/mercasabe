<template>
  <BListGroupItem :to="to" class="bg-transparent border-0 p-0">
    <div class="d-flex align-items-center position-relative">
      <BImgLazy class="p-0" :height="60" :src="picture" :width="60" thumbnail fluid />
      <div class="flex-1 ms-3">
        <span class="mb-1 fw-semi-bold text-nowrap h6 text-900 stretched-link" v-text="title" />
        <p class="fw-semi-bold mb-0 text-500" v-text="name" />
      </div>
    </div>
  </BListGroupItem>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import FontAwesome from '../../../../../shared/icon/FontAwesome/FontAwesome.vue'

@Component({ components: { FontAwesome } })
export default class CellName extends Vue {
  @Prop({ default: null, type: [String, Object] }) readonly to!: string
  @Prop({ type: String, required: true }) readonly name!: string
  @Prop({ type: String, required: true }) readonly title!: string
  @Prop({ type: String, required: false }) readonly src!: string

  get picture () {
    return this.src || require('../../../../../../assets/images/product-placeholder.webp')
  }
}
</script>

<style scoped>

</style>
