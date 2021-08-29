<template>
  <BListGroupItem :to="to" class="bg-transparent border-0 p-0">
    <div class="d-flex align-items-center position-relative">
      <Avatar :src="src" icon="buildings" />
      <div class="flex-1 ms-3">
        <span class="mb-1 fw-semi-bold text-nowrap h6 text-900 stretched-link" v-text="title" />
        <p class="fw-semi-bold mb-0 text-500" v-text="name" />
      </div>
    </div>
  </BListGroupItem>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Avatar from '../../../../../shared/Avatar/Avatar.vue'
import FontAwesome from '../../../../../shared/icon/FontAwesome/FontAwesome.vue'

@Component({ components: { Avatar, FontAwesome } })
export default class CellName extends Vue {
  @Prop({ default: null, type: [String, Object] }) readonly to!: string
  @Prop({ type: String, required: true }) readonly name!: string
  @Prop({ type: String, required: true }) readonly title!: string
  @Prop({ type: String, required: false }) readonly src!: string

}
</script>

<style scoped>

</style>
