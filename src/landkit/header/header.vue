<template>
  <BNavbar class="border-bottom mb-3" toggleable="lg" type="light">

    <BNavbarBrand class="font-weight-bold d-flex align-items-sm-center" to="/">
      <BImg :src="src" width="42" :alt="name" rounded="" />
      <span class="d-none d-md-inline px-2" v-text="name" />
    </BNavbarBrand>

    <BNavbarToggle target="NavMenu">
      <span class="navbar-toggler-icon" />
    </BNavbarToggle>

    <BCollapse id="NavMenu" class="overflow-auto" is-nav>
      <BNavbarToggle target="NavMenu">
        <i class="fe fe-x" />
      </BNavbarToggle>

      <BNavbarNav class="ml-auto">
        <slot name="menu" />
      </BNavbarNav>

      <div class="ml-auto">
        <slot name="actions" />
      </div>

    </BCollapse>

  </BNavbar>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class KHeader extends Vue {
  @Prop({ type: String, required: true }) readonly name!: string;
  @Prop({ type: String, required: true }) readonly src: string;
}
</script>

<style scoped />
