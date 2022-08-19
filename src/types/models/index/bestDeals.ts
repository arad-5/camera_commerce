export type BestDealsBanners = {
    products: {
        id: "string";
        title: string;
        price: number;
        discount: {
            discountPrice: number;
            discountPercent: number;
        };
        cardPicture: {
            url: string;
        };
        bannerDetail: {
            title: string;
            bannerVideo: {
                url: string;
            };
            bannerImage: {
                url: string;
            };
        };
        brand: {
            title: string;
            logo: {
                url: string;
            };
        };
    };
}[]

export type BestDealsProducts = {
    id: string;
    title: string;
    price: number;
    discount: {
        discountPrice: number;
        discountPercent: number;
    };
    cardPicture: {
        url: string;
    };
    bannerDetail: {
        title: string;
        bannerVideo: {
            url: string;
        };
        bannerImage: {
            url: string;
        };
    };
    brand: {
        title: string;
        logo: {
            url: string;
        };
    };
}[];
