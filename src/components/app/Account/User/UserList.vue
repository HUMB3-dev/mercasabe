<template>
  <CardTable v-bind="{ busy, fields, items, perPage, title, totalRows }">
    <template #field(name)="{ item: {user_id, name, email, picture, email_verified} }">
      <CellName :key="user_id" :id="user_id" :src="picture" :to="to(user_id)" :verified="email_verified" v-bind="{ name, email}"  />
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
import UserReference from '@merkaly/sdk-js/src/account/user/user.reference'
import { Component, Prop, Vue } from 'vue-property-decorator'
import CardTable from '../../../shared/Card/Table/CardTable.vue'
import CellName from './components/CellName.vue'

@Component({ components: { CellName, CardTable } })
export default class UserList extends Vue {
  @Prop({ required: true, type: Array }) readonly items!: UserReference[]
  @Prop({ default: false, type: Boolean }) readonly busy!: boolean
  @Prop({ default: 10, type: Number }) readonly perPage!: number
  @Prop({ type: Number }) readonly totalRows!: number
  @Prop({ default: 'List of users', type: String }) readonly title!: string
  @Prop({ default: (id: string) => id, type: Function }) readonly to!: (id: string) => string

  protected readonly fields = [
    { key: 'name', sortable: true },
    { key: 'created_at', sortable: true },
    { key: 'last_login', sortable: true },
    { key: 'logins_count', sortable: true },
  ]

}
</script>
