"use client";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import * as React from "react";
import { Dialog, DialogClose } from "./ui/dialog";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet";
import logo from "../../public/logo.png";

export function NavBar() {
  return (
    <div className="flex items-center min-w-full w-full fixed justify-center p-4 z-[50]">
      <div className="flex justify-between md:w-[720px] w-[95%] border dark:border-blue-700 bg-gradient-to-b from-black via-gray-900 to-blue-900 rounded-xl p-4 shadow-lg h-16">
        {/* Mobile Navigation Menu */}
        <Dialog>
          <SheetTrigger className="min-[825px]:hidden p-2 transition text-white">
            <MenuIcon />
          </SheetTrigger>
          <SheetContent side="left" className="bg-black text-white">
            <SheetHeader>
              <SheetDescription>
                Explore NavAI and discover its features.
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col space-y-3 mt-[1rem] z-[99]">
              <DialogClose asChild>
                <Link href="/">
                  <Button variant="outline" className="w-full text-white border-blue-500 hover:bg-blue-800">
                    Home
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="/about">
                  <Button variant="outline" className="w-full text-white border-blue-500 hover:bg-blue-800">
                    About Us
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="/contact">
                  <Button variant="outline" className="w-full text-white border-blue-500 hover:bg-blue-800">
                    Contact Us
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="/api/auth/login">
                  <Button variant="outline" className="w-full text-white border-blue-500 hover:bg-blue-800">
                    Login
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="/api/auth/login?screen_hint=signup">
                  <Button variant="outline" className="w-full text-white border-blue-500 hover:bg-blue-800">
                    Sign Up
                  </Button>
                </Link>
              </DialogClose>
            </div>
          </SheetContent>
        </Dialog>

        {/* Desktop Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList className="max-[825px]:hidden">
            <Link href="/">
              <Image
                src={logo}
                width={120}
                height={20}
                alt="NavAI Logo"
                className="not-prose mt-8 mb-2 dark:invert md:mb-8"
              />
            </Link>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Navigation Links */}
        <div className="flex items-center gap-2 max-[825px]:hidden text-white">
          <Link href="/">
            <Button variant="ghost" className="text-gray-300 hover:text-blue-500 hover:bg-blue-800">
              Home
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="ghost" className="text-gray-300 hover:text-blue-500 hover:bg-blue-800">
              About Us
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="ghost" className="text-gray-300 hover:text-blue-500 hover:bg-blue-800">
              Contact Us
            </Button>
          </Link>
          <Link href="/api/auth/login">
            <Button variant="outline" className="text-black border-blue-500 hover:bg-blue-800">
              Login
            </Button>
          </Link>
          <Link href="/api/auth/login?screen_hint=signup">
            <Button
              variant="default"
              className="bg-blue-600 text-white hover:bg-blue-700"
            >
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-800 hover:text-white focus:bg-blue-800 focus:text-white",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-300">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
