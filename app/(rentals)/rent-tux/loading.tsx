import Image from "next/image";
import logo from '@/app/favicon.ico'

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/70 backdrop-blur-sm">
      <Image
        src={logo}
        alt="EventTrio Logo"
        className="animate-bounce"
      />
    </div>
  );
};

export default Loading;
