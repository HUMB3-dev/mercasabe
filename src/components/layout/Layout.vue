<template>
  <main class="main" :class="{dark}">
    <div class="container-fluid">
      <TheSidebar :tree="tree" v-bind="bind" />
      <div class="content d-flex flex-column pb-0 transition-base">
        <TheHeader v-bind="bind">
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
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import TheFooter from './Footer/Footer.vue'
import TheHeader from './Header/Header.vue'
import TheSidebar, { NavbarVariants } from './Sidebar/Sidebar.vue'
import { ISidebarMenu } from './Sidebar/SidebarMenu/SidebarMenu.vue'

@Component({ components: { TheSidebar, TheHeader, TheFooter } })
export default class LayoutMain extends Vue {
  @Prop({ type: [String], required: true }) readonly title!: string
  @Prop({ type: [String], required: true }) readonly src!: string
  @Prop({ type: [Array], required: true }) readonly tree!: ISidebarMenu[]
  @Prop({ type: [String, Object], default: null }) readonly to!: string
  @Prop({ type: [String], default: 'card' }) readonly variant!: NavbarVariants
  @Prop({ type: [Boolean], default: false }) readonly dark!: boolean

  get bind () {
    return {
      src: this.src,
      title: this.title,
      to: this.to
    }
  }

  @Watch('dark', { immediate: true }) onDarkTheme () {
    if (process.client) {
      document.body.classList.toggle('dark', this.dark)
    }
  }
}
</script>

<style scoped />
