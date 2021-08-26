<template>
  <CardTable :items="items" :busy="busy" :fields="fields" :title="title" :per-page="perPage" :total-rows="totalRows">
    <template #field(name)="{ item: category }">
      <BListGroupItem :to="to(category.id)" class="bg-transparent border-0 p-0">
        <div class="d-flex align-items-center position-relative">
          <BImgLazy blank-src="" :src="src" class="shadow-sm fit-cover p-1" :height="60" :width="60" rounded="1" />
          <div class="ms-3">
            <div class="mb-1 fw-semi-bold text-nowrap text-900 px-2" v-text="category.name" />
            <BBadge class="fw-semi-bold mb-0 text-500" variant="soft-light" v-text="category.status" />
          </div>
        </div>
      </BListGroupItem>
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
import CategoryReference from '@merkaly/sdk-js/src/inventory/category/category.reference'
import { Component, Prop, Vue } from 'vue-property-decorator'
import CardTable from '../../../shared/card/table/table.vue'

@Component({ components: { CardTable } })
export default class CategoryList extends Vue {
  @Prop({ required: true, type: Array }) readonly items!: CategoryReference[]
  @Prop({ default: false, type: Boolean }) readonly busy!: boolean
  @Prop({ default: 10, type: Number }) readonly perPage!: number
  @Prop({ type: Number }) readonly totalRows!: number
  @Prop({ default: 'List of categories', type: String }) readonly title!: string
  @Prop({ default: (id: string) => id, type: Function }) readonly to!: (id: string) => string

  protected readonly fields = [
    { key: 'name', sortable: true }
  ]

  get src () {
    return require('../../../../assets/images/product-placeholder.webp')

  }
}
</script>
