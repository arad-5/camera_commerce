import { request } from './request'

const getCategories = async () => {
    return await request(`
    categories {
        id
        title
        bannerPicture {
          url
        }
      }
    `)
}

export default getCategories
