<template>
  <CardTable v-bind="{ busy, fields, items, perPage, title, totalRows }">
    <template #field(name)="{ item: {id, name, branding: { logo_url }, display_name} }">
      <CellName :key="name" :to="to(id)" v-bind="{ name, title: display_name, src: logo_url }" />
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
import OrganizationReference from '@merkaly/sdk-js/src/account/organization/organization.reference'
import { Component, Prop, Vue } from 'vue-property-decorator'
import CardTable from '../../../../shared/Card/Table/CardTable.vue'
import CellName from './components/CellName.vue'

@Component({ components: { CellName, CardTable } })
export default class OrganizationList extends Vue {
  @Prop({ required: true, type: Array }) readonly items!: OrganizationReference[]
  @Prop({ default: false, type: Boolean }) readonly busy!: boolean
  @Prop({ default: 10, type: Number }) readonly perPage!: number
  @Prop({ type: Number }) readonly totalRows!: number
  @Prop({ default: null, type: String }) readonly title!: string
  @Prop({ default: (id: string) => id, type: Function }) readonly to!: (id: string) => string

  protected readonly fields = [
    { key: 'name', sortable: true }
  ]

}
</script>
