import Image from 'next/image'
import Link from 'next/link'

const ProductCard = ({ title, cardPicture, price, id, size }) => {
    return (
        <Link href={`/product/${id}`}>
            <div
                className={`${
                    size === 'sm' ? 'w-full h-full' : 'w-48 space-y-3'
                } flex-shrink-0 pb-2 dark:hover:bg-transparent overflow-hidden dark:border-neutral-700 border hover:bg-transparent transition-all cursor-pointer rounded-3xl p-2 background`}
            >
                <div className='flex justify-center bg-white rounded-xl'>
                    <Image
                        src={cardPicture.url}
                        width={size === 'sm' ? '70' : '100'}
                        height={size === 'sm' ? '70' : '100'}
                        alt={title}
                        className='object-contain'
                    />
                </div>
                <div className='px-2'>
                    <h3 className={`text-neutral-700 dark:text-neutral-200 ${size === 'sm' ? 'text-sm' : ''}`}>{size === 'sm'? title.slice(0 , 10):title.slice(0, 15)}</h3>
                    <span className='text-neutral-800 font-semibold float-right dark:text-white'>{price}$</span>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard
