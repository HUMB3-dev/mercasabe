<template>
  <BCard class="mb-3" header-tag="h4" no-body>
    <BCardHeader header-bg-variant="light">
      <BRow align-h="between" align-v="center">
        <BCol class="h4 mb-0">
          Catalog
        </BCol>
        <BCol cols="auto">
          <BCheckbox>Sell out of stock</BCheckbox>
        </BCol>
      </BRow>
    </BCardHeader>
    <BCardBody>
      <BRow>
        <BCol cols="6">
          <BFormGroup label="SKU (Stock Keeping Unit)">
            <BFormInput required />
          </BFormGroup>
        </BCol>
        <BCol cols="6" align-self="center">
          <BFormGroup label="Barcode (ISBN, UPC, GTIN, etc)">
            <BFormInput required />
          </BFormGroup>
        </BCol>
      </BRow>
    </BCardBody>
  </BCard>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class CardCatalog extends Vue {

}
</script>
