<template>
  <CardTable :busy="busy" :fields="fields" :items="items" :per-page="perPage" :title="title" :total-rows="totalRows">
    <template #field(name)="{ item: {id , name} }">
      <CellName :id="id" :caption="id" :name="name" :src="placeholderImage" :to="to" />
    </template>

    <template #field(price)="{ item: { price } }">
      <CellPrice :value="price" />
    </template>

    <template #field(status)="{ item: { status } }">
      <CellStatus :value="status" />
    </template>

    <template #field(category)="{ item: { category } }">
      <BBadge v-if="category" pill variant="soft-light" v-text="category.name" />
    </template>

    <template #field(brand)="{ item: { brand } }">
      <BBadge v-if="brand" pill variant="soft-light" v-text="brand.name" />
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
import { PRODUCT_STATUS } from '@merkaly/api/src/inventory/products/product.entity'
import ProductReference from '@merkaly/sdk-js/src/inventory/product/product.reference'
import { Component, Prop, Vue } from 'vue-property-decorator'
import CardTable from '../../../shared/card/table/table.vue'
import CellName from './components/cell.name.vue'
import CellPrice from './components/cell.price.vue'
import CellStatus from './components/cell.status.vue'

@Component({ components: { CellStatus, CardTable, CellName, CellPrice } })
export default class InventoryProductList extends Vue {
  @Prop({ required: true, type: Array }) readonly items!: ProductReference[]
  @Prop({ default: false, type: Boolean }) readonly busy!: boolean
  @Prop({ default: 10, type: Number }) readonly perPage!: number
  @Prop({ type: Number }) readonly totalRows!: number
  @Prop({ default: 'List of products', type: String }) readonly title!: string
  @Prop({ default: (id: string) => id, type: Function }) readonly to!: (id: string) => string

  protected readonly fields = [
    { key: 'name', sortable: true },
    { key: 'price', sortable: true },
    { key: 'status', sortable: true },
    { key: 'category', sortable: true },
    { key: 'brand', sortable: true }
  ]

  get placeholderImage () {
    return require('../../../../assets/images/product-placeholder.webp')
  }

  statusRecord (name: PRODUCT_STATUS) {
    const clasess = {
      variant: 'soft-secondary',
      icon: 'fa-brush'
    }

    if (name === PRODUCT_STATUS.ACTIVE) {
      clasess.variant = 'soft-success'
      clasess.icon = 'fa-check'
    }

    if (name === PRODUCT_STATUS.INACTIVE) {
      clasess.variant = 'soft-danger'
      clasess.icon = 'fa-ban'
    }

    return clasess
  }
}
</script>
