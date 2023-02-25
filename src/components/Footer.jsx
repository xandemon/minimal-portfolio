// import { FaStar } from "react-icons/fa";
import { SiCodeigniter } from "react-icons/si";
import favicon from "../assets/favicon.png";

const Footer = () => {
  return (
    <div className="flex justify-center items-center bg-neutral-900">
      <div className="flex justify-center items-center gap-6 m-2 py-2 rounded-md text-white tracking-widest text-sm text-center w-[85vw] my-5 p-3 bg-neutral-500 bg-opacity-5">
        <img alt="" src={favicon} width={25}></img>
        <span>Designed & Built by &copy;&nbsp;Sandesh&nbsp;Katwal</span>
        <SiCodeigniter color="orange" size={20} />
      </div>
    </div>
  );
};

export default Footer;
