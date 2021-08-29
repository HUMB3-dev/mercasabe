<template>
  <BDropdown menu-class="split-x" toggle-class="btn-sm rounded-pill pe-0 py-0 d-flex align-items-center" variant="falcon-default" no-caret>
    <template #button-content>
      <span v-text="name" />
      <BImg rounded="circle" class="ms-1 rounded-pill" :src="src" alt="User Avatar" width="32" />
    </template>
  <slot />
  </BDropdown>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import FontAwesome from '../../../shared/Icon/FontAwesome/FontAwesome.vue'

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

.dropdown-toggle-no-caret {
  &::after {
    content: unset;
  }
}
</style>
