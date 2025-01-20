import logo from "@/public/landing-page/logo.png";
import Image from "next/image";

const loading = () => {
  return (
    <div className="absolute bg-red-800 z-50 w-full top-0 left-0 h-screen flex justify-center items-center">
      <Image
        src={logo}
        alt={"EventTrio Logo"}
        className="w-[120px] animate-bounce lg:w-[150px]"
      />
    </div>
  );
};

export default loading;
