import { watch } from '../../assets'
const WatchStory = () => {
  return (
    <section className='flex flex-col md:flex-row items-center justify-center p-6 md:p-12 '>
      <div className='relative'>
        <div className='absolute top-0 left-0 w-32 h-32 bg-orange-300'></div>
        <img
          src={watch}
          alt='Inspirational Watch'
          className='relative z-10 object-cover rounded-md'
        />
      </div>
      <div className='md:ml-12 mt-8 md:mt-0 text-center md:text-left'>
        <h4 className='text-orange-400 font-semibold uppercase tracking-wide'>
          Our Story
        </h4>
        <h2 className='text-3xl font-bold mt-2'>
          Inspirational Watch of this Year
        </h2>
        <p className='text-gray-500 mt-4'>
          The latest and modern watches of this year are available in various
          presentations in this store. Discover them now.
        </p>
        <button className='mt-6 bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg hover:bg-gray-700'>
          Discover
        </button>
      </div>
    </section>
  )
}

export default WatchStory
