//components
import React from "react";
import CategoriesRowSlider from "../../../category/CategoriesRowSlider";
import Banners from "../banners/Banners";
import BestDeals from "../../../bestDeals/index";

const Index = ({
    categories,
    banners,
    bestDealsBanners,
    bestDealsProducts,
}) => {
    return (
        <header className="flex flex-col lg:min-h-[600px] grid-rows-1 lg:flex-row lg:space-x-5 space-y-5 lg:space-y-0">
            <div className="lg:w-2/3 xl:w-3/4 row-span-1 space-y-4">
                <CategoriesRowSlider categories={categories} />
                <Banners banners={banners} />
            </div>
            <BestDeals
                bestDealsBanners={bestDealsBanners}
                bestDealsProducts={bestDealsProducts}
            />
        </header>
    );
};

export default Index;
