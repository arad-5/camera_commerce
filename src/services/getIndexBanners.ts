import request from "./request";
import IndexBanner from "../types/models/index/indexBanner";

const getIndexBanners = async (): Promise<IndexBanner[]> => {
    const { indexMainBanners } = await request(`
        {
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
		}
    `);
    return indexMainBanners;
};

export default getIndexBanners;
