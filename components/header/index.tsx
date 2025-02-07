"use client";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import MobileNav from "./mobile-nav";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navItems } from "@/data";
import hamburgerIcon from "@/public/landing-page/hamburgerIcon.svg";
import closeIcon from "@/public/landing-page/closeIcon.svg";
import logo from "@/public/landing-page/logo.png";
import Button from "../button";
import useLoginStatus from "@/hooks/useLoginStatus";
import Cart from "./Cart";
import OneTapComponent from "@/app/(auth)/login/OneTap";
import UserMenu from "./UserMenu";

const Header = () => {
  const pathname = usePathname();
  const [showNav, setShowNav] = useState(false);
  const { isLoggedIn } = useLoginStatus();

  const variants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
  };

  return (
    <>
      <OneTapComponent />
      <header className="fixed z-20 h-[64px] w-full left-0 top-0 px-4 py-2 shadow-md bg-white flex justify-between items-center cursor-pointer lg:h-[72px] lg:px-10 xl:px-16">
        <div className="flex items-center gap-x-6">
          <Image
            src={showNav ? closeIcon : hamburgerIcon}
            alt="Hamburger icon"
            className="relative z-10 lg:hidden"
            onClick={() => setShowNav(!showNav)}
          />
          <Link href={"/"} className="relative z-10 w-[120px] lg:w-[150px]">
            <Image
              src={logo}
              alt={"EventTrio Logo"}
              className="w-full h-full"
            />
          </Link>
        </div>

        <nav className="hidden gap-x-5 lg:flex lg:flex-row xl:gap-x-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm  hover:text-secondaryColor-100 xl:text-base",
                pathname === item.href
                  ? "text-primaryColor"
                  : "text-secondaryColor"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        {!isLoggedIn ? (
          <div className="relative flex items-center gap-x-4">
            <div className="hidden gap-x-4 items-center lg:flex lg:flex-row">
              <Button as="link" href="/sign-up">
                Sign Up
              </Button>
              <Button
                as="link"
                href="/login"
                className="text-black bg-transparent "
              >
                Log in
              </Button>
            </div>
            <Cart />
          </div>
        ) : (
          <div className="flex items-center gap-x-4">
            <Cart />
            <UserMenu/>
          </div>
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
    </>
  );
};

export default Header;
