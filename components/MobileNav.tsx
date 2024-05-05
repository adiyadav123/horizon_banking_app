"use client";

import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { sidebarLinks } from "@/constants";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            height={30}
            width={30}
            className="cursor-pointer"
            alt="Hamburger"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
          <Button
            onClick={() => {
                router.push("/");
            }}
            className="flex cursor-pointer items-center gap-1 px-4"
          >
            <Image src="/icons/logo.svg" width={43} height={34} alt="Horizon" />
            <h1 className="text-26 font-bold text-black-1 font-ibm-plex-serif ">
              Horizon
            </h1>
          </Button>

          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((item) => {
                  const isActive =
                    pathname === item.route ||
                    pathname.startsWith(`${item.route}/`);

                  return (
                    <SheetClose asChild key={item.route}>
                      <Button
                        onClick={() => {
                            router.push(item.route);
                        }}
                        key={item.label}
                        className={cn("sidebar-link", {
                          "bg-bankGradient": isActive,
                        })}
                      >
                        <div className="relative size-6">
                          <Image
                            src={item.imgURL}
                            alt={item.label}
                            fill
                            className={cn({
                              "brightness-[3] invert-1": isActive,
                            })}
                          />
                        </div>
                        <p
                          className={cn("sidebar-label", {
                            "!text-white": isActive,
                          })}
                        >
                          {item.label}
                        </p>
                      </Button>
                    </SheetClose>
                  );
                })}
              </nav>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
