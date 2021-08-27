<template>
  <BListGroupItem :to="to(id)" class="bg-transparent border-0 p-0">
    <div class="d-flex align-items-center position-relative">
      <BImgLazy :height="60" :src="src" :width="60" blank-src="" class="shadow-sm fit-cover p-1" rounded="1" />
      <div class="flex-1 ms-3">
        <span class="mb-1 fw-semi-bold text-nowrap h6 text-900 stretched-link" v-text="name" />
        <p class="fw-semi-bold mb-0 text-500" v-text="caption" />
      </div>
    </div>
  </BListGroupItem>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class CellName extends Vue {
  @Prop({ type: Function }) readonly to!: (id: string) => string
  @Prop({ type: String, required: true }) readonly id!: string
  @Prop({ type: String, required: true }) readonly name!: string
  @Prop({ type: String, required: true }) readonly caption!: string
  @Prop({ type: String, required: false }) readonly src!: string

}
</script>

<style scoped>

</style>
