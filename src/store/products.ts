import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'

@Module({ name: 'Inventory/Products', namespaced: true, stateFactory: true })
export default class Products extends VuexModule {
  count = 0

  @Mutation increment (delta: number) {
    this.count += delta
  }

  @Mutation decrement (delta: number) {
    this.count -= delta
  }

  @Action({ commit: 'increment' }) incr () {
    return 5
  }

  @Action({ commit: 'decrement' }) decr () {
    return 5
  }

}
