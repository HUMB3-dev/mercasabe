<template>
  <BRow>
    <BCol cols="12" lg="8">
      <CardInformation v-model="product.information" class="mb-3" :loading="loading"  />

      <CardMedia class="mb-3" :loading="loading"  />

      <CardCatalog :loading="loading"  />
    </BCol>
    <BCol cols="12" lg="4">
      <div :class="{'z-index--1': loading }" class="sticky-top">
        <CardStatus v-model="product.status" class="mb-3" :loading="loading"  />

        <CardPricing v-model="product.pricing" class="mb-3" :loading="loading" />

        <CardRelations class="mb-3" :loading="loading"  />

        <CardHashtags v-model="model.hashtags" :loading="loading"  />
      </div>
    </BCol>
  </BRow>
</template>

<script lang="ts">
import ProductReference from '@merkaly/sdk-js/src/inventory/product/product.reference'
import { Component, Prop, VModel, Vue, Watch } from 'vue-property-decorator'
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

  protected product = {
    information: {} as ProductInformation,
    pricing: {} as ProductPricing,
    status: {} as ProductStatus,
    hastags: {} as string[]
  }

  protected mounted () {
    this.product.information = {
      name: this.model.name,
      description: this.model.description
    }

    this.product.pricing = {
      sale: this.model.price,
      purchase: Number((this.model.price * 0.85).toFixed(2)),
      unit: this.model.unit
    }

    this.product.status = {
      state: this.model.status,
      availableFrom: new Date().toISOString()
    }

    this.product.hastags = this.model.hashtags
  }

  @Watch('product', { deep: true }) onProductChange () {
    this.model.name = this.product.information.name
    this.model.description = this.product.information.description

    this.model.status = this.product.status.state

    this.model.price = this.product.pricing.sale

    this.model.hashtags = this.product.hastags
  }
}
</script>
