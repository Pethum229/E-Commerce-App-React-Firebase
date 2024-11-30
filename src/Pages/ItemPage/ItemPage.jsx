import { IconButton } from "@mui/material";
import { useRef } from "react";

const itemImageArr = [
  "https://th.bing.com/th/id/OIP.9AUv1qsxY6ALRL6R8129hQHaHa?rs=1&pid=ImgDetMain",
  "https://th.bing.com/th/id/OIP.9AUv1qsxY6ALRL6R8129hQHaHa?rs=1&pid=ImgDetMain",
  "https://th.bing.com/th/id/R.40728c0f31a25429f50eac4008a44be9?rik=34M1eL0zx0FLlA&pid=ImgRaw&r=0",
  "https://th.bing.com/th/id/OIP.9AUv1qsxY6ALRL6R8129hQHaHa?rs=1&pid=ImgDetMain",
];

const ItemPage = () => {
  const mainImageRef = useRef();
  const subImageRef = useRef([]);
  return (
    <div className="px-5 py-[100px] w-full h-screen overflow-y-scroll">
      <h1 className="text-lg font-bold text-black px-3 mb-7">Item Title</h1>
      <img
      ref={mainImageRef}
        src={itemImageArr[0]}
        alt="Main Item"
        className="w-full object-contain rounded-md"
      />
      <div className="w-full mt-5 grid grid-cols-4 text-center grid-rows-1">
        {itemImageArr.map((ele, index) => (
          <IconButton
            key={index}
            sx={{
              padding: "1px",
              borderRadius: "2px",
            }}
            onClick={() => {
              subImageRef.current[index].style.border = '5px solid gold';
              mainImageRef.current.src = subImageRef.current[index].src;
              for (let i = 0; i<itemImageArr.length; i++){
                if(i !== index){
                  subImageRef.current[i].style.border = 'none';
                }
              }
            }}
          >
            <img
              ref={(refEle) => (subImageRef.current[index] = refEle)}
              name={`Item image ref : ${index}`}
              src={ele}
              alt={ele}
              className="w-full object-contain rounded-sm gap-3"
            />
          </IconButton>
        ))}
      </div>
    </div>
  );
};

export default ItemPage;
