import { PRODUCT_STATUS } from '@merkaly/api/src/inventory/products/product.entity'
import CategoryReference from '@merkaly/sdk-js/src/inventory/category/category.reference'
import faker from 'faker'

export const getCategories = (count = 10) => new Array(count).fill(null).map(getCategory)

export const getCategory = () => {
  const category = new CategoryReference()
  category.id = faker.finance.bic()
  category.name = faker.commerce.department()

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  category.status = faker.random.arrayElement(Object.keys(PRODUCT_STATUS)) as PRODUCT_STATUS

  return category
}
