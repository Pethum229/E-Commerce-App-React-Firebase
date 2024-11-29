import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const adsElement = [
  {
    imageUrl: 'https://th.bing.com/th/id/R.977fabcded9eb4946dbf747ab8cd4dd4?rik=4O3q4lIdOvnvuw&riu=http%3a%2f%2fdaywallpaper.files.wordpress.com%2f2013%2f08%2fgreen-nature-landscape.jpg&ehk=uFEW8tncOGPG2c1h6jbeOM7NOfeVqWmEJCJ3htHoB5E%3d&risl=&pid=ImgRaw&r=0',
  },
  {
    imageUrl: 'https://th.bing.com/th/id/R.977fabcded9eb4946dbf747ab8cd4dd4?rik=4O3q4lIdOvnvuw&riu=http%3a%2f%2fdaywallpaper.files.wordpress.com%2f2013%2f08%2fgreen-nature-landscape.jpg&ehk=uFEW8tncOGPG2c1h6jbeOM7NOfeVqWmEJCJ3htHoB5E%3d&risl=&pid=ImgRaw&r=0',
  },
  {
    imageUrl: 'https://th.bing.com/th/id/R.977fabcded9eb4946dbf747ab8cd4dd4?rik=4O3q4lIdOvnvuw&riu=http%3a%2f%2fdaywallpaper.files.wordpress.com%2f2013%2f08%2fgreen-nature-landscape.jpg&ehk=uFEW8tncOGPG2c1h6jbeOM7NOfeVqWmEJCJ3htHoB5E%3d&risl=&pid=ImgRaw&r=0',
  },
  {
    imageUrl: 'https://th.bing.com/th/id/R.977fabcded9eb4946dbf747ab8cd4dd4?rik=4O3q4lIdOvnvuw&riu=http%3a%2f%2fdaywallpaper.files.wordpress.com%2f2013%2f08%2fgreen-nature-landscape.jpg&ehk=uFEW8tncOGPG2c1h6jbeOM7NOfeVqWmEJCJ3htHoB5E%3d&risl=&pid=ImgRaw&r=0',
  },
];

const Ads = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="rounded-lg overflow-hidden"
    >
      {adsElement.map(({ imageUrl }, index) => (
        <SwiperSlide key={index}>
            <AddUnit imageUrl={imageUrl} id={index} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Ads;

const AddUnit = ({ imageUrl, id }) => {
  return (
    <SwiperSlide>
      <img src={imageUrl} alt={`Ad${id}`} className="w-full object-contain rounded-lg" />
    </SwiperSlide>
  );
};
