<template>
  <BCard class="mb-3" header="Basic Info">
    <BFormGroup label="Name" description="This is any human-readable identifier for the organization that will be used by end-users to direct them to their organization. This name cannot be changed." class="mb-3">
      <BFormInput v-model="model.name" :disabled="disableName" required />
    </BFormGroup>
    <BFormGroup label="Display Name" description="If set, this is the name that will be displayed to end-users for this organization in any interaction with them." class="mb-3">
      <BFormInput v-model="model.display_name" required />
    </BFormGroup>
  </BCard>
</template>

<script lang="ts">
import OrganizationReference from '@merkaly/sdk-js/src/account/organization/organization.reference'
import { Component, Prop, VModel, Vue } from 'vue-property-decorator'

@Component({ components: {} })
export default class CardOrganizationInfo extends Vue {
  @VModel({ type: Object }) readonly model!: OrganizationReference
  @Prop({ default: false, type: Boolean }) readonly disableName?: boolean
}
</script>
