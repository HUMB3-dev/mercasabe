<template>
  <CardTable v-bind="{ busy, fields, items, perPage, title, totalRows }">
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
import ProductReference from '@merkaly/sdk-js/src/inventory/product/product.reference'
import { Component, Prop, Vue } from 'vue-property-decorator'
import CardTable from '../../../../shared/Card/Table/CardTable.vue'
import FontAwesome from '../../../../shared/icon/FontAwesome/FontAwesome.vue'
import CellName from './components/CellName.vue'
import CellPrice from './components/CellPrice.vue'
import CellStatus from './components/CellStatus.vue'

@Component({ components: { FontAwesome, CellStatus, CardTable, CellName, CellPrice } })
export default class ProductList extends Vue {
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
    return require('../../../../../assets/images/product-placeholder.webp')
  }

}
</script>
