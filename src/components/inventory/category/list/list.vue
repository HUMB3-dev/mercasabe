<template>
  <BCard no-body data-list>
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
    <BCardBody class="p-0" body-bg-variant="light">
      <BTable :items="items" :busy="busy" :fields="fields" tbody-tr-class="align-middle" responsive="sm" table-class="mb-0" thead-class="sticky-top bg-200" hover>
        <template #table-busy>
          <div class="text-center py-5">
            <BSpinner variant="primary" />
          </div>
        </template>

        <template #cell(name)="{ item: category }">
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

        <template #cell(actions)>
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
      </BTable>
    </BCardBody>
    <BCardFooter v-show="!busy">
      <div class="d-flex align-items-center justify-content-center">
        <BPagination :total-rows="totalRows" :per-page="perPage" class="mb-0" size="sm" hide-goto-end-buttons />
      </div>
    </BCardFooter>
  </BCard>
</template>

<script lang="ts">
import { PRODUCT_STATUS } from '@merkaly/api/src/inventory/products/product.entity'
import CategoryReference from '@merkaly/sdk-js/src/inventory/category/category.reference'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class CategoryList extends Vue {
  @Prop({ required: true, type: Array }) readonly items!: CategoryReference[]
  @Prop({ default: false, type: Boolean }) readonly busy!: boolean
  @Prop({ default: 10, type: Number }) readonly perPage!: number
  @Prop({ type: Number }) readonly totalRows!: number
  @Prop({ default: 'List of categories', type: String }) readonly title!: string
  @Prop({ default: (id: string) => id, type: Function }) readonly to!: (id: string) => string

  protected readonly fields = [
    { key: 'name', sortable: true },
    { key: 'actions', sortable: false, label: '' }
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

  get src () {
    return require('../../../../assets/images/product-placeholder.webp')

  }
}
</script>
