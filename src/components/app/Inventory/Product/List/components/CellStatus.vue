<template>
  <BBadge v-show="status" :variant="variant.variant" pill>
    <FontAwesome :name="variant.icon" class="me-1" />
    <span v-text="status" />
  </BBadge>
</template>

<script lang="ts">
import { PRODUCT_STATUS } from '@merkaly/api/src/inventory/products/product.entity'
import { Component, VModel, Vue } from 'vue-property-decorator'
import FontAwesome from '../../../../../shared/icon/FontAwesome/FontAwesome.vue'

@Component({ components: { FontAwesome } })
export default class CellStatus extends Vue {
  @VModel({ type: String }) readonly status!: PRODUCT_STATUS

  protected get variant () {
    const clasess = {
      variant: 'soft-secondary',
      icon: 'brush'
    }

    if (this.status === PRODUCT_STATUS.ACTIVE) {
      clasess.variant = 'soft-success'
      clasess.icon = 'check'
    }

    if (this.status === PRODUCT_STATUS.INACTIVE) {
      clasess.variant = 'soft-danger'
      clasess.icon = 'ban'
    }

    return clasess
  }

}
</script>

<style scoped>

</style>
