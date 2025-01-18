"use client";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import MobileNav from "./mobile-nav";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { navItems } from "@/data";
import hamburgerIcon from "@/public/landing-page/hamburgerIcon.svg";
import closeIcon from "@/public/landing-page/closeIcon.svg";
import logo from "@/public/landing-page/logo.png";
import Button from "../button";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [showNav, setShowNav] = useState(false);
  const isLoggedIn  = false;

  const variants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
  };

  async function logout() {
    // await logOutUser();
    // Clear session
    sessionStorage.removeItem("token");
    router.push("/auth/login");
  }

  return (
    <header className="fixed z-20 h-[64px] w-full left-0 top-0 px-4 py-2 border-b border-black bg-white flex justify-between items-center cursor-pointer lg:h-[72px] lg:px-10 xl:px-16">
      <Link href={"/"} className="relative z-10 w-[120px] lg:w-[150px]">
        <Image src={logo} alt={"EventTrio Logo"} className="w-full h-full"/>
      </Link>

      <div className="flex items-center gap-x-6 lg:hidden">
        <Image
          src={showNav ? closeIcon : hamburgerIcon}
          alt="Hamburger icon"
          className="relative z-10"
          onClick={() => setShowNav(!showNav)}
        />
      </div>

      <nav className="hidden gap-x-5 lg:flex lg:flex-row xl:gap-x-10">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn("text-sm  hover:text-secondaryColor-100 xl:text-base", pathname === item.href ? "text-primaryColor" : "text-secondaryColor")}
          >
            {item.name}
          </Link>
        ))}
      </nav>
      {!isLoggedIn ? (
        <div className="hidden gap-x-4 items-center lg:flex lg:flex-row">
         <Button
            as="link"
            href="/auth/sign-up"
          >
            Sign Up
          </Button>
          <Button
            as="link"
            href="auth/login"
            className="text-background bg-transparent "
          >
            Log in
          </Button>
        </div>
      ) : (
        <button
          className="whitespace-nowrap w-fit hidden items-center gap-x-2 py-3 px-5 text-white bg-primaryColor rounded-md text-xs font-semibold ease-in-out duration-300 sm:text-sm lg:text-base 2xl:text-lg lg:hover:opacity-80 lg:flex"
          onClick={logout}
        >
          Logout
        </button>
      )}

      {/* Mobile Nav and UI */}
      <AnimatePresence>
        {showNav && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
            transition={{ type: "spring", stiffness: 50 }}
            className="fixed inset-0"
          >
            <MobileNav />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
