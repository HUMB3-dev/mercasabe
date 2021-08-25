<template>
  <BCard header-tag="h4" no-body>
    <BCardHeader header-bg-variant="light">
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
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import FormDropzone from './form.dropzone.vue'

@Component({
  components: { FormDropzone }
})
export default class CardMedia extends Vue {

}
</script>
