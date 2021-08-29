<template>
  <BOverlay :show="loading">
    <BCard header-tag="h4" no-body>
      <BCardHeader>
        <BRow align-h="between" align-v="center">
          <BCol class="h4 mb-0">
            Media
          </BCol>
          <BCol cols="auto">
            <a class="small">Embed media from URL</a>
          </BCol>
        </BRow>
      </BCardHeader>
      <BCardBody>
        <FormDropzone />
      </BCardBody>
    </BCard>
  </BOverlay>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import FormDropzone from '../../../../../form/Dropzone/FormDropzone.vue'

@Component({ components: { FormDropzone } })
export default class CardMedia extends Vue {
  @Prop({ type: Boolean, default: false }) readonly loading!: boolean

}
</script>
