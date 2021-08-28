<template>
  <BRow>
    <BCol cols="12" lg="8">
      <CardInformation v-model="information" class="mb-3" />

      <CardMedia class="mb-3" />

      <CardCatalog />
    </BCol>
    <BCol cols="12" lg="4">
      <div :class="{'z-index--1': loading }" class="sticky-top">
        <CardStatus v-model="status" class="mb-3" />

        <CardPricing v-model="pricing" class="mb-3" />

        <CardRelations class="mb-3" />

        <CardHashtags v-model="model.hashtags" />
      </div>
    </BCol>
  </BRow>
</template>

<script lang="ts">
import ProductReference from '@merkaly/sdk-js/src/inventory/product/product.reference'
import { Component, Prop, VModel, Vue } from 'vue-property-decorator'
import CardCatalog from './components/CardCatalog.vue'
import CardHashtags from './components/CardHashtags.vue'
import CardInformation, { ProductInformation } from './components/CardInformation.vue'
import CardMedia from './components/CardMedia.vue'
import CardPricing, { ProductPricing } from './components/CardPricing.vue'
import CardRelations from './components/CardRelations.vue'
import CardStatus, { ProductStatus } from './components/CardStatus.vue'

const components = { CardHashtags, CardRelations, CardPricing, CardStatus, CardCatalog, CardMedia, CardInformation }

@Component({ components })
export default class ProductForm extends Vue {
  @VModel({ type: Object }) readonly model!: ProductReference
  @Prop({ type: Boolean, default: false }) readonly loading!: boolean

  protected get information(): ProductInformation {
    return {
      name: this.model.name,
      description: this.model.description
    }
  }

  protected get pricing(): ProductPricing {
    return {
      sale: this.model.price,
      purchase: Number((this.model.price * 0.85).toFixed(2)),
      unit: this.model.unit
    }
  }

  protected get status (): ProductStatus {
    return {
      state: this.model.status,
      availableFrom: new Date().toISOString()
    }
  }
}
</script>
