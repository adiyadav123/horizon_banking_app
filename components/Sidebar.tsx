"use client";

import { ITEMS, sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";

const Sidebar = ({ user }: SiderbarProps) => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Button
          onClick={() => {
            router.push("/");
          }}
          className="flex mb-12 cursor-pointer items-center gap-2"
        >
          <Image
            src="/icons/logo.svg"
            width={43}
            height={34}
            alt="Horizon"
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">Horizon</h1>
        </Button>
        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Button
              onClick={() => {
                router.push(item.route);
              }}
              key={item.label}
              className={cn("sidebar-link", { "bg-bankGradient": isActive })}
            >
              <div className="relative size-6">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({ "brightness-[3] invert-1": isActive })}
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
          );
        })}
        USER
      </nav>
      FOOTER
    </section>
  );
};

export default Sidebar;
