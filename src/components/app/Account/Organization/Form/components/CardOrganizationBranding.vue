<template>
  <BCard class="mb-3" header="Branding">
    <BFormGroup :label="fields.logo.label" :description="fields.logo.description" class="mb-3">
      <BFormInput v-model="value.logo_url" type="url" />
    </BFormGroup>

    <BRow>
      <BCol>
        <BFormGroup :label="fields.colorPrimary.label" class="mb-3">
          <BFormInput v-model="colors.primary" type="color" />
        </BFormGroup>
      </BCol>

      <BCol>
        <BFormGroup :label="fields.colorBackground.label" class="mb-3">
          <BFormInput v-model="colors.page_background" type="color" />
        </BFormGroup>
      </BCol>
    </BRow>
  </BCard>
</template>

<script lang="ts">
import { Component, Watch, Prop, Vue } from 'vue-property-decorator'

@Component({ components: {} })
export default class OrganizationBranding extends Vue {
  @Prop({ default: undefined, type: Object }) value?: Record<string, any>

  get colors () {
    return this.value?.colors || {
      primary: null,
      page_background: null
    }
  }

  @Watch('colors', { immediate: true }) onColorChange (colors: any) {
    if (this.value) {
      this.value.colors = colors
    }
  }

  get fields () {
    return {
      logo: {
        label: 'Logo URL',
        description: 'If set, this is the name that will be displayed to end-users for this organization in any interaction with them.'
      },
      colorPrimary: {
        label: 'Primary Color',
        description: 'If set, this will be the primary color for CTAs that will be displayed to end-users for this organization in your application\'s authentication flows.'
      },
      colorBackground: {
        label: 'Page Background Color',
        description: 'If set, this will be the page background color that will be displayed to end-users for this organization in in your application\'s authentication flows'
      }
    }
  }
}
</script>
