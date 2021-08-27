<template>
  <BBadge v-show="status" :variant="statusRecord(status).variant" pill>
    <span :class="statusRecord(status).icon" class="me-1 fas" />
    <span v-text="status" />
  </BBadge>
</template>

<script lang="ts">
import { PRODUCT_STATUS } from '@merkaly/api/src/inventory/products/product.entity'
import { Component, VModel, Vue } from 'vue-property-decorator'

@Component
export default class CellStatus extends Vue {
  @VModel({ type: String }) readonly status!: PRODUCT_STATUS

  protected statusRecord (name: PRODUCT_STATUS) {
    const clasess = {
      variant: 'soft-secondary',
      icon: 'fa-brush'
    }

    if (name === PRODUCT_STATUS.ACTIVE) {
      clasess.variant = 'soft-success'
      clasess.icon = 'fa-check'
    }

    if (name === PRODUCT_STATUS.INACTIVE) {
      clasess.variant = 'soft-danger'
      clasess.icon = 'fa-ban'
    }

    return clasess
  }

}
</script>

<style scoped>

</style>
