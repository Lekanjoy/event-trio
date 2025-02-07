import Image from "next/image";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { logoutUser } from "@/app/(auth)/login/action";
import { IoIosLogOut } from "react-icons/io";
import avatar from "@/public/landing-page/avatar.svg";
import useLoginStatus from "@/hooks/useLoginStatus";

export default function UserMenu() {
  const { user } = useLoginStatus();

  return (
    <Menubar className="border-none shadow-none bg-none hidden lg:flex">
      <MenubarMenu>
        <MenubarTrigger>
          <Image
            src={user?.user_metadata?.avatar_url || avatar}
            width={25}
            height={25}
            alt="Avatar image"
            className="w-8 h-8 rounded-full cursor-pointer"
          />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem onClick={logoutUser}>
            Logout{" "}
            <MenubarShortcut>
              <IoIosLogOut size={20} />
            </MenubarShortcut>
          </MenubarItem>
          <MenubarItem>Dashboard</MenubarItem>
          <MenubarSeparator />
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
