<template>
  <footer>
    <BRow class="row g-0 justify-content-between fs--1 mt-4 mb-3">
      <BCol cols="12" sm="auto" class="text-center">
        <p class="mb-0 text-600">Thank you for creating with Falcon
          <span class="d-none d-sm-inline-block">|</span>
          <br class="d-sm-none"> 2021 © <a href="https://www.merkaly.io">Merkaly</a>
        </p>
      </BCol>
      <BCol cols="12" sm="auto" class="text-center">
        <p class="mb-0 text-600">v3.1.0</p>
      </BCol>
    </BRow>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class TheFooter extends Vue {

}
</script>

<style scoped />
