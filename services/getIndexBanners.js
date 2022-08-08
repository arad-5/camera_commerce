import { request } from './request'

const getIndexBanners = async () => {
    return await request(`
        {
            indexBanners {
                id
                title
                products {
                    id
                }
                banner {
                    id
                    url
                }
                video {
                    id
                    url
                }
                brand {
                    logo {
                      url
                    }
                    title
                }
                products {
                    price
                    title
                    id
                    cardPicture {
                      url
                    }
                }
            }
            
        }
    `)
}

export default getIndexBanners
