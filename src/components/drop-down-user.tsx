import Link from "next/link";

import { HomeIcon, LaptopIcon, MenuIcon, ShirtIcon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DropdownUser = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="md:hidden block">
        <MenuIcon className="h-6 w-6" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 mt-3 border-none" align="center">
        <Link href="/">
          <DropdownMenuItem>
            <HomeIcon className="h-4 w-4 mr-2" />
            Home
          </DropdownMenuItem>
        </Link>
        <Link href="#">
          <DropdownMenuItem>
            <ShirtIcon className="h-4 w-4 mr-2" />
            Clothes
          </DropdownMenuItem>
        </Link>
        <Link href="#">
          <DropdownMenuItem>
            <LaptopIcon className="h-4 w-4 mr-2" />
            Electronics
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownUser;
