<template>
  <BOverlay :show="loading">
    <BCard header-tag="h4" no-body>
      <BCardHeader>
        <BRow align-h="between" align-v="center">
          <BCol class="h4 mb-0">
            Information
          </BCol>
        </BRow>
      </BCardHeader>
      <BCardBody>
        <BFormGroup label="Title">
          <BFormInput v-model.trim="product.name" required />
        </BFormGroup>
        <BFormGroup label="Description">
          <BFormTextarea v-model.trim="product.description" no-resize required rows="8" />
        </BFormGroup>
      </BCardBody>
    </BCard>
  </BOverlay>
</template>

<script lang="ts">
import { Component, Prop, VModel, Vue } from 'vue-property-decorator'

export interface ProductInformation {
  name?: string,
  description?: string
}

@Component
export default class CardInformation extends Vue {
  @VModel({ type: Object }) readonly product!: ProductInformation
  @Prop({ type: Boolean, default: false }) readonly loading!: boolean

}
</script>
