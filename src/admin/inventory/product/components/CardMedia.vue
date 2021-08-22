<template>
  <BCard class="mb-3" header-tag="h4" no-body>
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
      <FormDragFile />
    </BCardBody>
  </BCard>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import FormDragFile from './FormDragFile.vue'

@Component({
  components: { FormDragFile }
})
export default class CardMedia extends Vue {

}
</script>
