<template>
  <BCard class="mb-3" header-tag="h4" no-body>
    <BCardHeader header-bg-variant="light">
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
            <BFormSelect class="form-select" :options="units" />
          </template>
          <BFormInput v-model="salePrice" type="number" required />
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
              <BFormInput v-model="purchasePrice" min="0" type="number" required />
            </BInputGroup>
          </BFormGroup>
        </BCol>
      </BRow>
    </BCardBody>
  </BCard>
</template>

<script lang="ts">
import { PRODUCT_UNIT } from '@merkaly/api/src/inventory/products/product.entity'
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class CardPricing extends Vue {

  protected salePrice?: number = null
  protected purchasePrice?: number = null

  get units () {
    return Object.keys(PRODUCT_UNIT)
  }

  get priceMargin () {
    if (!this.purchasePrice || !this.priceProfit) {
      return null
    }

    const percent = (this.priceProfit / this.salePrice) * 100

    return Number(percent)
  }

  get priceProfit (): null | number {
    if (!this.purchasePrice) {
      return null
    }

    const percent = (this.salePrice - this.purchasePrice)

    return Number(percent)
  }
}
</script>
