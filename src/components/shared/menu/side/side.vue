<template>
  <BNavItem>
    <BRow class="navbar-vertical-label-wrapper mt-3 mb-2">
      <BCol cols="auto" class="navbar-vertical-label" v-text="title" />
      <BCol class="ps-0">
        <hr class="mb-0 navbar-vertical-divider">
      </BCol>
    </BRow>
    <slot />
  </BNavItem>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Fontawesome from '../../icon/fontawesome/fontawesome.vue'

@Component({ components: { Fontawesome } })
export default class SideMenu extends Vue {
  @Prop({ type: String, required: true }) title!: string
}
</script>

<style scoped />
