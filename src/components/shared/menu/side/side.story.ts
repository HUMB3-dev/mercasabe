import { Vue } from 'vue-property-decorator'
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
  components: { SideMenu },
  template: `
    <nav class="navbar navbar-vertical navbar-expand-xl navbar-card mt-4">
    <div class="navbar-collapse">
      <div class="navbar-vertical-content scrollbar">
        <ul class="navbar-nav flex-column mb-3" id="navbarVerticalNav">
          <SideMenu v-bind="$props" />
        </ul>
      </div>
    </div>
    </nav>
  `
})
Box.args = {
  title: 'Documentation'
}
