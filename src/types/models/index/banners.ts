export type banners = {
    id: string;
    title: string;
    description: string;
    banner: {
        url: string;
    };
    products: {
        title: string;
        price: string;
        cardPicture: {
            url: string;
        };
    };
}[];
