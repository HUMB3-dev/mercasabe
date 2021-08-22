<template>
  <BCard header-tag="h4" no-body>
    <BCardHeader header-bg-variant="light">
      <BRow align-h="between" align-v="center">
        <BCol class="h4 mb-0">
          Relations
        </BCol>
      </BRow>
    </BCardHeader>
    <BCardBody>
      <BFormGroup label="Category">
        <BFormSelect class="form-select" :options="categories" text-field="name" value-field="id" />
      </BFormGroup>
      <BFormGroup label="Brand">
        <BFormSelect class="form-select" />
      </BFormGroup>
    </BCardBody>
  </BCard>
</template>

<script lang="ts">
import BrandReference from '@merkaly/sdk-js/src/inventory/brand/brand.reference'
import CategoryReference from '@merkaly/sdk-js/src/inventory/category/category.reference'
import { Component, Vue } from 'vue-property-decorator'
import { Getter, } from 'vuex-class'

@Component({})
export default class CardRelations extends Vue {
  @Getter('Inventory/categories') readonly categories!: CategoryReference[]
  @Getter('Inventory/brands') readonly brands!: BrandReference[]

}
</script>
