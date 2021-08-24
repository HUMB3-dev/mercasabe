import Vue from 'vue'
import Vuex from 'vuex'
import Inventory from './inventory'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { Inventory }
})