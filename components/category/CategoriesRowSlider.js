import getCategories from '../../services/getCategories'
import Link from 'next/link'
import Image from 'next/image'

const CategoriesRowSlider = ({ categories }) => {
    return (
        <div className='space-x-2 flex flex-nowrap overflow-auto '>
            {categories.map((category) => {
                const {
                    title,
                    picture: { url: picture },
                    categorySlug,
                } = category

                return (
                    <Link key={categorySlug} href={`/${categorySlug}`} passHref>
                        <div className='flex-shrink-0 inline-flex rounded-full py-1 px-5 cursor-pointer  items-center justify-between bg-white transition-colors dark:hover:text-black dark:hover:bg-white pr-5 dark:border-0 dark:bg-neutral-800'>
                            <div className='relative w-12 mr-3'>
                                <Image
                                    src={picture}
                                    alt={title}
                                    layout='responsive'
                                    width={50}
                                    height={50}
                                    className='object-contain bg-white rounded-full'
                                />
                            </div>
                            <h1 className='text-center font-semibold'>{title}</h1>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default CategoriesRowSlider
