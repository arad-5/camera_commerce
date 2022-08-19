import React, { useEffect, useState } from "react";
import ProductCardRow from "../../components/product/ProductCardRow";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

// import required modules
import { Pagination, Navigation, EffectCreative } from "swiper";

import { HiChevronRight } from "react-icons/hi";

const DealsBanner = ({ bestDealsBanners }) => {
    return (
        <div className="relative">
            <Swiper
                spaceBetween={0}
                effect={"creative"}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                    },
                    next: {
                        translate: ["100%", 0, 0],
                    },
                }}
                navigation={{
                    prevEl: ".best-deals-banner-prev-button",
                    nextEl: ".best-deals-banner-next-button",
                }}
                modules={[Pagination, Navigation, EffectCreative]}
                pagination={true}
                className="w-full rounded-3xl bg-neutral-200 dark:bg-neutral-800"
                style={{ paddingBottom: "50px" }}
            >
                {bestDealsBanners.map((productBanner) => {
                    const {
                        id,
                        bannerDetail,
                        title: bannerTitle,
                        brand: {
                            title: brandName,
                            logo: { url: brandLogo },
                        },
                    } = productBanner;

                    return (
                        <SwiperSlide key={id} className="p-2 rounded-3xl">
                            <div className="rounded-3xl bg-white/95  dark:bg-neutral-900/95">
                                <div className="h-44 relative">
                                    {bannerDetail?.bannerVideo ? (
                                        <video
                                            controls
                                            autoPlay
                                            loop
                                            muted
                                            className="w-full h-full rounded-t-3xl bg-black object-cover"
                                            src={bannerDetail.bannerVideo.url}
                                        ></video>
                                    ) : (
                                        <Image
                                            src={bannerDetail.bannerImage.url}
                                            layout="fill"
                                            className="object-cover rounded-t-3xl w-full"
                                            alt={bannerTitle}
                                        />
                                    )}
                                </div>
                                <div className="p-2">
                                    <div className="h-10 flex items-center space-x-4 w-28">
                                        <img
                                            src={brandLogo}
                                            alt={brandName}
                                            className="object-contain h-full rounded-md"
                                        />
                                        <h3 className="text-lg font-semibold text-neutral-700 dark:text-white">
                                            {brandName}
                                        </h3>
                                    </div>
                                    <h1 className="text-sm text-neutral-500 dark:text-neutral-300">
                                        {bannerTitle}
                                    </h1>
                                    <div className="space-y-2 py-2">
                                        <ProductCardRow {...productBanner} />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <div className="p-2 absolute bottom-1 left-0 rounded-3xl z-20 w-full dark:border-neutral-800  border-t flex justify-between items-center">
                <button className="p-1 cursor-pointer hover:bg-white transition-colors hover:text-black disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent border dark:border-neutral-800 rounded-full best-deals-banner-prev-button">
                    <HiChevronRight className="rotate-180 text-2xl" />
                </button>
                <button className="p-1 cursor-pointer hover:bg-white transition-colors hover:text-black disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent border dark:border-neutral-800 rounded-full best-deals-banner-next-button">
                    <HiChevronRight className="text-2xl" />
                </button>
            </div>
        </div>
    );
};
export default DealsBanner;
