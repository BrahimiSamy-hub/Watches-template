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
      highlighted: true, // This will highlight the item like in the image
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
    <section className='py-12 bg-white'>
      <div className='text-center mb-8'>
        <h2 className='text-xl font-semibold'>New Arrivals</h2>
        <div className='w-16 h-1 bg-orange-400 mx-auto mt-2'></div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto'>
        {products.map((product, index) => (
          <div
            key={index}
            className={`p-4 rounded-md shadow-md border ${
              product.highlighted ? 'bg-orange-300' : 'bg-white'
            }`}
          >
            <div className='relative'>
              <img
                src={product.imgSrc}
                alt={product.name}
                className='object-contain w-full h-64'
              />
              {product.isNew && (
                <span className='absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded-md'>
                  NEW
                </span>
              )}
            </div>
            <h3 className='mt-4 text-center font-semibold text-lg'>
              {product.name}
            </h3>
            <p className='text-center text-orange-500 font-bold text-xl'>
              ${product.price}
            </p>
            {product.highlighted && (
              <button className='mt-4 w-full bg-black text-white py-2 rounded-md hover:bg-gray-700'>
                Add to Cart
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default NewArrivals
