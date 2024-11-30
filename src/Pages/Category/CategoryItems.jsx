import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { categorySelector } from "../../Store/ReduxSlice/categorySlice";
import { IconButton, Rating } from "@mui/material";

const catoegoryItemArr = [
  {
    imageUrl:
      "https://th.bing.com/th/id/OIP.9AUv1qsxY6ALRL6R8129hQHaHa?rs=1&pid=ImgDetMain",
    title: "Category Title 1",
  },
  {
    imageUrl:
      "https://th.bing.com/th/id/OIP.9AUv1qsxY6ALRL6R8129hQHaHa?rs=1&pid=ImgDetMain",
    title: "Category Title 2",
  },
  {
    imageUrl:
      "https://th.bing.com/th/id/OIP.9AUv1qsxY6ALRL6R8129hQHaHa?rs=1&pid=ImgDetMain",
    title: "Category Title 3",
  },
  {
    imageUrl:
      "https://th.bing.com/th/id/OIP.9AUv1qsxY6ALRL6R8129hQHaHa?rs=1&pid=ImgDetMain",
    title: "Category Title 4",
  },
  {
    imageUrl:
      "https://th.bing.com/th/id/OIP.9AUv1qsxY6ALRL6R8129hQHaHa?rs=1&pid=ImgDetMain",
    title: "Category Title 5",
  },
];

const CategoryItems = () => {
  const category = useSelector(categorySelector);
  const { categoryId } = useParams();
  const [categoryTitle] = category.filter((ele) => ele.id === categoryId);

  return (
    <div className="px-5 py-[100px] w-full h-screen overflow-y-scroll">
      <h1 className="ml-2 mt-2 mb-3 font-bold text-lg">
        {categoryTitle.title}
      </h1>
      <div className="w-full grid grid-cols-3 grid-rows-[auto] gap-4">
        {catoegoryItemArr.map(({ imageUrl, title }, index) => (
          <CategoryItemUnit key={index} imageUrl={imageUrl} title={title} />
        ))}
      </div>
    </div>
  );
};

export default CategoryItems;

const CategoryItemUnit = ({ imageUrl, title }) => (
  <IconButton
    sx={{
      color: "gray",
      padding: "1px",
      borderRadius: "6px",
    }}
  >
    <div style={{boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',}} className="w-full">
      <img src={imageUrl} alt={title} className="w-full object-contain" />
      <h3 className="text-left ml-2 text-sm font-bold text-black">{title}</h3>
      <Rating
        name={imageUrl}
        value={3.5}
        precision={0.1}
        size="small"
        readOnly
      />
    </div>
  </IconButton>
);
