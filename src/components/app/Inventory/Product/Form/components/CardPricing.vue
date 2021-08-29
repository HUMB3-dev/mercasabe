<template>
  <BOverlay :show="loading">
    <BCard header-tag="h4" no-body>
      <BCardHeader>
        <BRow align-h="between" align-v="center">
          <BCol class="h4 mb-0">
            Pricing
          </BCol>
          <BCol cols="auto">
            <BBadge v-if="priceMargin" :variant="priceMargin > 0 ? 'soft-success' : 'soft-danger'">
              <span v-text="priceMargin.toFixed(2)" />
              <span>%</span>
            </BBadge>
          </BCol>
        </BRow>
      </BCardHeader>
      <BCardBody>
        <BFormGroup label="Sale Price">
          <BInputGroup class="mt-3">
            <template #append>
              <BFormSelect v-model="pricing.unit" :options="units" class="form-select" />
            </template>
            <BFormInput v-model.number="pricing.sale" min="0" required type="number" />
          </BInputGroup>
        </BFormGroup>
      </BCardBody>
      <BCardBody class="border-top">
        <BRow>
          <BCol cols="12">
            <BFormGroup label="Purchase Price">
              <BInputGroup class="mt-3">
                <template #append>
                  <BInputGroupText v-if="priceProfit">
                    <span>R$</span>
                    <span v-text="priceProfit.toFixed(2)" />
                  </BInputGroupText>
                </template>
                <BFormInput v-model.number="pricing.purchase" min="0" required type="number" />
              </BInputGroup>
            </BFormGroup>
          </BCol>
        </BRow>
      </BCardBody>
    </BCard>
  </BOverlay>
</template>

<script lang="ts">
import { PRODUCT_UNIT } from '@merkaly/api/src/inventory/products/product.entity'
import { Component, Prop, VModel, Vue } from 'vue-property-decorator'

export interface ProductPricing {
  sale?: number
  purchase?: number
  unit?: PRODUCT_UNIT
}

@Component({})
export default class CardPricing extends Vue {
  @VModel({ type: Object }) readonly pricing!: ProductPricing
  @Prop({ type: Boolean, default: false }) readonly loading!: boolean

  get units () {
    return Object.keys(PRODUCT_UNIT)
  }

  get priceMargin () {
    if (!this.priceProfit || !this.pricing.purchase) {
      return null
    }

    return (this.priceProfit / this.pricing.purchase) * 100
  }

  get priceProfit (): null | number {
    if (!this.pricing.purchase || !this.pricing.sale) {
      return null
    }

    return (this.pricing.sale - this.pricing.purchase)
  }
}
</script>
