import Image from "next/image";
import logo from "@/public/landing-page/logo.png";

const loading = () => {
  return (
    <div className="fixed inset-0 bg-white/70 backdrop-blur-sm z-[999] w-full  h-screen flex justify-center items-center">
      <Image
        src={logo}
        alt={"EventTrio Logo"}
        className="w-[120px] animate-bounce lg:w-[150px]"
      />
    </div>
  );
};

export default loading;
