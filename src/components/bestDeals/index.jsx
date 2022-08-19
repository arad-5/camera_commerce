import DealsBanner from "./DealsBanner";
import ProductCard from "../product/ProductCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";

import { HiChevronRight } from "react-icons/hi";

const BestDeals = ({ bestDealsBanners, bestDealsProducts }) => {
    console.log(bestDealsProducts);

    return (
        <aside className="flex flex-col lg:w-1/3 xl:w-1/4 justify-between background rounded-3xl p-2 pt-0 bg-gradient-to-r overflow-hidden">
            <div className="relative p-5 rounded-t-3xl background bg-gradienst-to-r from-red-500 via-orange-500 to-red-500 text-2xl flex justify-center items-center">
                Today best deals🔥
            </div>
            <div className="space-y-2">
                <DealsBanner bestDealsBanners={bestDealsBanners} />
                <div className="rounded-3xl h-36 w-full bg-neutral-200 dark:bg-neutral-800 overflow-x-auto">
                    <Swiper
                        slidesPerView={2}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={{
                            prevEl: ".best-deals-offs-prev-button",
                            nextEl: ".best-deals-offs-next-button",
                        }}
                        className="mySwiper h-full relative"
                        modules={[Navigation]}
                    >
                        {bestDealsProducts.map((product) => (
                            <SwiperSlide
                                key={product.id}
                                className="p-2 first:pl-2 px-1"
                            >
                                <ProductCard {...product} size="sm" />
                            </SwiperSlide>
                        ))}
                        {bestDealsProducts.map((product) => (
                            <SwiperSlide
                                key={product.id}
                                className="p-2 px-1 last:pr-2"
                            >
                                <ProductCard {...product} size="sm" />
                            </SwiperSlide>
                        ))}
                        <div className="absolute top-1/2 left-0 z-10 -translate-y-1/2 h-full flex bg-gradient-to-r pl-2">
                            <button className="p-1 cursor-pointer transition-colors m-auto disabled:hidden border background dark:border-neutral-800 rounded-full best-deals-offs-prev-button">
                                <HiChevronRight className="rotate-180 text-2xl" />
                            </button>
                        </div>
                        <div className="absolute top-1/2 right-0 z-10 -translate-y-1/2 h-full flex bg-gradient-to-l pr-2">
                            <button className="p-1 cursor-pointer m-auto transition-colors disabled:hidden border background dark:border-neutral-800 rounded-full best-deals-offs-next-button">
                                <HiChevronRight className="text-2xl" />
                            </button>
                        </div>
                    </Swiper>
                </div>
            </div>
        </aside>
    );
};

export default BestDeals;
