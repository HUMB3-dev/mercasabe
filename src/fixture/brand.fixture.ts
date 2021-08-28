import { PRODUCT_STATUS } from '@merkaly/api/src/inventory/products/product.entity'
import BrandReference from '@merkaly/sdk-js/src/inventory/brand/brand.reference'
import faker from 'faker'

export const getBrands = (count = 10) => new Array(count).fill(null).map(getBrand)

export const getBrand = () => {
  const brand = new BrandReference()
  brand.id = faker.finance.bic()
  brand.name = faker.vehicle.manufacturer()

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  brand.status = faker.random.arrayElement(Object.keys(PRODUCT_STATUS)) as PRODUCT_STATUS

  return brand
}
