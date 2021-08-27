<template>
  <BCard header-tag="h4" no-body>
    <BCardHeader>
      <BRow align-h="between" align-v="center">
        <BCol class="h4 mb-0">
          Status
        </BCol>
      </BRow>
    </BCardHeader>
    <BCardBody>
      <BFormGroup label="Initial Status">
        <BFormSelect v-model="model.state" :options="status" class="form-select" />
      </BFormGroup>
      <BFormGroup label="Available from">
        <BFormInput v-model="model.availableFrom" type="date" />
      </BFormGroup>
    </BCardBody>
  </BCard>
</template>

<script lang="ts">
import { PRODUCT_STATUS } from '@merkaly/api/src/inventory/products/product.entity'
import { Component, ModelSync, Vue } from 'vue-property-decorator'

export interface ProductStatus {
  state: PRODUCT_STATUS,
  availableFrom: string
}

@Component
export default class CardStatus extends Vue {
  @ModelSync('value', 'change', { type: Object }) readonly model!: ProductStatus

  get status () {
    return Object.keys(PRODUCT_STATUS)
  }

}
</script>
