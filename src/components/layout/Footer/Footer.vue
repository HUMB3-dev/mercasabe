<template>
  <footer>
    <BRow class="row g-0 justify-content-between fs--1 mt-4 mb-3">
      <BCol cols="12" sm="auto" class="text-center">
        <p class="mb-0 text-600">
          <slot>
            <span>Copyright © 2021 All rights reserved</span>
            <span class="d-none d-sm-inline-block">|</span>
            <br class="d-sm-none">
            <a href="https://www.merkaly.io">Merkaly</a>
          </slot>
        </p>
      </BCol>
      <BCol cols="12" sm="auto" class="text-center">
        <p class="mb-0 text-600" v-text="version" />
      </BCol>
    </BRow>
  </footer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class TheFooter extends Vue {
  @Prop({ type: [String], default: null }) readonly version!: string

}
</script>
