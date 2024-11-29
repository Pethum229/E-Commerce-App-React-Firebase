import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { IconButton } from "@mui/material";
import { useState } from "react";

const Footer = () => {
  const [whoIsClick, setWhoIsClick] = useState({
    Home: true,
    Category: false,
    Profile: false,
  });
  return (
    <footer className="fixed bottom-0 left-0 z-[100] w-full p-3 bg-custom-color-01 flex items-center justify-between drop-shadow-custom-shadow-01">
      <FooterIcon
        clickFunc={{ whoIsClick, setWhoIsClick }}
        Icon={HomeOutlinedIcon}
        IconText="Home"
      />
      <FooterIcon
        clickFunc={{ whoIsClick, setWhoIsClick }}
        Icon={AppsOutlinedIcon}
        IconText="Category"
      />
      <FooterIcon
        clickFunc={{ whoIsClick, setWhoIsClick }}
        Icon={AccountCircleOutlinedIcon}
        IconText="Profile"
      />
    </footer>
  );
};

export default Footer;

const FooterIcon = ({ Icon, IconText, clickFunc }) => {
  const clickHandle = () => {
    let obj = {
      Home: false,
      Category: false,
      Profile: false,
      [IconText]: true,
    };

    // if (IconText === "Category") {
    //   obj.Home = false;
    //   obj.Category = true;
    //   obj.Profile = false;
    // } else if (IconText === "Profile") {
    //   obj.Home = false;
    //   obj.Category = false;
    //   obj.Profile = true;
    // }
    clickFunc.setWhoIsClick(obj);
  };

  return (
    <IconButton
      sx={{
        padding: "4px",
        paddingTop: "0",
        borderRadius: "5px",
        color: "red",
      }}
      onClick={clickHandle}
    >
      <div
        style={{
          borderBottom: clickFunc.whoIsClick[IconText] && "2px solid #c82196",
          color: clickFunc.whoIsClick[IconText] && "#c82196",
        }}
        className="text-gray-700 hover:text-[#c82196] transition-all duration-300"
      >
        <Icon />
        <p className="text-xs font-semibold">{IconText}</p>
      </div>
    </IconButton>
  );
};
