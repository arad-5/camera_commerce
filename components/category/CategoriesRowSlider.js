import getCategories from '../../services/getCategories'
import Link from 'next/link'
import Image from 'next/image'

const CategoriesRowSlider = ({ categories }) => {
    return (
        <div className='space-x-2 flex flex-nowrap overflow-auto h-12'>
            {categories.map((category) => {
                const {
                    title,
                    picture: { url: picture },
                    categorySlug,
                } = category

                return (
                    <Link key={categorySlug} href={`/${categorySlug}`} passHref>
                        <div className='flex-shrink-0 inline-flex rounded-full px-5 cursor-pointer items-center justify-between bg-white transition-colors dark:hover:text-black dark:hover:bg-white dark:border-0 dark:bg-neutral-800'>
                            <div className='relative w-10 mr-3'>
                                <Image
                                    src={picture}
                                    alt={title}
                                    layout='responsive'
                                    width={40}
                                    height={40}
                                    className='object-contain bg-white rounded-full'
                                />
                            </div>
                            <h1 className='text-center'>{title}</h1>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default CategoriesRowSlider
