<template>
  <nav class="navbar navbar-light navbar-expand-lg border-bottom mb-3" style="z-index: 4;">
    <!-- Brand -->
    <BNavbarBrand href="/" class="font-weight-bold d-flex align-items-sm-center">
      <BImg :src="src" width="42" :alt="name" rounded="" />
      <span class="d-none d-md-inline px-2" v-text="name" />
    </BNavbarBrand>

    <!-- Toggler -->
    <BNavbarToggle target="NavMenu">
      <span class="navbar-toggler-icon" />
    </BNavbarToggle>

    <!-- Collapse -->
    <BCollapse id="NavMenu" is-nav>

      <!-- Navigation -->
      <ul class="navbar-nav ms-auto">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle">
            Landings
          </a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle">
            Pages
          </a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle">
            Account
          </a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle">
            Documentation
          </a>
        </li>
      </ul>

      <!-- Button -->
      <a class="navbar-btn btn btn-sm btn-primary lift ms-auto" href="#!">
        Buy now
      </a>

    </BCollapse>

  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class MKHeader extends Vue {
  @Prop({ type: String, required: true }) readonly name!: string;
  @Prop({ type: String, required: true }) readonly src: string;

  get corner () {
    return require(`../../assets/img/icons/spot-illustrations/${this.variant}.png`);
  }

  onClick () {
    this.$emit('onClick');
  }
}
</script>
<style scoped />
