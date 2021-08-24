<template>
  <BCard no-body data-list>
    <BCardHeader>
      <BRow align-h="between" align-v="center">
        <BCol cols="4" sm="auto" class="d-flex align-items-center pe-0">
          <h5 class="fs-0 mb-0 text-nowrap py-2 py-xl-0" v-text="title" />
        </BCol>
        <BCol cols="8" sm="auto" class="ms-auto text-end ps-0">
          <BBtnGroup size="sm">
            <BBtn variant="falcon-warning" :disabled="loading">
              <span class="fas fa-filter" />
              <span class="d-none d-sm-inline-block">Filter</span>
            </BBtn>
            <BBtn variant="falcon-default" :disabled="loading">
              <span class="fas fa-external-link-alt" />
              <span class="d-none d-sm-inline-block">Export</span>
            </BBtn>
          </BBtnGroup>
        </BCol>
      </BRow>
    </BCardHeader>
    <BCardBody class="p-0" body-bg-variant="light">
      <BTable table-class="mb-0" :items="items" :busy="loading" :fields="fields" responsive="sm" tbody-tr-class="align-middle"
              hover>
        <template #table-busy>
          <div class="text-center py-5">
            <BSpinner variant="primary" />
          </div>
        </template>

        <template #cell(name)="{ item: product }">
          <a :href="to(product.id)" class="text-decoration-none">
            <div class="d-flex align-items-center position-relative">
              <BImg
                  src="https://riabir.ru/wp-content/uploads/2020/02/xproduct-placeholder.jpg.pagespeed.ic.jyJwDD83Ag.webp"
                  class="rounded-1 border border-200" :height="60" />
              <div class="flex-1 ms-3">
                <span class="mb-1 fw-semi-bold text-nowrap h6 text-900 stretched-link" v-text="product.name" />
                <p class="fw-semi-bold mb-0 text-500" v-text="product.id" />
              </div>
            </div>
          </a>
        </template>

        <template #cell(price)="{ item: { price } }">
          <BBadge variant="soft-primary">
            <span>$</span>
            <span v-text="price" />
          </BBadge>
        </template>

        <template #cell(status)="{ item: { status } }">
          <BBadge variant="soft-success" pill>
            <span v-text="status" />
            <span class="ms-1 fas fa-check" />
          </BBadge>
        </template>

        <template #cell(category)>
          <BBadge variant="soft-secondary" pill>TEST</BBadge>
        </template>

        <template #cell(actions)>
          <div class="text-end">
            <BDropdown class="position-static" variant="falcon-default" size="sm" dropleft>
              <template #button-content>
                <span class="fas fa-ellipsis-h fs--1" />
              </template>
              <BDropdownItem variant="danger">
                Delete
              </BDropdownItem>
            </BDropdown>
          </div>
        </template>
      </BTable>
    </BCardBody>

    <BCardFooter v-if="!loading">
      <div class="d-flex align-items-center justify-content-center">
        <BBtn variant="falcon-default" size="sm" class="me-1 disabled" title="Previous">
          <span class="fas fa-chevron-left" />
        </BBtn>
        <BNav class="pagination mb-0">
          <BNavItem link-classes="page">
            1
          </BNavItem>
          <BNavItem link-classes="page">
            2
          </BNavItem>
          <BNavItem link-classes="page">
            3
          </BNavItem>
        </BNav>
        <BBtn variant="falcon-default" size="sm" class="ms-1" title="Next">
          <span class="fas fa-chevron-right" />
        </BBtn>
      </div>
    </BCardFooter>
  </BCard>
</template>

<script lang="ts">
import ProductReference from '@merkaly/sdk-js/src/inventory/product/product.reference'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class ProductList extends Vue {
  @Prop({ required: true, type: Array }) readonly items!: ProductReference[]
  @Prop({ default: false, type: Boolean }) readonly loading!: boolean
  @Prop({ default: 'List of products', type: String }) readonly title!: string
  @Prop({ default: (id: string) => id, type: Function }) readonly to!: (id: string) => string

  protected products: ProductReference[] = []
  protected readonly fields = [
    { key: 'name', sortable: true },
    { key: 'price', sortable: true },
    { key: 'status', sortable: true },
    { key: 'category', sortable: true },
    { key: 'actions', sortable: false, label: '' }
  ]

}
</script>
