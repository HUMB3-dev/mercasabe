<template>
  <main class="main">
    <div class="container-fluid">
      <TheSidebar :tree="$attrs.tree" :src="$attrs.src" :title="$attrs.title" />
      <div class="content d-flex flex-column pb-0">
        <TheHeader :src="$attrs.src" :title="$attrs.title" />
        <div class="flex-fill">
          <slot />
        </div>
        <TheFooter />
      </div>

    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TheFooter from './Footer/Footer.vue'
import TheHeader from './Header/Header.vue'
import TheSidebar from './Sidebar/Sidebar.vue'

@Component({ components: { TheSidebar, TheHeader, TheFooter } })
export default class Main extends Vue {

}
</script>

<style scoped />
