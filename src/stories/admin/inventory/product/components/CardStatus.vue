<template>
  <BCard class="mb-3" header-tag="h4" no-body>
    <BCardHeader header-bg-variant="light">
      <BRow align-h="between" align-v="center">
        <BCol class="h4 mb-0">
          Status
        </BCol>
      </BRow>
    </BCardHeader>
    <BCardBody>
      <BFormGroup label="Initial Status">
        <BFormSelect class="form-select" :options="status" />
      </BFormGroup>
      <BFormGroup label="Available from">
        <BFormInput type="date" />
      </BFormGroup>
    </BCardBody>
  </BCard>
</template>

<script lang="ts">
import { PRODUCT_STATUS } from '@merkaly/api/src/inventory/products/product.entity'
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class CardStatus extends Vue {
  get status () {
    return Object.keys(PRODUCT_STATUS)
  }

}
</script>
