import Link from "next/link";
import Image from "next/image";
import { CategoryRowCard as Props } from "../../types/category";

const CategoryRowCard = ({ categorySlug, title, picture }: Props) => {
    return (
        <Link key={categorySlug} href={`/${categorySlug}`} passHref>
            <div className="flex-shrink-0 inline-flex rounded-full px-5 cursor-pointer items-center justify-between bg-white transition-colors dark:hover:text-black dark:hover:bg-white dark:border-0 dark:bg-neutral-800">
                <div className="relative w-10 mr-3">
                    <Image
                        src={picture.url}
                        alt={title}
                        layout="responsive"
                        width={40}
                        height={40}
                        className="object-contain bg-white rounded-full"
                    />
                </div>
                <h1 className="text-center">{title}</h1>
            </div>
        </Link>
    );
};

export default CategoryRowCard;
