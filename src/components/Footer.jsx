// import { FaStar } from "react-icons/fa";
import { SiCodeigniter } from "react-icons/si";
import favicon from "../assets/favicon.png";

const Footer = () => {
  return (
    <div className="flex justify-center items-center bg-neutral-900">
      <div className="flex justify-center items-center gap-4 m-2 py-2 rounded-md text-white tracking-widest text-sm text-center w-1/2 bg-neutral-500 bg-opacity-5">
        <img alt="" src={favicon} width={25}></img>
        Designed & Built by Sandesh Katwal
        <SiCodeigniter color="orange" size={20} />
      </div>
    </div>
  );
};

export default Footer;
