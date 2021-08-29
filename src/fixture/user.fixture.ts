import UserReference from '@merkaly/sdk-js/src/account/user/user.reference'
import faker from 'faker'

export const getUsers = (count = 10) => new Array(count).fill(null).map(getUser)

export const getUser = () => {
  const user = new UserReference()
  user.id = faker.datatype.uuid()
  user.given_name = faker.name.firstName()
  user.family_name = `${faker.name.lastName()} ${faker.name.lastName()}`
  user.name = `${user.given_name} ${user.family_name}`
  user.created_at = faker.date.past().toISOString()
  user.email = faker.internet.email(user.given_name).toLowerCase()
  user.email_verified = faker.datatype.boolean()
  user.last_ip = faker.internet.ip()
  user.last_login = faker.date.past().toISOString()
  user.logins_count = faker.datatype.number(999)
  user.nickname = faker.internet.userName(user.given_name, user.family_name)
  user.picture = faker.datatype.boolean() ? faker.image.avatar() : ''
  user.updated_at = faker.date.past().toISOString()
  user.user_id = faker.datatype.uuid()

  return user
}
