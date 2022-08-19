import Banner from "./Banner";
import { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const Banners = ({ banners }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <section
            className={`relative background rounded-3xl overflow-hidden h-[calc(100%_-_4rem)]`}
        >
            <div className="px-5 py-3 absolute z-20 bg-gradient-to-b from-[#101010] w-full top-0 left-0 space-x-2">
                {banners.map((banner, tabIndex) => (
                    <button
                        key={banner.id}
                        onClick={() => setCurrentIndex(tabIndex)}
                        className={`px-4 py-2 rounded-full text-white ${
                            currentIndex === tabIndex
                                ? "bg-white text-black"
                                : "bg-neutral-800"
                        }`}
                    >
                        {banner.title.toLowerCase()}
                    </button>
                ))}
            </div>
            <Banner banner={banners[currentIndex]} />
            {currentIndex > 0 && (
                <button
                    onClick={() => setCurrentIndex((curr) => curr - 1)}
                    className="w-12 h-12 absolute top-1/4 left-5 z-20 flex items-center justify-center rounded-full bg-white hover:pr-1 transition-[padding_scale] hover:scale-110"
                >
                    <FiChevronDown className="text-black text-3xl rotate-90" />
                </button>
            )}
            {currentIndex < banners.length - 1 && (
                <button
                    onClick={() => setCurrentIndex((curr) => curr + 1)}
                    className="w-12 z-20 h-12 absolute top-1/4 right-5 flex items-center justify-center rounded-full bg-white hover:pl-1 transition-[padding_scale] hover:scale-110"
                >
                    <FiChevronDown className="text-black text-3xl -rotate-90" />
                </button>
            )}
        </section>
    );
};

export default Banners;
