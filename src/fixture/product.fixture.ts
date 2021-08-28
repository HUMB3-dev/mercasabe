import { PRODUCT_STATUS, PRODUCT_UNIT } from '@merkaly/api/src/inventory/products/product.entity'
import ProductReference from '@merkaly/sdk-js/src/inventory/product/product.reference'
import faker from 'faker'

export const getProducts = (count = 10) => new Array(count).fill(null).map(getProduct)

export const getProduct = () => {
  const product = new ProductReference()
  product.id = faker.finance.bic()
  product.name = faker.vehicle.vehicle()
  product.description = faker.commerce.productDescription()
  product.price = Number(faker.commerce.price())
  product.unit = faker.random.arrayElement(Object.keys(PRODUCT_UNIT)) as PRODUCT_UNIT
  product.status = faker.random.arrayElement(Object.keys(PRODUCT_STATUS)) as PRODUCT_STATUS
  product.category = { id: faker.commerce.department(), name: faker.vehicle.model() }
  product.brand = { id: faker.vehicle.manufacturer(), name: faker.vehicle.manufacturer() }
  product.hashtags = [faker.commerce.productMaterial(), faker.commerce.color()]

  return product
}
