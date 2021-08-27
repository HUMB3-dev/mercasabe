<template>
  <nav class="navbar navbar-light navbar-vertical navbar-expand-xl navbar-card">
    <div class="d-flex align-items-center">
      <div class="toggle-icon-wrapper">
        <BBtn variant="transparent" target="navbarVerticalCollapse"
              class="navbar-toggler-humburger-icon navbar-vertical-toggle">
          <Fontawesome name="bars" />
        </BBtn>
      </div>
      <a class="navbar-brand" href="../index.html">
        <div class="d-flex align-items-center py-3">
          <img class="me-2" src="https://prium.github.io/falcon/v3.3.0/assets/img/icons/spot-illustrations/falcon.png"
               alt="" width="40">
          <span class="font-sans-serif">falcon</span>
        </div>
      </a>
    </div>
    <BCollapse class="navbar-collapse" id="navbarVerticalCollapse" is-nav>
      <div class="navbar-vertical-content scrollbar">
        content
      </div>
    </BCollapse>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Fontawesome from '../../shared/icon/fontawesome/fontawesome.vue'

@Component({ components: { Fontawesome } })
export default class TheSidebar extends Vue {

}
</script>

<style scoped>

</style>
