<template>
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
            <BFormSelect v-model="model.unit" class="form-select" :options="units" />
          </template>
          <BFormInput v-model.number="model.sale" min="0" type="number" required />
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
              <BFormInput v-model.number="model.purchase" min="0" type="number" required />
            </BInputGroup>
          </BFormGroup>
        </BCol>
      </BRow>
    </BCardBody>
  </BCard>
</template>

<script lang="ts">
import { PRODUCT_UNIT } from '@merkaly/api/src/inventory/products/product.entity'
import { Component, ModelSync, Vue } from 'vue-property-decorator'

export interface ProductPricing {
  sale?: number
  purchase?: number
  unit?: PRODUCT_UNIT
}

@Component({})
export default class CardPricing extends Vue {
  @ModelSync('value', 'change', { type: Object }) readonly model!: ProductPricing

  get units () {
    return Object.keys(PRODUCT_UNIT)
  }

  get priceMargin () {
    if (!this.model.sale || !this.priceProfit) {
      return null
    }

    const percent = (this.priceProfit / this.model.sale) * 100

    return Number(percent)
  }

  get priceProfit (): null | number {
    if (!this.model.purchase || !this.model.sale) {
      return null
    }

    const percent = (this.model.sale - this.model.purchase)

    return Number(percent)
  }
}
</script>
