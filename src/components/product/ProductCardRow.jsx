import Image from "next/image";
import React from "react";
import { HiChevronRight } from "react-icons/hi";
import { MdOutlineShoppingBasket } from "react-icons/md";

const ProductCardRow = ({
    title,
    price,
    cardPicture,
    discount: { discountPrice, discountPercent },
    discount,
}) => {
    return (
        <div className="rounded-xl flex border overflow-hidden cursor-pointer background dark:border-neutral-800 hover:shadow-md transition-shadow w-full items-center py-2">
            <div className="xl:w-32 w-24 flex-shrink-0 items-center m-1">
                <Image
                    src={cardPicture.url}
                    alt={title}
                    layout="responsive"
                    width={70}
                    height={50}
                    className="object-cover rounded-lg"
                />
            </div>
            <div className="w-full flex-col justify-between flex p-3 border-l dark:border-neutral-800">
                <div className="w-full flex justify-between">
                    <div>
                        <h2 className="text-md leading-4 font-medium">
                            {title}
                        </h2>
                    </div>
                    <HiChevronRight className="text-xl text-neutral-400" />
                </div>
                <div className="font-semibold">
                    <div className="text-2xl bg-clip-text -mb-2 text-transparent bg-gradient-to-r from-orange-500 dark:from-orange-400 dark:to-red-500 to-red-500">
                        {discountPercent}%
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="space-x-2">
                            <span className="xl:text-xl text-md">
                                {discountPrice}$
                            </span>
                            <span className="text-neutral-400 xl:text-md text-sm line-through">
                                {price}$
                            </span>
                        </div>
                        <button className="rounded-full border h-7 px-2 dark:border-neutral-800 tracking-tighter flex items-center">
                            <MdOutlineShoppingBasket className="inline" /> +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCardRow;
