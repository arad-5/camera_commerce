import BestDealsBanner from './BestDealsBanner'

const BestDeals = ({ bestDealsProductsBanner }) => {
    console.log(bestDealsProductsBanner)
    return (
        <aside className='md:w-1/3 rounded-3xl space-y-1 p-1 bg-gradient-to-r from-orange-400 via-red-600 bg-orange-400 overflow-hidden'>
            <div className='h-14 background rounded-3xl text-2xl flex justify-center items-center'>Today best deals 🔥</div>
            <BestDealsBanner bestDealsProductsBanner={bestDealsProductsBanner} />
            <div className='background p-5 rounded-3xl'>
                
            </div>
        </aside>
    )
}

export default BestDeals
