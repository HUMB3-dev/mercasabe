<template>
  <main class="main">
    <div class="container-fluid">
      <TheSidebar :tree="$attrs.tree" :src="$attrs.src" :title="$attrs.title" />
      <div class="content">
        <TheHeader :src="$attrs.src" :title="$attrs.title" />
        <slot />

      </div>

    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TheHeader from './Header/Header.vue'
import TheSidebar from './Sidebar/Sidebar.vue'

@Component({ components: { TheSidebar, TheHeader } })
export default class Main extends Vue {

}
</script>

<style scoped />
