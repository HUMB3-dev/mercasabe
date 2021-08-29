import OrganizationReference from '@merkaly/sdk-js/src/account/organization/organization.reference'
import faker from 'faker'

export const getOrganizations = (count = 10) => new Array(count).fill(null).map(getOrganization)

export const getOrganization = () => {
  const organization = new OrganizationReference()
  organization.id = faker.datatype.uuid()
  organization.name = faker.internet.domainName()
  organization.display_name = `${faker.company.companyName()} ${faker.company.companySuffix()}`
  organization.branding = {
    logo_url: faker.datatype.boolean() ? `${faker.image.business()}?${faker.datatype.uuid()}` : '',
    colors: {
      page_background: faker.internet.color(),
      primary: faker.internet.color()
    }
  }

  return organization
}
