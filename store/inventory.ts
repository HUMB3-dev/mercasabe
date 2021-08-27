import CategoryReference from '@merkaly/sdk-js/src/inventory/category/category.reference'
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'

@Module({ stateFactory: true, name: 'Inventory', namespaced: true }) export default class Inventory extends VuexModule {
  public $categories: CategoryReference[] = []

  @Mutation setCategories (categories: CategoryReference[]) {
    this.$categories = categories
  }

  @Action({ commit: 'setCategories' }) fetchCategories () {
    return
  }

  get categories () {
    return this.$categories
  }
}
