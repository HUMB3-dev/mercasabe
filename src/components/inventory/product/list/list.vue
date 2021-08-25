<template>
  <CardTable :items="items" :busy="busy" :fields="fields" :per-page="perPage" :total-rows="totalRows" :title="title">
    <template #field(name)="{ item: {id , name, media} }">
      <CellName :id="id" :name="name" :caption="id" :src="generateImage(media)" :to="to" />
    </template>

    <template #field(price)="{ item: { price } }">
      <BBadge v-show="price" variant="soft-primary" class="bg-200">
        <span>$</span>
        <span v-text="price.toFixed(2)" />
      </BBadge>
    </template>

    <template #field(status)="{ item: { status } }">
      <BBadge v-show="status" :variant="statusRecord(status).variant" pill>
        <span class="me-1 fas" :class="statusRecord(status).icon" />
        <span v-text="status" />
      </BBadge>
    </template>

    <template #field(category)="{ item: { category } }">
      <BBadge v-if="category" variant="soft-light" pill v-text="category.name" />
    </template>

    <template #field(brand)="{ item: { brand } }">
      <BBadge v-if="brand" variant="soft-light" pill v-text="brand.name" />
    </template>

    <template #actions>
      <div class="text-end">
        <BDropdown class="position-static" variant="falcon-default px-2 py-01" size="sm" dropleft>
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
import { ProductMediaEntity } from '@merkaly/api/src/inventory/products/media/index'
import { PRODUCT_STATUS } from '@merkaly/api/src/inventory/products/product.entity'
import ProductReference from '@merkaly/sdk-js/src/inventory/product/product.reference'
import { Component, Prop, Vue } from 'vue-property-decorator'
import CardTable from '../../../shared/card/table/table'
import CellName from './components/cell.name'

@Component({ components: { CardTable, CellName } })
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

  generateImage (medias: ProductMediaEntity) {
    if (!medias.length) {
      return require('../../../../assets/images/product-placeholder.webp')
    }

    return medias[0].src
  }
}
</script>
