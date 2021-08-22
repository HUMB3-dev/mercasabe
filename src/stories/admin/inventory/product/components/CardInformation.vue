<template>
  <BCard class="mb-3" header-tag="h4" no-body>
    <BCardHeader header-bg-variant="light">
      <BRow align-h="between" align-v="center">
        <BCol class="h4 mb-0">
          Information
        </BCol>
      </BRow>
    </BCardHeader>
    <BCardBody>
      <BFormGroup class="mb-3" label="Title">
        <BFormInput v-model.trim="value.name" required />
      </BFormGroup>
      <BFormGroup label="Description">
        <BFormTextarea v-model.trim="value.description" rows="8" no-resize required />
      </BFormGroup>
    </BCardBody>
  </BCard>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class CardInformation extends Vue {
  @Prop({ type: Object }) readonly value!: { name?: string, description?: string }
}
</script>
