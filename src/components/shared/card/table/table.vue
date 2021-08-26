<template>
  <BCard no-body>
    <BCardHeader>
      <BRow align-h="between" align-v="center">
        <BCol cols="4" sm="auto" class="d-flex align-items-center pe-0">
          <h5 class="fs-0 mb-0 text-nowrap py-2 py-xl-0" v-text="title" />
        </BCol>
        <BCol cols="8" sm="auto" class="ms-auto text-end ps-0">
          <BBtnGroup size="sm">
            <BBtn variant="falcon-warning" :disabled="busy">
              <span class="fas fa-filter" />
              <span class="d-none d-sm-inline-block">Filter</span>
            </BBtn>
            <BBtn variant="falcon-default" :disabled="busy">
              <span class="fas fa-external-link-alt" />
              <span class="d-none d-sm-inline-block">Export</span>
            </BBtn>
          </BBtnGroup>
        </BCol>
      </BRow>
    </BCardHeader>
    <BCardBody class="p-0">
      <BTable :items="items" :busy="busy" :fields="headers" tbody-tr-class="align-middle" responsive="sm"
              table-class="mb-0" thead-class="sticky-top bg-200" hover>
        <template #table-busy>
          <div class="text-center py-5">
            <BSpinner variant="primary" />
          </div>
        </template>

        <template v-for="{ key } in fields" :slot="'cell(' + key + ')'" slot-scope="cell">
          <slot :name="`field(${key})`" v-bind="cell">
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
        <BPagination :total-rows="totalRows" :per-page="perPage" class="mb-0" size="sm" hide-goto-end-buttons />
      </div>
    </BCardFooter>
  </BCard>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class CardTable extends Vue {
  @Prop({ required: true, type: String }) readonly title!: string
  @Prop({ required: true, type: Array }) readonly items!: unknown[]
  @Prop({ required: false, type: Array }) readonly fields!: unknown[]
  @Prop({ default: false, type: Boolean }) readonly busy!: boolean
  @Prop({ default: 10, type: Number }) readonly perPage!: number
  @Prop({ type: Number }) readonly totalRows!: number

  protected get hasSlotActions () {
    return !!this.$slots?.actions
  }

  get headers () {
    const header = this.fields

    if (this.hasSlotActions) {
      header.push({ key: 'actions', sortable: false, label: '' })
    }

    return header
  }
}
</script>
