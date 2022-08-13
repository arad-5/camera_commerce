import BestDealsBanner from './BestDealsBanner'

const BestDeals = ({ bestDealsProductsBanner }) => {
    console.log(bestDealsProductsBanner)
    return (
        <aside className='lg:w-1/3 space-y-2 background rounded-3xl p-2 bg-gradient-to-r overflow-hidden'>
            <div className='relative rounded-t-3xl background bg-gradienst-to-r from-red-500 via-orange-500 to-red-500 text-2xl flex justify-center items-center'>
                Today best deals🔥
            </div>
            <BestDealsBanner bestDealsProductsBanner={bestDealsProductsBanner} />
            {/* <div className='p-5 rounded-3xl'></div> */}
        </aside>
    )
}

export default BestDeals
