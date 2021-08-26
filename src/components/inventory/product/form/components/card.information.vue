<template>
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
        <BFormInput v-model.trim="model.name" required />
      </BFormGroup>
      <BFormGroup label="Description">
        <BFormTextarea v-model.trim="model.description" rows="8" no-resize required />
      </BFormGroup>
    </BCardBody>
  </BCard>
</template>

<script lang="ts">
import { Component, ModelSync, Vue } from 'vue-property-decorator'

export interface ProductInformation {
  name?: string,
  description?: string
}

@Component({})
export default class CardInformation extends Vue {
  @ModelSync('value', 'change', { type: Object }) readonly model!: ProductInformation
}
</script>
