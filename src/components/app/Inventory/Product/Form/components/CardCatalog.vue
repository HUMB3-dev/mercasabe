<template>
  <BOverlay :show="loading">
    <BCard header-tag="h4" no-body>
      <BCardHeader>
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
              <BFormInput />
            </BFormGroup>
          </BCol>
          <BCol align-self="center" cols="6">
            <BFormGroup label="Barcode (ISBN, UPC, GTIN, etc)">
              <BFormInput />
            </BFormGroup>
          </BCol>
        </BRow>
      </BCardBody>
    </BCard>
  </BOverlay>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class CardCatalog extends Vue {
  @Prop({ type: Boolean, default: false }) readonly loading!: boolean

}
</script>
