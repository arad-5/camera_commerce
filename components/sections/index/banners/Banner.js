import Image from 'next/image'
import ProductCard from '../../../product/ProductCard'

const Banner = ({ banner }) => {
    return (
        <div className='h-full'>
            <div className='h-[400px] md:static relative'>
                <Image src={banner.banner.url} quality={40} layout='fill' className='object-cover z-10' alt={banner.title} />
            </div>
            <div className='absolute w-full z-10 bottom-0 left-0 bg-gradient-to-t via-[#101010]/60 from-[#101010]'>
                <div className='rounded-2xl rounded-bl-none'>
                    <div className='h-full flex w-full z-10'>
                        <div className='mt-auto w-full p-2 md:p-5'>
                            <h2 className='md:text-7xl text-3xl font-extrabold italic mb-2 text-white inline'>{banner.title}</h2>
                            <h3 className='text-xl font-semibold text-neutral-200'>{banner.description}</h3>
                        </div>
                    </div>
                </div>
                <div className='md:p-5 p-2 pr-0 h-52 overflow-auto flex rounded-b-2xl md:bg-transparent'>
                    {banner.products.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Banner
