import Hero from '../components/Home/Hero'
import NewArrivals from '../components/Home/NewArrivals'
import { FeaturedProducts } from '../components/Home/FeaturedProducts'
import WatchStory from '../components/Home/WatchStory'
const Home = () => {
  return (
    <section className='mx-10'>
      <Hero />
      <FeaturedProducts />
      <WatchStory />
      <NewArrivals />
    </section>
  )
}

export default Home
