<template>
  <BBadge v-show="price" variant="soft-primary" class="bg-200">
    <span>$</span>
    <span v-text="price.toFixed(2)" />
  </BBadge>
</template>

<script lang="ts">
import { Component, VModel } from 'vue-property-decorator'

@Component({})
export default class CellPrice {
  @VModel({ type: Number }) readonly price!: number
}
</script>

<style scoped>

</style>
