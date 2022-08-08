import Image from 'next/image'
import Link from 'next/link'

const ProductCard = ({ title, cardPicture, price, id }) => {
    return (
        <Link href={`/product/${id}`}>
            <div className='w-48 flex-shrink-0 pb-2 dark:hover:bg-transparent hover:bg-transparent hover:ring-1 ring-[#101010] transition-all bg-neutral-100 dark:bg-neutral-800 cursor-pointer rounded-3xl space-y-3'>
                <div className='flex justify-center bg-white rounded-xl'>
                    <Image src={cardPicture.url} width='100' height='100' className='' />
                </div>
                <div className='px-2'>
                    <h3 className='text-neutral-700 dark:text-neutral-200'>{title.slice(0, 15)}</h3>
                    <span className='text-neutral-800 font-semibold float-right dark:text-white'>{price}$</span>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard
