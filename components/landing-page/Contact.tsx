import Link from "next/link";
import Image from "next/image";
import Button from "../button";
import { MdKeyboardArrowRight } from "react-icons/md";
import mail from "@/public/landing-page/envelope.svg";
import phone from "@/public/landing-page/phone.svg";
import address from "@/public/landing-page/map.svg";
import map from "@/public/landing-page/map.webp";

const Contact = () => {
  return (
    <section className="w-full px-4 pb-16 lg:pb-[112px] lg:px-16">
      <section className="w-full flex flex-col justify-between gap-y-12 md:gap-x-5 md:flex-row lg:gap-x-10 xl:gap-x-20">
        <div className="flex flex-col gap-y-2 lg:gap-y-3 lg:w-3/5">
          <span className="text-sm font-medium lg:text-base">Connect</span>
          <h6 className="font-bold text-4xl lg:text-5xl">Get in Touch</h6>
          <p className="text-sm lg:text-base">
            Reach out to us for any enquiry or questions about any of our
            services. We are always here to help you with any questions or
            concerns you may have.
          </p>
          <Button
            as="link"
            href="/contact"
            className="bg-transparent text-black flex items-center"
          >
            Contact <MdKeyboardArrowRight size={20} />
          </Button>
        </div>

        <div className="flex flex-col gap-y-6">
          <div className="flex gap-x-4">
            <Image src={mail} alt="" className="w-5 h-5" />
            <div className="flex flex-col">
              <span className="font-bold">Email</span>
              <Link
                href="mailto:hello@eventtrio.com"
                className="text-sm underline"
              >
                hello@eventtrio.com
              </Link>
            </div>
          </div>
          <div className="flex gap-x-4">
            <Image src={phone} alt="" className="w-5 h-5" />
            <div className="flex flex-col">
              <span className="font-bold">Phone</span>
              <Link href="tel:+1 (555) 000-0000" className="text-sm underline">
                +1 (555) 000-0000
              </Link>
            </div>
          </div>
          <div className="flex gap-x-4">
            <Image src={address} alt="" className="w-5 h-5" />
            <div className="flex flex-col">
              <span className="font-bold">Office</span>
              <span className="text-sm ">
                123 Sample St, Sydney NSW 2000 AU
              </span>
            </div>
          </div>
        </div>

      </section>
        <div className="w-full flex mt-12 lg:h-[368px] lg:mt-16 xl:mt-20">
          <Image src={map} alt="" className="w-full h-full object-cover" />
        </div>
    </section>
  );
};

export default Contact;
