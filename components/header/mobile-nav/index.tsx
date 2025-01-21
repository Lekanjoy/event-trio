import Link from "next/link";
import { navItems } from "@/data";
import Button from "@/components/button";
import useLoginStatus from "@/hooks/useLoginStatus";
import { logoutUser } from "@/app/(auth)/login/action";

const MobileNav = () => {
  const { isLoggedIn } = useLoginStatus();

  return (
    <aside className="z-10 absolute  top-[0] left-0 px-6 w-full bg-white h-[90dvh] bg- shadow flex flex-col gap-y-14 lg:hidden">
      <div className="flex flex-col gap-y-8 mt-[120px]">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-sm 
                text-secondaryColor hover:text-primaryColor-200"
          >
            {item.name}
          </Link>
        ))}
      </div>
      {!isLoggedIn ? (
        <div className="flex gap-x-2">
          <Button as="link" href="/sign-up">
            Sign Up
          </Button>
          <Button as="link" href="/login" className="text-black bg-transparent">
            Log in
          </Button>
        </div>
      ) : (
        <Button onClick={logoutUser}>Logout</Button>
      )}
    </aside>
  );
};

export default MobileNav;
