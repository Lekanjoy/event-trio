import Link from "next/link";
import Image from "next/image";
import Button from "../button";
import logo from "@/public/landing-page/logo.png";
import facebook from "@/public/landing-page/Facebook.svg";
import instagram from "@/public/landing-page/Instagram.svg";
import X from "@/public/landing-page/X.svg";
import linkedIn from "@/public/landing-page/LinkedIn.svg";

const Footer = () => {
  return (
    <>
      <footer className=" w-full min-h-[300px] border-t pt-10 pb-16 px-4 flex flex-col justify-between gap-y-12 lg:flex-row lg:px-16">
        <div className="flex flex-col gap-y-2">
          <Link href={"/"} className="relative z-10 w-[120px] lg:w-[150px]">
            <Image
              src={logo}
              alt={"EventTrio Logo"}
              className="w-full h-full"
            />
          </Link>
          <p>
            Subscribe to our newsletter for the latest updates on <br />{" "}
            features and releases.
          </p>
          <form className="flex flex-col gap-y-2 lg:flex-row lg:gap-x-2">
            <input
              type="email"
              placeholder="Yor email here"
              className="p-3 bg-transparent border border-black focus-visible:outline-primary xl:w-[300px]"
            />
            <Button className="bg-transparent text-black w-full p-3 lg:w-fit lg:px-6">
              Join
            </Button>
          </form>
          <span className="text-xs">
            By subscribing, you consent to our Privacy Policy and agree to
            receive updates.
          </span>
        </div>

        <div className="flex flex-col">
          <p className="mb-3 font-semibold lg:mb-4">Quick Links</p>
          <nav className="flex flex-col gap-y-2 text-sm lg:gap-y-4">
            <Link href="/">About Us</Link>
            <Link href="/">Contact Us</Link>
            <Link href="/">FAQ</Link>
            <Link href="/">Careers</Link>
          </nav>
        </div>

        <div className="flex flex-col">
          <p className="mb-3 font-semibold lg:mb-4">Resources</p>
          <nav className="flex flex-col gap-y-2 text-sm lg:gap-y-4">
            <Link href="/">Help Center</Link>
            <Link href="/">Events</Link>
            <Link href="/">Community</Link>
          </nav>
        </div>
        <div className="flex flex-col">
          <p className="mb-3 font-semibold lg:mb-4">Stay Connected</p>
          <nav className="flex flex-col gap-y-2 text-sm lg:gap-y-4">
            <Link href="/" className="flex gap-x-2 items-center">
              <Image src={facebook} alt="Facebook Icon" />
              <span>Facebook</span>
            </Link>
            <Link href="/" className="flex gap-x-2 items-center">
              <Image src={instagram} alt="Instagram Icon" />
              <span>Instagram</span>
            </Link>
            <Link href="/" className="flex gap-x-2 items-center">
              <Image src={X} alt="X Icon" />
              <span>X (Formerly Twitter)</span>
            </Link>
            <Link href="/" className="flex gap-x-2 items-center">
              <Image src={linkedIn} alt="LinkedIn Icon" />
              <span>LinkedIn</span>
            </Link>
          </nav>
        </div>
      </footer>
      <section className="px-4 pb-12 lg:px-16">
        <div className="text-sm flex flex-col-reverse gap-y-8 pt-6 border-t border-black justify-between lg:flex-row">
          <span>© 2025 EventTrio. All rights reserved.</span>
          <div className="flex flex-col gap-y-4 underline lg:flex-row lg:gap-x-6">
            <Link href="">Privacy Policy</Link>
            <Link href="">Terms of Service</Link>
            <Link href="">Cookie Settings</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
