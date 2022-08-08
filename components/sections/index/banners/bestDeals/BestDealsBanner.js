import React, { useRef, useState } from 'react'
import ProductCardRow from '../../../../product/ProductCardRow'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Pagination, Navigation } from 'swiper'

const BestDealsBanner = ({ bestDealsProductsBanner }) => (
    <div className='flex flex-col background justify-between rounded-3xl overflow-hidden'>
        <Swiper
            pagination={{
                type: 'progressbar',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className='mySwiper relative w-full'
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
                    <SwiperSlide key={productBanner.id}>
                        <div>
                            {bannerDetail?.bannerVideo ? (
                                <video controls autoPlay loop className='w-full'>
                                    <source src={bannerDetail.bannerVideo.url} type='video/webm'></source>
                                    Your browser does not support the video tag.
                                </video>
                            ) : (
                                <Image
                                    src={bannerDetail.bannerImage.url}
                                    layout='responsive'
                                    className='object-cover'
                                    height={1080}
                                    width={1980}
                                    alt={bannerTitle}
                                />
                            )}
                            <div className='lg:px-5 p-3 space-y-2'>
                                <div className='h-10 flex  items-center space-x-4'>
                                    <img src={brandLogo} alt={brandName} className='object-contain h-full' />
                                    <h3 className='text-lg font-semibold text-neutral-700 dark:text-white'>{brandName}</h3>
                                </div>
                                <div>
                                    <h1 className='text-lg text-neutral-500 dark:text-neutral-300'>{}</h1>
                                </div>
                                <div className='lg:px-5 p-2 space-y-2'>
                                    <ProductCardRow {...productBanner} />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </div>
)

export default BestDealsBanner
