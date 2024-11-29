import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { IconButton } from "@mui/material";
import { useState } from "react";

const Header = () => {
  const [isSearch, setIsSearch] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-[100] w-full py-5 px-2 bg-custom-color-01 flex items-center justify-between drop-shadow-custom-shadow-01">
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
          style={{
            display:
              window.innerWidth < 640
                ? isSearch
                  ? "none"
                  : "inline-block"
                : "inline-block",
          }}
          className="ml-2 text-md font-bold "
        >
          TLK <span className="text-[#c82196]">Store</span>
        </h1>
        <div
          style={{
            backgroundColor:
              window.innerWidth < 640
                ? isSearch
                  ? "#fdf3f3"
                  : "inherit"
                : "#fdf3f3",
          }}
          className="overflow-hidden ml-2 flex items-center rounded-full bg-[#fdf3f3]"
        >
          <input
            type="text"
            placeholder="Search"
            style={{
              display:
                window.innerWidth < 640
                  ? isSearch
                    ? "inline-block"
                    : "none"
                  : "inline-block",
            }}
            className="hidden sm:inline-block ml-1 outline-none p-2 font-semibold text-sm w-[200px] bg-inherit transition-all delay-500"
          />
          <IconButton
            onClick={() => {
              if (window.innerWidth < 640) {
                setIsSearch(!isSearch);
              }
            }}
          >
            <SearchIcon
              sx={{
                color:
                  window.innerWidth < 640
                    ? isSearch
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
        <ShoppingCartOutlinedIcon />
      </IconButton>
    </header>
  );
};
export default Header;
