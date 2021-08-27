<template>
  <BBadge v-show="price" class="bg-200" variant="soft-primary">
    <span>$</span>
    <span v-text="price.toFixed(2)" />
  </BBadge>
</template>

<script lang="ts">
import { Component, VModel, Vue } from 'vue-property-decorator'

@Component
export default class CellPrice extends Vue {
  @VModel({ type: Number }) readonly price!: number
}
</script>

<style scoped>

</style>
