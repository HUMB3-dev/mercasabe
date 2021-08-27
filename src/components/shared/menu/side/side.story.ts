import { Vue } from 'vue-property-decorator'
import SideMenuItem from './components/item.vue'
import SideMenu from './side.vue'

export default {
  title: 'Shared/Menu/Side',
  component: SideMenu,
  arg: {
    title: 'test'
  }
}

export const Box = (args: typeof SideMenu) => Vue.extend({
  props: Object.keys(args),
  components: { SideMenu, SideMenuItem },
  template: `
    <nav class="navbar navbar-vertical navbar-expand-xl navbar-card mt-4">
    <div class="navbar-collapse">
      <div class="navbar-vertical-content scrollbar">
        <ul class="navbar-nav flex-column mb-3" id="navbarVerticalNav">
          <SideMenuItem to="/page/1" icon="ship" title=" Menu Item 1" />
          <SideMenu v-bind="$props">
            <SideMenuItem to="/page/2" icon="users" title="Menu Item 2" />
            <SideMenuItem to="/page/3" icon="joint" title="Menu Item 3" />
            <SideMenuItem to="/page/4" icon="bus" title="Menu Item 4">
              <template>
                <SideMenuItem to="/page/5" title="Menu Item 5" />
                <SideMenuItem to="/page/6" title="Menu Item 6">
                  <template>
                    <SideMenuItem to="/page/7" title="Menu Item 7" />
                  </template>
                </SideMenuItem>
              </template>
            </SideMenuItem>
          </SideMenu>

        </ul>
      </div>
    </div>
    </nav>
  `
})
Box.args = {
  title: 'Inventory'
}
