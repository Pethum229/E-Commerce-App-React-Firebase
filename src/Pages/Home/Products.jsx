import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Mousewheel, Pagination } from "swiper/modules";
import { IconButton, Rating } from "@mui/material";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "./style.css";

const productArray = [
  {
    imageUrl:
      "https://th.bing.com/th/id/OIP.9AUv1qsxY6ALRL6R8129hQHaHa?rs=1&pid=ImgDetMain",
    price: 100,
    productTitle: "Product 01",
  },
  {
    imageUrl:
      "https://th.bing.com/th/id/OIP.9AUv1qsxY6ALRL6R8129hQHaHa?rs=1&pid=ImgDetMain",
    price: 100,
    productTitle: "Product 02",
  },
  {
    imageUrl:
      "https://th.bing.com/th/id/OIP.9AUv1qsxY6ALRL6R8129hQHaHa?rs=1&pid=ImgDetMain",
    price: 100,
    productTitle: "Product 03",
  },
  {
    imageUrl:
      "https://th.bing.com/th/id/OIP.9AUv1qsxY6ALRL6R8129hQHaHa?rs=1&pid=ImgDetMain",
    price: 100,
    productTitle: "Product 04",
  },
  {
    imageUrl:
      "https://th.bing.com/th/id/OIP.9AUv1qsxY6ALRL6R8129hQHaHa?rs=1&pid=ImgDetMain",
    price: 100,
    productTitle: "Product 05",
  },
  {
    imageUrl:
      "https://th.bing.com/th/id/OIP.9AUv1qsxY6ALRL6R8129hQHaHa?rs=1&pid=ImgDetMain",
    price: 100,
    productTitle: "Product 06",
  },
  {
    imageUrl:
      "https://th.bing.com/th/id/OIP.9AUv1qsxY6ALRL6R8129hQHaHa?rs=1&pid=ImgDetMain",
    price: 100,
    productTitle: "Product 07",
  },
  {
    imageUrl:
      "https://th.bing.com/th/id/OIP.9AUv1qsxY6ALRL6R8129hQHaHa?rs=1&pid=ImgDetMain",
    price: 100,
    productTitle: "Product 08",
  },
  {
    imageUrl:
      "https://th.bing.com/th/id/OIP.9AUv1qsxY6ALRL6R8129hQHaHa?rs=1&pid=ImgDetMain",
    price: 100,
    productTitle: "Product 09",
  },
];
const Products = ({ title, rowsCount, slidesPerView }) => {
  return (
    <section className="w-full mt-6">
      <h1 className="text-lg font-bold mb-3">{title}</h1>
      <Swiper
        slidesPerView={Number(slidesPerView)}
        grid={{
          rows: Number(rowsCount),
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        modules={[Grid, Pagination, Mousewheel]}
      >
        {productArray.map(({ imageUrl, price, productTitle }, index) => (
          <SwiperSlide key={index}>
            <ProductUnit
              imageUrl={imageUrl}
              price={price}
              productTitle={productTitle}
              id={index}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Products;

const ProductUnit = ({ imageUrl, price, productTitle, id }) => (
  <IconButton
    sx={{
      padding: "4px",
      borderRadius: "5px",
      color: "red",
      margin: "3px",
      marginBottom: "30px",
    }}
  >
    <div className="w-full">
      <img
        src={imageUrl}
        alt={`product_unit_${id}`}
        className="w-full object-contain"
      />
      <h3 className="text-sm font-semibold text-stone-900">{productTitle}</h3>
      <Rating 
      name={imageUrl}
      value={3.5}
      precision={0.1}
      size="small"
      readOnly
      />
      <h3 className="text-stone-900 font-bold text-lg">Rs.{price}/=</h3>
    </div>
  </IconButton>
);
