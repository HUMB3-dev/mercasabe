<template>
  <BOverlay :show="busy" spinner-variant="primary">
    <BRow>
      <BCol cols="12" lg="8">
        <CardInformation v-model="information" />

        <CardMedia />

        <CardCatalog />
      </BCol>
      <BCol cols="12" lg="4">
        <div :class="{'sticky-top': !busy }">
          <CardStatus />

          <CardPricing />

          <CardRelations />

          <CardHashtags />
        </div>
      </BCol>
    </BRow>
  </BOverlay>
</template>

<script lang="ts">
import ProductReference from '@merkaly/sdk-js/src/inventory/product/product.reference'
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import CardCatalog from './components/CardCatalog.vue'
import CardHashtags from './components/CardHashtags.vue'
import CardInformation from './components/CardInformation.vue'
import CardMedia from './components/CardMedia.vue'
import CardPricing from './components/CardPricing.vue'
import CardRelations from './components/CardRelations.vue'
import CardStatus from './components/CardStatus.vue'
import FormDragFile from './components/FormDragFile.vue'

const components = {
  CardHashtags, CardRelations, CardPricing, CardStatus, CardCatalog, CardMedia, CardInformation, FormDragFile
}

@Component({ components })
export default class ProductForm extends Vue {
  @Prop({ required: true, type: Object }) readonly value!: ProductReference
  @Prop({ default: false, type: Boolean }) readonly busy!: boolean

  protected information = {
    name: this.value.name,
    description: this.value.description
  }

}
</script>
