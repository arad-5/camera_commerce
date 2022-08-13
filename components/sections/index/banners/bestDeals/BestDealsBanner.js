import React, { useEffect, useState } from 'react'
import ProductCardRow from '../../../../product/ProductCardRow'
import Image from 'next/image'

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-creative'

// import required modules
import { Pagination, Navigation, EffectCreative } from 'swiper'

import { HiChevronRight } from 'react-icons/hi'

const BestDealsBanner = ({ bestDealsProductsBanner }) => {
    return (
        <div className='flex flex-col justify-between dark:border-neutral-800 border rounded-3xl overflow-hidden'>
            <div className='relative'>
                <Swiper
                    spaceBetween={0}
                    effect={'creative'}
                    creativeEffect={{
                        prev: {
                            shadow: true,
                            translate: [0, 0, -400],
                        },
                        next: {
                            translate: ['100%', 0, 0],
                        },
                    }}
                    navigation={{
                        prevEl: '.best-deals-banner-prev-button',
                        nextEl: '.best-deals-banner-next-button',
                    }}
                    modules={[Pagination, Navigation, EffectCreative]}
                    pagination={true}
                    className=' w-full rounded-3xl'
                    style={{ paddingBottom: '40px' }}
                >
                    {bestDealsProductsBanner.map((productBanner) => {
                        const {
                            bannerDetail,
                            title: bannerTitle,
                            brand: {
                                title: brandName,
                                logo: { url: brandLogo },
                            },
                        } = productBanner

                        return (
                            <SwiperSlide key={productBanner.id} className='background rounded-3xl h-full p-2'>
                                {bannerDetail?.bannerVideo ? (
                                    <video controls autoPlay loop className='w-full rounded-3xl'>
                                        <source src={bannerDetail.bannerVideo.url} type='video/webm'></source>
                                        Your browser does not support the video tag.
                                    </video>
                                ) : (
                                    <Image
                                        src={bannerDetail.bannerImage.url}
                                        layout='responsive'
                                        className='object-cover rounded-3xl'
                                        height={950}
                                        width={1980}
                                        alt={bannerTitle}
                                    />
                                )}
                                <div className='p-3 px-0 space-y-2'>
                                    <div className='h-10 flex items-center space-x-4 w-28'>
                                        <img src={brandLogo} alt={brandName} className='object-contain h-full rounded-md' />
                                        <h3 className='text-lg font-semibold text-neutral-700 dark:text-white'>{brandName}</h3>
                                    </div>
                                    <div>
                                        <h1 className='text-lg text-neutral-500 dark:text-neutral-300'>{}</h1>
                                    </div>
                                    <div className='space-y-2 py-2'>
                                        <ProductCardRow {...productBanner} />
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <div className='p-2 absolute bottom-1 left-0 z-20 w-full dark:border-neutral-800  border-t flex justify-between items-center'>
                    <button className='p-1 cursor-pointer hover:bg-white transition-colors hover:text-black disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent border dark:border-neutral-800 rounded-full best-deals-banner-prev-button'>
                        <HiChevronRight className='rotate-180 text-2xl' />
                    </button>
                    <button className='p-1 cursor-pointer hover:bg-white transition-colors hover:text-black disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent border dark:border-neutral-800 rounded-full best-deals-banner-next-button'>
                        <HiChevronRight className='text-2xl' />
                    </button>
                </div>
            </div>
        </div>
    )
}
export default BestDealsBanner
