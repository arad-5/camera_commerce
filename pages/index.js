import Head from 'next/head'
import Banners from '../components/sections/index/banners/Banners'
import request from '../services/request'
import CategoriesRowSlider from '../components/category/CategoriesRowSlider'
import BestDeals from '../components/sections/index/banners/bestDeals'

export default function Home({ categories, bestDealsProductsBanner, bestDealsOffProducts, indexMainBanners }) {
    console.log(bestDealsProductsBanner)

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name='description' content='Generated by create next app' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className='pt-3'>
                <header className='flex flex-col lg:min-h-[600px] grid-rows-1 lg:flex-row lg:space-x-5 space-y-5 lg:space-y-0'>
                    <div className='lg:w-2/3 xl:w-3/4 row-span-1 space-y-4'>
                        <CategoriesRowSlider categories={categories} />
                        <Banners banners={indexMainBanners} />
                    </div>
                    <BestDeals bestDealsProductsBanner={bestDealsProductsBanner} bestDealsOffProducts={bestDealsOffProducts} />
                </header>
            </main>
        </div>
    )
}

export const getStaticProps = async () => {
    const { indexMainBanners, categories } = await request(`{
        indexMainBanners {
            id
            title
            description
            banner {
              url
            }
            products {
              title
              price
              cardPicture {
                url
              }
            }
        }
        categories {
            title
            categorySlug
            picture {
                url
              }
        }
    }`)
    const { products: bestDealsProductsBanner } = await request(`
      {
        products(where: {discount: {discountPercent_gt: 30}, bannerDetail: {}}) {
				id
				title
				price
				discount {
					discountPrice
					discountPercent
				}
				cardPicture {
					url
				}
				bannerDetail {
					title
					bannerVideo {
						url
					}
					bannerImage {
						url
					}
				}
				brand {
					title
					logo {
						url
					}
				}
        	}
      	}
      `)
    const { products: bestDealsOffProducts } = await request(`
        {
            products(where: {discount: {discountPercent_lt: 30}, isAvailable: true}) {
                id
                price
                title
                cardPicture {
                  url
                }
                discount {
                  discountPrice
                  discountPercent
                }
            }
        }
      `)

    return {
        props: {
            categories,
            indexMainBanners,
            bestDealsProductsBanner,
            bestDealsOffProducts,
        },
    }
}
