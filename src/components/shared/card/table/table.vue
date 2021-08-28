<template>
  <BCard no-body>
    <BCardHeader>
      <BRow align-h="between" align-v="center">
        <BCol class="d-flex align-items-center pe-0" cols="4" sm="auto">
          <h5 class="fs-0 mb-0 text-nowrap py-2 py-xl-0" v-text="title" />
        </BCol>
        <BCol class="ms-auto text-end ps-0" cols="8" sm="auto">
          <BBtnGroup size="sm">
            <BBtn :disabled="busy" variant="falcon-warning">
              <span class="fas fa-filter" />
              <span class="d-none d-sm-inline-block">Filter</span>
            </BBtn>
            <BBtn :disabled="busy" variant="falcon-default">
              <span class="fas fa-external-link-alt" />
              <span class="d-none d-sm-inline-block">Export</span>
            </BBtn>
            <slot name="toolbar" />
            <BBtn variant="falcon-primary" @click="$parent.$emit('reload')">
              <FontAwesome name="rotate" />
            </BBtn>
          </BBtnGroup>
        </BCol>
      </BRow>
    </BCardHeader>
    <BCardBody class="p-0">
      <BTable v-bind="{ busy, items, fields: headers}" hover responsive="sm" table-class="mb-0" tbody-tr-class="align-middle" thead-class="sticky-top bg-200">
        <template #table-busy>
          <div class="text-center py-5">
            <BSpinner variant="primary" />
          </div>
        </template>

        <template v-for="{ key } in fields" :slot="'cell(' + key + ')'" slot-scope="cell">
          <slot v-bind="cell" :name="`field(${key})`">
            {{ cell.value }}
          </slot>
        </template>

        <template v-if="hasSlotActions" #cell(actions)>
          <slot name="actions" />
        </template>

      </BTable>
      <slot />
    </BCardBody>

    <BCardFooter v-show="!busy">
      <div class="d-flex align-items-center justify-content-center">
        <BPagination :per-page="perPage" :total-rows="totalRows" class="mb-0" hide-goto-end-buttons size="sm" />
      </div>
    </BCardFooter>
  </BCard>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import FontAwesome from '../../icon/FontAwesome/FontAwesome.vue'

@Component({ components: { FontAwesome } })
export default class CardTable extends Vue {
  @Prop({ required: true, type: String }) readonly title!: string
  @Prop({ required: true, type: Array }) readonly items!: unknown[]
  @Prop({ required: false, type: Array }) readonly fields!: unknown[]
  @Prop({ default: false, type: Boolean }) readonly busy!: boolean
  @Prop({ default: 10, type: Number }) readonly perPage!: number
  @Prop({ type: Number }) readonly totalRows!: number

  get headers () {
    const header = this.fields

    if (this.hasSlotActions) {
      header.push({ key: 'actions', sortable: false, label: '' })
    }

    return header
  }

  protected get hasSlotActions () {
    return !!this.$slots?.actions
  }
}
</script>
