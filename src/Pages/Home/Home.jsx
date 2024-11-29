import Ads from "./Ads"
import Products from "./Products"

const Home = () => {
  return (
    <div className="px-5 py-[100px] w-full h-screen overflow-y-scroll">
      <Ads />
      <Products title='Trending Products' rowsCount={1} slidesPerView={3} />
      <Products title='Electronic Products' rowsCount={1} slidesPerView={3} />
      <Products title='Fancy Products' rowsCount={1} slidesPerView={3} />
    </div>
  )
}

export default Home