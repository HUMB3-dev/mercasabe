<template>
  <li class="nav-item">
    <div class="row navbar-vertical-label-wrapper mt-3 mb-2">
      <div class="col-auto navbar-vertical-label" v-text="title" />
      <div class="col ps-0">
        <hr class="mb-0 navbar-vertical-divider">
      </div>
    </div>
    <a class="nav-link" href="documentation/getting-started.html">
      <div class="d-flex align-items-center">
      <span class="nav-link-icon">
         <Fontawesome name="rocket" />
      </span>
        <span class="nav-link-text ps-1">Getting started</span>
      </div>
    </a>

  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Fontawesome from '../../icon/fontawesome/fontawesome.vue'

@Component({ components: { Fontawesome } })
export default class SideMenu extends Vue {
  @Prop({ type: String, required: false }) title!: string
}
</script>

<style scoped />
