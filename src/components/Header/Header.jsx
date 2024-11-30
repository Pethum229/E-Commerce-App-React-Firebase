import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { IconButton } from "@mui/material";
import { useRef } from "react";

let clicked = false;

const Header = () => {

  const logoRef = useRef();
  const searchBoxRef = useRef();
  const searchBoxContainerRef = useRef();

  const searchButtonClickHandle = () => {
    if(clicked){
      logoRef.current.style = 'display:none;';
      searchBoxRef.current.style = 'display:inline-block';
      searchBoxContainerRef.current.style.backgroundColor = '#fdf3f3';
    }else{
      logoRef.current.style = 'display:inline-block;';
      searchBoxRef.current.style = 'display:none';
      searchBoxContainerRef.current.style.backgroundColor = 'inherit';
    }
  }

  return (
    <header className="fixed top-0 left-0 z-[100] w-full p-2 bg-custom-color-01 flex items-center justify-between drop-shadow-custom-shadow-01">
      {/* Header Left */}
      <div className="flex items-center">
        <IconButton
          sx={{
            color: "red",
          }}
        >
          <MenuIcon
            sx={{
              color: "#c82196",
            }}
          />
        </IconButton>
        <h1
          ref={logoRef}
          style={{
            display:
              window.innerWidth < 640
                ? clicked
                  ? "none"
                  : "inline-block"
                : "inline-block",
          }}
          className="ml-2 text-md font-bold "
        >
          TLK <span className="text-[#c82196]">Store</span>
        </h1>
        <div ref={searchBoxContainerRef}
          style={{
            backgroundColor:
              window.innerWidth < 640
                ? clicked
                  ? "#fdf3f3"
                  : "inherit"
                : "#fdf3f3",
          }}
          className="overflow-hidden ml-2 flex items-center rounded-full bg-[#fdf3f3]"
        >
          <input
            ref={searchBoxRef}
            type="text"
            placeholder="Search"
            style={{
              display:
                window.innerWidth < 640
                  ? clicked
                    ? "inline-block"
                    : "none"
                  : "inline-block",
            }}
            className="hidden sm:inline-block ml-1 outline-none p-2 font-semibold text-sm w-[200px] bg-inherit transition-all delay-500"
          />
          <IconButton
            onClick={() => {
              if (window.innerWidth < 640) {
                clicked = !clicked;
                searchButtonClickHandle();
              }
            }}
          >
            <SearchIcon
              sx={{
                color:
                  window.innerWidth < 640
                    ? clicked
                      ? "rgb(156 153 175)"
                      : "black"
                    : "rgb(156 153 175)",
              }}
              className="text-gray-400 mr-2"
            />
          </IconButton>
        </div>
      </div>

      {/* Header Right */}
      <IconButton>
        <div className="relative p-1">
          <ShoppingCartOutlinedIcon className="text-black" />
          <div className="text-[7px] bg-black font-semibold text-white w-3 h-3 rounded-full flex items-center justify-center absolute top-[2px] right-0">
            2
          </div>
        </div>
      </IconButton>
    </header>
  );
};
export default Header;
