<template>
  <BOverlay :show="busy" spinner-variant="primary">
    <BRow>
      <BCol cols="12" lg="8">
        <CardInformation v-model="information" class="mb-3" />

        <CardMedia class="mb-3" />

        <CardCatalog />
      </BCol>
      <BCol cols="12" lg="4">
        <div class="sticky-top" :class="{'z-index--1': busy }">
          <CardStatus v-model="status" class="mb-3" />

          <CardPricing v-model="pricing" class="mb-3" />

          <CardRelations class="mb-3" />

          <CardHashtags v-model="model.hashtags" />
        </div>
      </BCol>
    </BRow>
  </BOverlay>
</template>

<script lang="ts">
import ProductReference from '@merkaly/sdk-js/src/inventory/product/product.reference'
import { Component, Model, Prop, Vue } from 'vue-property-decorator'
import CardCatalog from './components/card.catalog.vue'
import CardHashtags from './components/card.hashtags.vue'
import CardInformation, { ProductInformation } from './components/card.information.vue'
import CardMedia from './components/card.media.vue'
import CardPricing, { ProductPricing } from './components/card.pricing.vue'
import CardRelations from './components/card.relations.vue'
import CardStatus, { ProductStatus } from './components/card.status.vue'

const components = { CardHashtags, CardRelations, CardPricing, CardStatus, CardCatalog, CardMedia, CardInformation }

@Component({ components })
export default class InventoryProductForm extends Vue {
  @Model('change', { type: Object }) readonly model!: ProductReference
  @Prop({ default: false, type: Boolean }) readonly busy!: boolean

  protected information: ProductInformation = {
    name: this.model.name,
    description: this.model.description
  }

  protected pricing: ProductPricing = {
    sale: this.model.price,
    purchase: Number((this.model.price * 0.85).toFixed(2)),
    unit: this.model.unit
  }

  protected status: ProductStatus = {
    state: this.model.status,
    availableFrom: new Date().toISOString()
  }
}
</script>
