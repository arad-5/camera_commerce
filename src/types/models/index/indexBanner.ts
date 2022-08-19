import { ProductCard } from "../../product";

export default interface IndexBanner extends ProductCard {
    id: string;
    title: string;
    description: string;
    banner: {
        url: string;
    };
}
