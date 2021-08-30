<template>
  <BRow>
    <BCol lg="7">
      <CardOrganizationInfo v-model="organization" :disable-name="organization.id" />
    </BCol>
    <BCol lg="5">
      <CardOrganizationBranding v-model="organization.branding" />
    </BCol>
  </BRow>
</template>

<script lang="ts">
import OrganizationReference from '@merkaly/sdk-js/src/account/organization/organization.reference'
import { Component, VModel, Vue } from 'vue-property-decorator'
import CardOrganizationBranding from './components/CardOrganizationBranding.vue'
import CardOrganizationInfo from './components/CardOrganizationInfo.vue'

@Component({ components: { CardOrganizationBranding, CardOrganizationInfo } })
export default class OrganizationForm extends Vue {
  @VModel({ type: Object }) readonly organization!: OrganizationReference

}
</script>
