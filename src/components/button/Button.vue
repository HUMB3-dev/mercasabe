<template>
  <div class="card h-100">
    <div class="card-body">
      <div class="row flex-between-center g-0">
        <div class="col-6 d-lg-block flex-between-center">
          <h6 class="mb-2 text-900">Active Users</h6>
          <h4 class="fs-3 fw-normal text-700 mb-0">765k</h4>
        </div>
        <div class="col-auto h-100">
          Graph
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component()
export default class Button extends Vue {
  @Prop({ type: String, required: true }) readonly variant!: string

  onClick () {
    this.$emit('onClick')
  }
}
</script>
<style scoped />
