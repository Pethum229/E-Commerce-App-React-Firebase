import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

const catoegoryArr = [
    {
        imageUrl: 'https://th.bing.com/th/id/OIP.9AUv1qsxY6ALRL6R8129hQHaHa?rs=1&pid=ImgDetMain',
        title: 'Category Title 1',
        categoryId: 'category1',
    },
    {
        imageUrl: 'https://th.bing.com/th/id/OIP.9AUv1qsxY6ALRL6R8129hQHaHa?rs=1&pid=ImgDetMain',
        title: 'Category Title 2',
        categoryId: 'category2',
    },
    {
        imageUrl: 'https://th.bing.com/th/id/OIP.9AUv1qsxY6ALRL6R8129hQHaHa?rs=1&pid=ImgDetMain',
        title: 'Category Title 3',
        categoryId: 'category3',
    },
    {
        imageUrl: 'https://th.bing.com/th/id/OIP.9AUv1qsxY6ALRL6R8129hQHaHa?rs=1&pid=ImgDetMain',
        title: 'Category Title 4',
        categoryId: 'category4',
    },
    {
        imageUrl: 'https://th.bing.com/th/id/OIP.9AUv1qsxY6ALRL6R8129hQHaHa?rs=1&pid=ImgDetMain',
        title: 'Category Title 5',
        categoryId: 'category5',
    }
]

const Category = () => {
  return (
    <div className="px-5 py-[100px] w-full h-screen overflow-y-scroll">
      <section className="w-full p-2">
        <h1 className="text-lg font-bold mb-3">Main Categories</h1>
        <div className="grid grid-cols-3 grid-rows-[auto] gap-5">
            {catoegoryArr.map(({imageUrl,title,categoryId},index) => <CategoryUnitItems key={index} imageUrl={imageUrl} title={title} categoryId={categoryId}/>)}
        </div>
      </section>
    </div>
  );
};

export default Category;

const CategoryUnitItems = ({ imageUrl,title,categoryId }) => {
  return (
    <Link to={`/category/${categoryId}`}>
    <IconButton sx={{
        color: 'gray',
        padding: '1px',
        borderRadius: '6px'
    }}>
      <div style={{boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',}} className="w-full py-6 px-1 rounded-md flex flex-col items-center m-1">
        <img
          src={imageUrl}
          alt="Category Item" className="rounded-full w-[50px] h-[50px]"
        />
        <h2 className="text-[10px] text-black font-bold mt-3">{title}</h2>
      </div>
    </IconButton>
    </Link>
  );
};
