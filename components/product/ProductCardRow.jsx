import Image from 'next/image'
import React from 'react'
import { HiChevronRight } from 'react-icons/hi'

const ProductCardRow = ({ title, price, cardPicture }) => {
    return (
        <div className='rounded-xl pr-3 flex items-center bg-neutral-50 dark:bg-neutral-800 overflow-hidden cursor-pointer hover:shadow-md transition-shadow dark:border-0 w-full'>
            <div className='w-24 h-full'>
                <Image src={cardPicture.url} alt={title}  layout='responsive' width={50} height={40} className='object-cover bg-white' />
            </div>
            <div>
                <div className='pl-4'>
                    <h2 className='text-sm leading-4'>{title}</h2>
                    <div className='text-md text-secondary'>{price}$</div>
                </div>
            </div>
            <HiChevronRight className='text-2xl ml-auto' />
        </div>
    )
}

export default ProductCardRow
