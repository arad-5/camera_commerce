import request from "./request";
import { BestDealsBanner } from "../types/models/index/bestDeals";

export const getBestDealsBanners = async (): Promise<BestDealsBanner[]> => {
    const { products } = await request(`
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
    `);

    return products;
};
export const getBestDealsProducts = async () => {
    const { products } = await request(`
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
    `);
    return products;
};
