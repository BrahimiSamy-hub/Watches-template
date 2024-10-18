import { product1, product2, product3 } from '../../assets'

export const FeaturedProducts = () => {
  return (
    <div className='featured-container'>
      <div className='featured-title'>
        <h2 className='mt-1'>FEATURED</h2>
        <div className='w-16 h-1 bg-n-2 mx-auto mt-2 mb-10'></div>
        <div className='flex flex-col justify-around gap-20 lg:flex-row'>
          <div className='relative h-80 w-64 bg-white border border-[#F0F0F0] p-5 rounded flex flex-col justify-center hover:cursor-pointer hover:shadow-figma-shadow group'>
            <span className='-left-[18px] text-white top-8 absolute -rotate-90 bg-n-2 px-4 py-1'>
              SALE
            </span>
            <img
              src={product1}
              alt=''
              className='object-contain w-52 h-52 group-hover:-rotate-90 transition-transform duration-700'
            />
            <h2>JAZZMASTER</h2>
            <h4 className='text-n-2 font-bold'>
              8500
              <small>
                <sup>DA</sup>
              </small>
            </h4>
          </div>
          <div className='relative h-80 w-64 bg-white border border-[#F0F0F0] p-5 rounded flex flex-col justify-center hover:cursor-pointer hover:shadow-figma-shadow group'>
            <span className='-left-[18px] text-white top-8 absolute -rotate-90 bg-n-2 px-4 py-1'>
              SALE
            </span>
            <img
              src={product2}
              alt=''
              className='object-contain w-52 h-52 group-hover:-rotate-90 transition-transform duration-700'
            />
            <h2>INGERSOLL</h2>
            <h4 className='text-n-2 font-bold'>
              5500
              <small>
                <sup>DA</sup>
              </small>
            </h4>
          </div>
          <div className='relative h-80 w-64 bg-white border border-[#F0F0F0] p-5 rounded flex flex-col justify-center hover:cursor-pointer hover:shadow-figma-shadow group'>
            <span className='-left-[18px] text-white top-8 absolute -rotate-90 bg-n-2 px-4 py-1'>
              SALE
            </span>
            <img
              src={product3}
              alt=''
              className='object-contain w-52 h-52 group-hover:-rotate-90 transition-transform duration-700'
            />
            <h2> ROSE GOLD</h2>
            <h4 className='text-n-2 font-bold'>
              10500
              <small>
                <sup>DA</sup>
              </small>
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}
