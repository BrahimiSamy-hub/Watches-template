import { product1 } from '../../assets'

const NewArrivals = () => {
  const products = [
    {
      name: 'LONGINES ROSE',
      price: 980,
      isNew: true,
      imgSrc: product1,
    },
    {
      name: 'JAZZMASTER',
      price: 1150,
      isNew: true,
      imgSrc: product1,
    },
    {
      name: 'DREYFUSS GOLD',
      price: 750,
      isNew: true,
      imgSrc: product1,
    },
    {
      name: 'PORTUGUESE ROSE',
      price: 1590,
      isNew: true,
      imgSrc: product1,
    },
  ]

  return (
    <section className='py-12 '>
      <div className='text-center mb-8'>
        <h2 className='text-xl font-semibold'>New Arrivals</h2>
        <div className='w-16 h-1 bg-n-2 mx-auto mt-2'></div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto'>
        {products.map((product, index) => (
          <div
            key={index}
            className='pb-4 relative group rounded-md shadow-md bg-white transition-all duration-500 overflow-hidden hover:bg-[#19714999] '
          >
            {/* Background Flooding Effect */}
            <div className='absolute inset-0 hover:bg-[#1971499]  transform scale-0 group-hover:scale-110 transition-transform duration-500 origin-center'></div>

            <div className='relative z-10'>
              <img
                src={product.imgSrc}
                alt={product.name}
                className='object-contain w-full h-64 pt-6'
              />
              {product.isNew && (
                <span className='absolute top-0 right-0 bg-red-500 font-bold text-white text-xs px-2 py-1 rounded-tr-md animate-pulse duration-200 transition-transform'>
                  NEW
                </span>
              )}
            </div>
            <h3 className='mt-4 text-center font-semibold text-lg relative z-10 text-black group-hover:text-white'>
              {product.name}
            </h3>
            <p className='text-center text-n-2 font-bold text-xl relative z-10 group-hover:text-white'>
              {product.price}
              <sup>
                <small>DA</small>
              </sup>
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default NewArrivals
