import Link from "next/link";
import { useRouter } from "next/navigation";
import { navItems } from "@/data";
import Button from "@/components/button";

const MobileNav = () => {
  const isLoggedIn = false;
  const router = useRouter();

  async function logout() {
    // await logOutUser();
    // Clear session
    sessionStorage.removeItem("token");
    router.push("/auth/login");
  }
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
          <Button
            as="link"
            href="/auth/sign-up"
          >
            Sign Up
          </Button>
          <Button
            as="link"
            href="auth/login"
            className="text-background bg-transparent"
          >
            Log in
          </Button>
        </div>
      ) : (
        <button
          onClick={logout}
          className="w-fit py-3 px-10 bg-primaryColor text-white text-xs rounded-md "
        >
          Logout
        </button>
      )}
    </aside>
  );
};

export default MobileNav;
