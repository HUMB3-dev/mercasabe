<template>
  <BOverlay variant="light rounded" :show="loading">
    <BCard no-body>
      <BCardHeader>
        <BRow align-h="between" align-v="center">
          <BCol class="h4 mb-0">
            Information
          </BCol>
        </BRow>
      </BCardHeader>
      <BCardBody class="mb-3">
        <BRow class="pb-3">
          <BCol cols="5">
            <BFormGroup label="Name">
              <BFormInput v-model.trim="brand.name" required />
            </BFormGroup>
          </BCol>
        </BRow>
        <BRow>
          <BCol cols="12">
            <BFormGroup label="Description">
              <BFormTextarea v-model.trim="brand.name" rows="8" required />
            </BFormGroup>
          </BCol>
        </BRow>
      </BCardBody>
    </BCard>
  </BOverlay>
</template>

<script lang="ts">
import BrandReference from '@merkaly/sdk-js/src/inventory/brand/brand.reference'
import { Component, Prop, VModel, Vue } from 'vue-property-decorator'

@Component({})
export default class BrandElementForm extends Vue {
  @VModel({ required: true, type: Object }) readonly brand!: BrandReference
  @Prop({ type: Boolean, default: false }) readonly loading!: boolean
}
</script>
