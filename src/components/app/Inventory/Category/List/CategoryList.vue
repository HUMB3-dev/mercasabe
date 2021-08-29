<template>
  <CardTable v-bind="{ busy, fields, items, perPage, title, totalRows }">
    <template #field(name)="{ item: category }">
      <BListGroupItem :to="to(category.id)" class="bg-transparent border-0 p-0">
        <div class="d-flex align-items-center position-relative">
          <Avatar icon="layer-group" />
          <div class="ms-3">
            <div class="mb-1 fw-semi-bold text-nowrap text-900 px-2" v-text="category.name" />
            <BBadge class="fw-semi-bold mb-0 text-500" variant="soft-light" v-text="category.status" />
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
import CategoryReference from '@merkaly/sdk-js/src/inventory/category/category.reference'
import { Component, Prop, Vue } from 'vue-property-decorator'
import Avatar from '../../../../shared/Avatar/Avatar.vue'
import CardTable from '../../../../shared/Card/Table/CardTable.vue'

@Component({ components: { Avatar, CardTable } })
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

}
</script>
