<template>
  <main class="main">
    <div class="container-fluid">
      <TheSidebar :tree="tree" :src="src" :title="title" :variant="variant" />
      <div class="content d-flex flex-column pb-0">
        <TheHeader :src="src" :title="title" :to="to">
          <slot name="header" />
        </TheHeader>
        <div class="flex-fill">
          <slot />
        </div>
        <TheFooter />
      </div>

    </div>
  </main>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import TheFooter from './Footer/Footer.vue'
import TheHeader from './Header/Header.vue'
import TheSidebar, { NavbarVariants } from './Sidebar/Sidebar.vue'
import { ISidebarMenu } from './Sidebar/SidebarMenu/SidebarMenu.vue'

@Component({ components: { TheSidebar, TheHeader, TheFooter } })
export default class Main extends Vue {
  @Prop({ type: [String], required: true }) readonly title!: string
  @Prop({ type: [String], required: true }) readonly src!: string
  @Prop({ type: [Array], required: true }) readonly tree!: ISidebarMenu[]
  @Prop({ type: [String, Object], default: null }) readonly to!: string
  @Prop({ type: [String], default: 'card' }) readonly variant!: NavbarVariants

}
</script>

<style scoped />
