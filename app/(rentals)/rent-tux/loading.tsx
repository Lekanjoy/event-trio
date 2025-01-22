import Image from "next/image";
import logo from '@/app/favicon.ico'

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <Image
        src={logo}
        alt="EventTrio Logo"
        className="w-[120px] animate-bounce lg:w-[150px]"
      />
    </div>
  );
};

export default Loading;
