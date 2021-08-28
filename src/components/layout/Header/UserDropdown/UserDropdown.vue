<template>
  <BNavItemDropdown menu-class="split-x">
    <template #button-content>
      <BImg rounded="circle" class="rounded-circle" :src="src" alt="User Avatar" width="32" />
      <span v-text="name"></span>
    </template>
    <slot />
  </BNavItemDropdown>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import FontAwesome from '../../../shared/icon/FontAwesome/FontAwesome.vue'

@Component({ components: { FontAwesome } })
export default class UserDropdown extends Vue {
  @Prop({ type: [String], required: true }) readonly name!: string
  @Prop({ type: [String] }) readonly src!: string
}
</script>

<style lang="scss">
.split-x {
  right: 0;
  left: 0;
}
</style>
