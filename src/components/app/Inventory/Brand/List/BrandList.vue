<template>
  <CardTable v-bind="{ busy, fields, items, perPage, title, totalRows }">
    <template #field(name)="{ item: brand }">
      <BListGroupItem :to="to(brand.id)" class="bg-transparent border-0 p-0">
        <div class="d-flex align-items-center position-relative">
          <BImgLazy :height="60" :src="src" :width="60" blank-src="" class="shadow-sm fit-cover p-1" rounded="1" />
          <div class="ms-3">
            <div class="mb-1 fw-semi-bold text-nowrap text-900 px-2" v-text="brand.name" />
            <BBadge class="fw-semi-bold mb-0 text-500" variant="soft-light" v-text="brand.status" />
          </div>
        </div>
      </BListGroupItem>
    </template>
    <template #actions>
      <div class="text-end">
        <BDropdown class="position-static" dropleft size="sm" variant="falcon-default px-2 py-01">
          <template #button-content>
            <span class="fas fa-ellipsis-h" />
          </template>
          <BDropdownItem variant="danger">
            Delete
          </BDropdownItem>
        </BDropdown>
      </div>
    </template>
  </CardTable>
</template>

<script lang="ts">
import BrandReference from '@merkaly/sdk-js/src/inventory/brand/brand.reference'
import { Component, Prop, Vue } from 'vue-property-decorator'
import CardTable from '../../../../shared/Card/Table/CardTable.vue'

@Component({ components: { CardTable } })
export default class BrandList extends Vue {
  @Prop({ required: true, type: Array }) readonly items!: BrandReference[]
  @Prop({ default: false, type: Boolean }) readonly busy!: boolean
  @Prop({ default: 10, type: Number }) readonly perPage!: number
  @Prop({ type: Number }) readonly totalRows!: number
  @Prop({ default: 'List of brands', type: String }) readonly title!: string
  @Prop({ default: (id: string) => id, type: Function }) readonly to!: (id: string) => string

  protected readonly fields = [
    { key: 'name', sortable: true }
  ]

  get src () {
    return require('../../../../../assets/images/product-placeholder.webp')

  }
}
</script>
