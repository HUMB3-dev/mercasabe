<template>
  <BOverlay :show="loading">
    <BCard header-tag="h4" no-body>
      <BCardHeader>
        <BRow align-h="between" align-v="center">
          <BCol class="h4 mb-0">
            Relations
          </BCol>
        </BRow>
      </BCardHeader>
      <BCardBody>
        <BFormGroup label="Category">
          <BFormSelect :options="categories" class="form-select" text-field="name" value-field="id" />
        </BFormGroup>
        <BFormGroup label="Brand">
          <BFormSelect class="form-select" />
        </BFormGroup>
      </BCardBody>
    </BCard>
  </BOverlay>
</template>

<script lang="ts">
import CategoryReference from '@merkaly/sdk-js/src/inventory/category/category.reference'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class CardRelations extends Vue {
  @Prop({ default: () => [] }) readonly categories!: CategoryReference[]
  @Prop({ default: () => [] }) readonly brands!: CategoryReference[]
  @Prop({ type: Boolean, default: false }) readonly loading!: boolean

}
</script>
